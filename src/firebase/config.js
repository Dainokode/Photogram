import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBSCiby1wN9rT4c-jR52OwCbeSxARM5zjs",
  authDomain: "photogram-19dce.firebaseapp.com",
  databaseURL: "https://photogram-19dce.firebaseio.com",
  projectId: "photogram-19dce",
  storageBucket: "photogram-19dce.appspot.com",
  messagingSenderId: "813282086496",
  appId: "1:813282086496:web:b64c96b90c82c8174abd05",
  measurementId: "G-5SDBFFP41N"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
