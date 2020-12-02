import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'
import { BrowserRouter } from 'react-router-dom';


const firebaseConfig = {
  apiKey: "AIzaSyBJ_QFQBulqdHQGNQeqE9mLyDCmVMKSVxY",
    authDomain: "crm-react-school.firebaseapp.com",
    databaseURL: "https://crm-react-school.firebaseio.com",
    projectId: "crm-react-school",
    storageBucket: "crm-react-school.appspot.com",
    messagingSenderId: "462386004085",
    appId: "1:462386004085:web:8c168c3fb949b7d407383c",
    measurementId: "G-F3EM47B9NX"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
