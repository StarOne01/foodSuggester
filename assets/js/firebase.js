import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const storage = getStorage(app);
 // Initialize the blob and name variables
getPDFBtn.addEventListener("click", (e) => {
  let blob, name = printPdf(e,0);
  const storageRef = ref(storage, "people/"+ name); // Replace with your desired storage path
console.log(blob)
uploadBytes(storageRef, blob)
    .then((snapshot) => {
        console.log('Uploaded PDF blob to Firebase Storage!');
        console.log('Download URL:', snapshot.metadata.downloadURL);
    })
    .catch((error) => {
        console.error('Error uploading PDF blob:', error);
    });
});

getExBtn.addEventListener("click", (e) => {
  let blob, name = printPdf(e,1);
  const storageRef = ref(storage, name); // Replace with your desired storage path

uploadBytes(storageRef, blob)
    .then((snapshot) => {
        console.log('Uploaded PDF blob to Firebase Storage!');
        console.log('Download URL:', snapshot.metadata.downloadURL);
    })
    .catch((error) => {
        console.error('Error uploading PDF blob:', error);
    });
});

getBothBtn.addEventListener("click", (e) => {
  let blob, name = printPdf(e,2);
  const storageRef = ref(storage, "people/"+ name); // Replace with your desired storage path
  console.log(name)
uploadBytes(storageRef, blob)
    .then((snapshot) => {
        console.log('Uploaded PDF blob to Firebase Storage!' + name);
        console.log('Download URL:', snapshot.metadata.downloadURL);
    })
    .catch((error) => {
        console.error('Error uploading PDF blob:', error);
    });
});

