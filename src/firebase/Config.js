import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCC1jY2knnFNUarYL8Egq1oAMxIOe6aa-s",
  authDomain: "foodiee-35282.firebaseapp.com",
  projectId: "foodiee-35282",
  storageBucket: "foodiee-35282.appspot.com",
  messagingSenderId: "847121189806",
  appId: "1:847121189806:web:e9debb231e1adb8df1963f",
  measurementId: "G-0RQ15HNPNC"
};


 export default firebase.initializeApp(firebaseConfig)