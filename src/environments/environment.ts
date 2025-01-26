// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA0qzZTNFrVR-DwZ7OlCKt_uQ0jqprJezU",
    authDomain: "risk-management-ai.firebaseapp.com",
    projectId: "risk-management-ai",
    storageBucket: "risk-management-ai.firebasestorage.app",
    messagingSenderId: "712418220726",
    appId: "1:712418220726:web:8af630ba404f10a8f6a417"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
