import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDLEEgDDy1sdLasO9rVx4L3qODvx4WM7wM",
  authDomain: "message-demo-a7ac6.firebaseapp.com",
  databaseURL: "https://message-demo-a7ac6.firebaseio.com",
  projectId: "message-demo-a7ac6",
  storageBucket: "message-demo-a7ac6.appspot.com",
  messagingSenderId: "761592138928"
};

export const firebaseApp = firebase.initializeApp(config);
export const auth = firebase.auth();




