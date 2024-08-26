import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDyCqM4HGo3Rh3RuKGdL90f3gQZaW2snAY",
    authDomain: "foodsuggester-c3517.firebaseapp.com",
    projectId: "foodsuggester-c3517",
    storageBucket: "foodsuggester-c3517.appspot.com",
    messagingSenderId: "157039828427",
    appId: "1:157039828427:web:783e5e4e2d6b1768b66a4e",
    measurementId: "G-GMRXTGGTKL"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//cach the dom
const email=document.getElementById('email');
const password=document.getElementById('password');
const signInBtn=document.getElementById('signInBtn');
const signOutBtn=document.getElementById('signOutBtn');
const login=document.getElementById('login');
const authPart=document.getElementById('authPart');

//hiding the top secret part initially 
authPart.style.display='none';

//signin
const signIn= async ()=>{
    const signInEmail=email.value;
    const signInPassword=password.value;
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
        window.location.href = 'app.html';
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert(errorMessage);
    });
}
//check auth state
const checkAuthState=()=>{
   onAuthStateChanged(auth,(user)=>{
       if(user){
           login.style.display='none';
           authPart.style.display='flex';
           console.log('user is signed in');
	   window.location.href = 'app.html';
       }else{
        login.style.display='block';
        authPart.style.display='none';
       }
   })
 }
checkAuthState();
//signout
const userSignOut=()=>{
    signOut(auth).then(() => {
      }).catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        alert(errorMessage);
      });
}


signInBtn.addEventListener('click', signIn);
signOutBtn.addEventListener('click', userSignOut);
