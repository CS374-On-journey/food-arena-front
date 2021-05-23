import * as firebase from 'firebase'
let database;
let config = {
  apiKey: "AIzaSyCqmhY1Hd_2JSKNeFyV7EIN5YGKde9eZMA",
  authDomain: "food-arena-front.firebaseapp.com",
  databaseURL: "https://food-arena-front-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-arena-front",
  storageBucket: "food-arena-front.appspot.com",
  messagingSenderId: "887719948990",
  appId: "1:887719948990:web:4571e01bb684a2240a64ef",
  measurementId: "G-YR02WKFQQY"
}

export const fire = () => {
  firebase.initializeApp(config);
 	database = firebase.database()
}