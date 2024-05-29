
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getStorage, ref, uploadBytes,getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";
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
function goPdf(e, mode) {
  let [DataDef, name,PhNo] = printPdf(e,mode);
 ///* 
 const storageRef = ref(storage, "ClientPdfs/"+ name); // Replace with your desired storage path
pdfMake.createPdf(DataDef)
    .getBlob((blob) => {
      if (blob) {
        // You now have the Blob containing the PDF data
     //   console.log("PDF Blob:", blob);
        uploadBytes(storageRef, blob)
    .then((snapshot) => {
        console.log('Uploaded PDF blob to Firebase Storage!');
            getDownloadURL(snapshot.ref).then(async(downloadURL) => {
      console.log('File available at', downloadURL);
    
      var raw  = downloadURL;
      var myHeaders = new Headers();
      myHeaders.append("apikey", "WpHKxWOTnwecVD8kCqTNND1pSxEpJVPC");
      
      var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: raw
      };
      
      fetch("https://api.apilayer.com/short_url/hash", requestOptions)
        .then(response => response.text())
        .then(result => {
          const link = document.createElement('a');
          link.target = "_blank";
          let short = result.split('"')[7];
          console.log(short)
          link.href = "https://wa.me/91"+PhNo+"?text="+ ((((short).split(':').join('%3A')).split('/',).join('%2F')).split('?').join('%3F')).split('&').join('%26');
          link.click();
        })
        .catch(error => console.log('error', error));
            });
    });
     };
});//*/
}
 // Initialize the blob and name variables
getPDFBtn.addEventListener("click",(e) => goPdf(e,0));
getExBtn.addEventListener("click",(e) =>  goPdf(e,1));
getBothBtn.addEventListener("click",(e) =>  goPdf(e,2));

