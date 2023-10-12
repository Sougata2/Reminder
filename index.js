// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
  getMessaging,
  getToken,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb2BtnhvNspy4Iv0aeHwg4ORfgcNFi8Iw",
  authDomain: "remindme-88e49.firebaseapp.com",
  projectId: "remindme-88e49",
  storageBucket: "remindme-88e49.appspot.com",
  messagingSenderId: "187621315389",
  appId: "1:187621315389:web:a4448acd04be58c8dc2b54",
  measurementId: "G-SM0N60WG60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Access denied!");
    }
  });
}
getToken(messaging, {
  vapidKey:
    "BGmqcGBetSDpjC_ZWwaU2LQGOBiQAYxvwV8wNc-4TbGf9qgg2Xs4Epbb2nXflSLVdaRUJ8ga-iP1J9nX1RHH73I",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });
