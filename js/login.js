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
firebase.initializeApp(firebaseConfig);
//Initiqalize Variable
const auth = firebase.auth()
const database = database.auth()

//set up our register function
function register () {
    //Get all our input fields
    email = document.getElementByID('email').value;
    password = document.getElementByID('password').value;
}
 

//Validate Inputs
if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    //Don't Run code anymore
}

//Move on with Auth
auth.vreateUserWithEmailAndPassword(email, password)
.then(function() {

    //Declare user variable
var user = auth.currentuse
// Add this user to firebase Database
var database_ref = database.ref()

//Create User data
var user_data = {
    email : email,
    password : password,
    last_login : Date.now()

}

database_ref.child('user/' +user.uid ).set(user_data)

alert('User Created!!')





})

.catch(function(error){
    // Firebase will use this alert of this errors
    var error_code = error.error_code
    var error_message = error.messagingSenderId
    alert(error_message)
})

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true ) {
        //Email is good
        return true 
    } else {
          //Email is not goo
        return false
    
    }
}


function validate_password(password) {
    //Firebase only accepts lengths greater than 6
    if (password < 6 ) {
        //6 numbers need
        return false
    } else {
          //good to go
        return true
    
    }
}









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
