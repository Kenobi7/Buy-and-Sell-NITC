import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyC6b0GO_Bb7kCvpd0NrYX-QrEUhyX0XQW8",
  authDomain: "products-18c20.firebaseapp.com",
  databaseURL: "https://products-18c20-default-rtdb.firebaseio.com",
  projectId: "products-18c20",
  storageBucket: "products-18c20.appspot.com",
  messagingSenderId: "607951346982",
  appId: "1:607951346982:web:03e7e94d2ec5dde81bf5e7",
  measurementId: "G-0QFW91R16N"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export



