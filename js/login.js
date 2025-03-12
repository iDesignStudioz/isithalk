// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdoJTl5fJVD_D-YTWcKbVB2EtELc3LeVY",
  authDomain: "isitha-sanjanar.firebaseapp.com",
  projectId: "isitha-sanjanar",
  storageBucket: "isitha-sanjanar.firebasestorage.app",
  messagingSenderId: "429116750718",
  appId: "1:429116750718:web:5b9b9bc88bc0c78078112f",
  measurementId: "G-81DHR0K5FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



//input
const email = document.getElementByID('email').value;
const password = document.getElementByID('password').value;
//submit button
const submit = document.getElementByID('submit').value;
submit.addEventListner("click, function (event)")
{
    ev.preventDefault()
    alert(5)    
}


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
