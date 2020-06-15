(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),i=(n(0),n(189)),o={id:"ios-sdk",title:"iOS SDK",sidebar_label:"iOS SDK"},s={id:"developer/ios-sdk",title:"iOS SDK",description:"Learn how to install the iOS SDK.",source:"@site/docs/developer/ios-sdk.md",permalink:"/developer/ios-sdk",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/developer/ios-sdk.md",lastUpdatedBy:"BatAmar Battulga",lastUpdatedAt:1590221355,sidebar_label:"iOS SDK",sidebar:"docs",previous:{title:"Android SDK",permalink:"/developer/android-sdk"},next:{title:"Troubleshooting",permalink:"/developer/troubleshooting"}},l=[{value:"Requirement",id:"requirement",children:[]},{value:"Installation with Swift",id:"installation-with-swift",children:[{value:"For Open Source Version:",id:"for-open-source-version",children:[]},{value:"For SaaS Version:",id:"for-saas-version",children:[]},{value:"To start Erxes SDK in your app:",id:"to-start-erxes-sdk-in-your-app",children:[]}]},{value:"Installation with Objective-C",id:"installation-with-objective-c",children:[{value:"For Open Source Version:",id:"for-open-source-version-1",children:[]},{value:"For SaaS Version:",id:"for-saas-version-1",children:[]},{value:"To start erxes SDK in your app:",id:"to-start-erxes-sdk-in-your-app-1",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Learn how to install the iOS SDK."),Object(i.b)("h2",{id:"requirement"},"Requirement"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Minimum deployment target : iOS 9.0"),Object(i.b)("li",{parentName:"ul"},"Swift 4 compatible"),Object(i.b)("li",{parentName:"ul"},"Objective-C compatible")),Object(i.b)("p",null,"brandCode - uniquely generated code for your brand which you can find in your messenger installation code"),Object(i.b)("h2",{id:"installation-with-swift"},"Installation with Swift"),Object(i.b)("p",null,"Following configuration should be made in your AppDelegate.swift."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"import ErxesSDK\n")),Object(i.b)("h3",{id:"for-open-source-version"},"For Open Source Version:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {\n    Erxes.setBrandCode(code: \u201cbrandCode\u201d)\n    Erxes.setHosts(apiHost: "https://erxes-widgets-api/graphql",\n                  subsHost: "wss://erxes-api/subscriptions",\n                 uploadUrl: "https://erxes-api/upload-file")\n return true\n}\n')),Object(i.b)("h3",{id:"for-saas-version"},"For SaaS Version:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {\n    Erxes.setBrandCode(code: \u201cbrandCode\u201d)\n    Erxes.setHosts(apiHost: "https://YourCompanyName.app.erxes.io/widgets-api/graphql",\n                  subsHost: "wss://YourCompanyName.app.erxes.io/api/subscriptions",\n                 uploadUrl: "https://YourCompanyName.app.erxes.io/api/upload-file")\n return true\n}\n')),Object(i.b)("h4",{id:"next"},"NEXT"),Object(i.b)("h3",{id:"to-start-erxes-sdk-in-your-app"},"To start Erxes SDK in your app:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"import ErxesSDK\n")),Object(i.b)("h5",{id:"this-function-will-start-erxes-sdk-with-authentication-options"},"This function will start Erxes SDK with authentication options:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"@ibaction func buttonAction(sender:Uibutton){\n    Erxes.start()\n}\n")),Object(i.b)("h5",{id:"if-your-application-has-already-registered-users-following-function-will-authenticate-them-automaticallyin-app-messaging"},"If your application has already registered users following function will authenticate them automatically(in-app messaging):"),Object(i.b)("h5",{id:"by-email-address"},"By email address:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'Erxes.startWithUserEmail(email: "email of user")\n')),Object(i.b)("h5",{id:"by-phone-number"},"By phone number:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'Erxes.startWithUserPhone(phone: "phone number of user")\n')),Object(i.b)("h5",{id:"if-you-intend-to-fetch-some-specific-datas-from-users-you-can-use-following-function"},"If you intend to fetch some specific datas from users you can use following function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'var messengerData = [String:Any]()\nmessengerData["user data key"] = "user data value"\nErxes.start(email: "", phone: "", data: messengerData)\n')),Object(i.b)("h5",{id:"to-end-current-user-session"},"To end current user session:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"})," Erxes.endSession(completionHandler: {\n            // do your stuff\n})\n")),Object(i.b)("h5",{id:"or-simply"},"Or simply"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"Erxes.endSession()\n")),Object(i.b)("h2",{id:"installation-with-objective-c"},"Installation with Objective-C"),Object(i.b)("p",null,"Following configuration should be made in your AppDelegate.m basic properties."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-smalltalk"}),"#import <ErxesSDK/ErxesSDK-Swift.h>\n")),Object(i.b)("h3",{id:"for-open-source-version-1"},"For Open Source Version:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-smalltalk"}),'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [Erxes setBrandCodeWithCode:@"brandCode"];\n    [Erxes setHostsWithApiHost:@"https://erxes-widgets-api/graphql/graphql"\n                      subsHost:@"wss://erxes-api/subscriptions"\n                     uploadUrl:@"https://erxes-api/upload-file"];\n    return YES;\n}\n')),Object(i.b)("h3",{id:"for-saas-version-1"},"For SaaS Version:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-smalltalk"}),'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [Erxes setBrandCodeWithCode:@"brandCode"];\n    [Erxes setHostsWithApiHost:@"https://YourCompanyName.app.erxes.io/widgets-api/graphql"\n                      subsHost:@"wss://YourCompanyName.app.erxes.io/api/subscriptions"\n                     uploadUrl:@"https://YourCompanyName.app.erxes.io/api/upload-file"];\n    return YES;\n}\n')),Object(i.b)("h4",{id:"next-1"},"NEXT"),Object(i.b)("h3",{id:"to-start-erxes-sdk-in-your-app-1"},"To start erxes SDK in your app:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-smalltalk"}),"#import <ErxesSDK/ErxesSDK-Swift.h>\n")),Object(i.b)("h5",{id:"this-function-will-start-erxes-sdk-with-authentication-options-1"},"This function will start erxes SDK with authentication options:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-smalltalk"}),"- (IBAction)buttonAction:(id)sender {\n    [Erxes start];\n}\n")),Object(i.b)("h5",{id:"if-your-application-has-already-registered-users-following-function-will-authenticate-them-automaticallyin-app-messaging-1"},"If your application has already registered users following function will authenticate them automatically(in-app messaging):"),Object(i.b)("h5",{id:"by-email-address-1"},"By email address:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-smalltalk"}),'[Erxes startWithUserEmailWithEmail:@"email of user"];\n')),Object(i.b)("h5",{id:"by-phone-number-1"},"By phone number:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-smalltalk"}),'[Erxes startWithUserPhoneWithPhone:@"phone of user"];\n')),Object(i.b)("h5",{id:"if-you-intend-to-fetch-some-specific-datas-from-users-include-following-function"},"If you intend to fetch some specific datas from users include following function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-smalltalk"}),'NSMutableDictionary *messengerData = [[NSMutableDictionary alloc] init];\n[messengerData setObject:@"what ever you want" forKey:@"user data"];\n[Erxes startWithEmail:@"" phone:@"" data:messengerData];\n')),Object(i.b)("h5",{id:"to-end-current-user-session-1"},"To end current user session:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-smalltalk"}),"[Erxes endSessionWithCompletionHandler:^{\n        // do your stuff\n}];\n")))}p.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);