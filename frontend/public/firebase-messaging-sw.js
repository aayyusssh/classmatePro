importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCUXUYPll5-0HXbogk22JSS__CfwTB_720",
    authDomain: "classmate-pro-c86e6.firebaseapp.com",
    databaseURL: "https://classmate-pro-c86e6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "classmate-pro-c86e6",
    storageBucket: "classmate-pro-c86e6.appspot.com",
    messagingSenderId: "809389461197",
    appId: "1:809389461197:web:4ca71e768b5c28f3fda384",
    measurementId: "G-65K5LF03M1"
  };

if (!firebase.apps.length) {
    try {
        firebase.initializeApp(firebaseConfig);
    } catch (e) {
        console.log("sw error", e)
    }
}
// firebase.initializeApp({messagingSenderId: "907149617598"});
const initMessaging = firebase.messaging();


// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
});