import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Integrations } from '/imports/api/integrations/integrations';
import { KIND_CHOICES } from '/imports/api/integrations/constants';
import { Tags } from '/imports/api/tags/tags';
import { TAG_TYPES } from '/imports/api/tags/constants';
import { Conversations } from '/imports/api/conversations/conversations';
import { Brands } from '/imports/api/brands/brands';
import { Customers } from '../customers';
import Segments from '../segments';
import QueryBuilder from '../queryBuilder';

/**
 * Publishes customers
 * @param {Object} queryString URL query parameters used for filtering customers
 */
Meteor.publishComposite('customers.list', function(queryString) {
  return {
    find() {
      check(queryString, {
        brand: Match.Optional(String),
        integration: Match.Optional(String),
        tag: Match.Optional(String),
        limit: Match.Optional(Number),
        page: Match.Optional(String),
        segment: Match.Optional(String),
      });

      if (!this.userId) {
        return this.ready();
      }

      const selector = {};

      // Filter by segments
      if (queryString.segment) {
        const segment = Segments.findOne(queryString.segment);
        const query = QueryBuilder.segments(segment);
        Object.assign(selector, query);
      }

      // filter by brand
      if (queryString.brand) {
        const integrations = Integrations.find(
          { brandId: queryString.brand },
          { fields: { _id: 1 } },
        ).fetch();
        selector.integrationId = { $in: integrations.map(i => i._id) };
      }

      // filter by integration
      if (queryString.integration) {
        const integrations = Integrations.find(
          { kind: queryString.integration },
          { fields: { _id: 1 } },
        ).fetch();

        /**
         * Since both of brand and integration filters use a same integrationId field
         * we need to intersect two arrays of integration ids.
         */
        const ids = integrations.map(i => i._id);
        const intersectionedIds = selector.integrationId
          ? _.intersection(ids, selector.integrationId.$in)
          : ids;

        selector.integrationId = { $in: intersectionedIds };
      }

      // Filter by tag
      if (queryString.tag) {
        selector.tagIds = queryString.tag;
      }

      const countCustomers = (name, query) => {
        // counts must be related to each other
        const findQuery = Object.assign({}, selector, query);

        Counts.publish(
          this,
          `customers.${name}`,
          Customers.find(findQuery, { fields: { _id: 1 } }),
          {
            noReady: true,
            nonReactive: true,
          },
        );
      };

      // Count current filtered customers
      countCustomers('list.count', selector);

      // Count customers by segments
      Segments.find().fetch().forEach(segment => {
        countCustomers(`segment.${segment._id}`, QueryBuilder.segments(segment));
      });

      // Count customers by brand
      Brands.find({}, { fields: { _id: 1 } }).fetch().forEach(brand => {
        const integrations = Integrations.find(
          { brandId: brand._id },
          { fields: { _id: 1 } },
        ).fetch();
        countCustomers(`brand.${brand._id}`, {
          integrationId: { $in: integrations.map(i => i._id) },
        });
      });

      // Count customers by integration
      KIND_CHOICES.ALL_LIST.forEach(integration => {
        const integrations = Integrations.find(
          { kind: integration },
          { fields: { _id: 1 } },
        ).fetch();
        countCustomers(`integration.${integration}`, {
          integrationId: { $in: integrations.map(i => i._id) },
        });
      });

      // Count customers by filter
      Tags.find({ type: TAG_TYPES.CUSTOMER }, { fields: { _id: 1 } }).fetch().forEach(tag => {
        countCustomers(`tag.${tag._id}`, { tagIds: tag._id });
      });

      const options = {
        // TODO: Select customer fields based on current user's config
        fields: Customers.publicFields,

        sort: { 'messengerData.lastSeenAt': -1 },
        limit: queryString.limit || 0,
      };

      return Customers.find(selector, options);
    },
    children: [
      {
        find(customer) {
          return Integrations.find(customer.integrationId, {
            fields: Integrations.publicFields,
          });
        },
      },
    ],
  };
});

/**
 * Publishes customer details data
 * @param {String} id Customer id
 */
Meteor.publishComposite('customers.details', function(id) {
  return {
    find() {
      check(id, String);

      if (!this.userId) {
        return this.ready();
      }

      return Customers.find(id, { fields: Customers.publicFields });
    },
    children: [
      // Publish related integrations
      {
        find(customer) {
          return Integrations.find(customer.integrationId);
        },
      },
      // Publish related assigned users
      {
        find(customer) {
          return Conversations.find({ customerId: customer._id });
        },
        children: [
          {
            find(conversation) {
              return Meteor.users.find(conversation.assignedUserId, {
                fields: { details: 1, emails: 1 },
              });
            },
          },
        ],
      },
    ],
  };
});

/**
 * Publishes customers list for the preview
 * when creating/editing a customer segment
 * @param {Object} segment   Segment that's being created/edited
 * @param {Number} [limit=0] Customers limit (for pagination)
 */
Meteor.publishComposite('customers.listForSegmentPreview', function(segment, limit = 0) {
  return {
    find() {
      check(segment, Object);
      check(limit, Number);

      if (!this.userId) {
        return this.ready();
      }

      const query = QueryBuilder.segments(segment);
      const options = {
        fields: Customers.publicFields,
        sort: { 'messengerData.lastSeenAt': -1 },
        limit,
      };

      Meteor.defer(() => {
        Counts.publish(
          this,
          'customers.list.count',
          Customers.find(query, { fields: { _id: 1 } }),
          { noReady: true },
        );
      });

      return Customers.find(query, options);
    },
    children: [
      {
        find(customer) {
          return Integrations.find(customer.integrationId, {
            fields: Integrations.publicFields,
          });
        },
      },
    ],
  };
});

/**
 * Publishes all customer segments
 */
Meteor.publishComposite('customers.segments', {
  find() {
    if (!this.userId) {
      return this.ready();
    }

    return Segments.find({});
  },
});

/**
 * Publishes single segment
 * @param {String} id Segment id
 */
Meteor.publishComposite('customers.segmentById', function(id) {
  return {
    find() {
      check(id, String);

      if (!this.userId) {
        return this.ready();
      }

      return Segments.find(id);
    },
  };
});
