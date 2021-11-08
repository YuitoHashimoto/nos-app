import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZH-b4c-1v1kpffTb3seDu2E4Imfa-2SY",
  authDomain: "nost-6d650.firebaseapp.com",
  projectId: "nost-6d650",
  storageBucket: "nost-6d650.appspot.com",
  messagingSenderId: "274610504155",
  appId: "1:274610504155:web:14781fe14e2d491876a7fe",
  measurementId: "G-5XQQFWFGFC"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
