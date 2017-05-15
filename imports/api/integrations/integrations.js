import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { Random } from 'meteor/random';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { Brands } from '/imports/api/brands/brands';
import { Channels } from '/imports/api/channels/channels';
import { facebookSchema, twitterSchema } from './social/social';
import { KIND_CHOICES, FORM_LOAD_TYPES } from './constants';

class IntegrationCollections extends Mongo.Collection {}

export const Integrations = new IntegrationCollections('integrations');

Integrations.deny({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  },
});

Integrations.formSchema = new SimpleSchema({
  name: {
    type: String,
  },
  brandId: {
    type: String,
  },
  formId: {
    type: String,
  },
  formLoadType: {
    type: String,
  },
});

const onlineHoursSchema = new SimpleSchema({
  _id: {
    type: String,
  },
  day: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
});

// messenger ==============
export const messengerSchema = new SimpleSchema({
  // manual, auto
  availabilityMethod: {
    type: String,
    optional: true,
    allowedValues: ['manual', 'auto'],
  },

  isOnline: {
    type: Boolean,
    optional: true,
  },
  onlineHours: {
    type: [onlineHoursSchema],
    optional: true,
  },
  timezone: {
    type: String,
    optional: true,
  },
  welcomeMessage: {
    type: String,
    optional: true,
  },
  awayMessage: {
    type: String,
    optional: true,
  },
  thankYouMessage: {
    type: String,
    optional: true,
  },
});

Integrations.schema = new SimpleSchema({
  // messenger messaging, twitter ...
  kind: {
    type: String,
    allowedValues: KIND_CHOICES.ALL_LIST,
  },

  name: {
    type: String,
  },
  brandId: {
    type: String,
  },
  formId: {
    type: String,
    optional: true,
  },
  formLoadType: {
    type: String,
    allowedValues: FORM_LOAD_TYPES.ALL_LIST,
    optional: true,
  },

  // messenger availability, and text options
  messengerData: {
    type: messengerSchema,
    optional: true,
  },

  // twitter authentication info
  twitterData: {
    type: twitterSchema,
    optional: true,
  },

  // facebook authentication info
  facebookData: {
    type: facebookSchema,
    optional: true,
  },

  // ui options
  uiOptions: {
    type: Object,
    blackbox: true,
    optional: true,
  },
});

Integrations.attachSchema(Integrations.schema);

Integrations.helpers({
  brand() {
    return Brands.findOne(this.brandId) || {};
  },
  channels() {
    return Channels.find({ integrationIds: { $in: [this._id] } }).fetch();
  },
});

Integrations.publicFields = {
  name: 1,
  kind: 1,
  brandId: 1,
  formId: 1,
  formLoadType: 1,
  uiOptions: 1,
  messengerData: 1,
};

Factory.define('integration', Integrations, {
  name: () => faker.random.word(),
  kind: KIND_CHOICES.MESSENGER,
  brandId: () => Random.id(),
});
