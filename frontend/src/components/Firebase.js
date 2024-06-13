import firebase from 'firebase/app';
import 'firebase/messaging';


// Setup file for firebase cloud messaging


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
firebase.initializeApp(firebaseConfig);

export const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {


    return messaging.getToken({ vapidKey: 'BBGSBfTemNhcTCOggK7AWjyeSvVdAd4Mf3ix7XQF3fk6772bgq2FmKMrBQ9SNUhv0WslsJ1qXNHzvGPQ62P9nRnXc' }).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(currentToken);

        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound();
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    })
}



export const onMessageListener = () => {
    console.log('x');
}
//   new Promise((resolve) => {

