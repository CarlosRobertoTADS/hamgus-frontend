// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  // firebase :{
  //   apiKey: "AIzaSyBHIj4UqfDGpigKldNiLqu8ubWuiB2OWWY",
  //   authDomain: "hamgus-firebase.firebaseapp.com",
  //   projectId: "hamgus-firebase",
  //   storageBucket: "hamgus-firebase.appspot.com",
  //   messagingSenderId: "413849082390",
  //   appId: "1:413849082390:web:51f18e537b133344a7b337",
  //   measurementId: "G-JTGBWK667T"
  // }
  firebase: {
    projectId: 'admin-hamgus',
    appId: '1:731208809676:web:1264322d69fe3255c71669',
    storageBucket: 'admin-hamgus.appspot.com',
    apiKey: 'AIzaSyBGz2haTx33OCGN9lQOKJezvpXrSaLcf1E',
    authDomain: 'hamgus-firebase.firebaseapp.com',
    messagingSenderId: '731208809676',
    measurementId: 'G-NGT3FZB9R6',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
