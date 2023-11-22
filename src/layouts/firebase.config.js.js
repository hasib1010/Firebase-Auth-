 
import { initializeApp } from "firebase/app";  

const firebaseConfig = {
    apiKey: "AIzaSyBrHQmkF7LImi98plviJb77mK6JhMe70NY",
    authDomain: "user-password-mail-auth.firebaseapp.com",
    projectId: "user-password-mail-auth",
    storageBucket: "user-password-mail-auth.appspot.com",
    messagingSenderId: "795769549509",
    appId: "1:795769549509:web:ec1b2f82a0af5c1db5b6ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;