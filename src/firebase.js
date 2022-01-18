// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZH-b4c-1v1kpffTb3seDu2E4Imfa-2SY",
  authDomain: "nost-6d650.firebaseapp.com",
  projectId: "nost-6d650",
  storageBucket: "nost-6d650.appspot.com",
  messagingSenderId: "274610504155",
  appId: "1:274610504155:web:14781fe14e2d491876a7fe",
  measurementId: "G-5XQQFWFGFC",
  databaseURL: "https://nost-6d650-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig)

export default firebase;