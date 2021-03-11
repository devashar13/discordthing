import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIbQkrXQX8-cZFlzjd-zBO-RbfUzxUtsU",
    authDomain: "clone-8bb75.firebaseapp.com",
    databaseURL: "https://clone-8bb75.firebaseio.com",
    projectId: "clone-8bb75",
    storageBucket: "clone-8bb75.appspot.com",
    messagingSenderId: "487771479719",
    appId: "1:487771479719:web:24015837fec5488eaf8582",
    measurementId: "G-261494VHF4"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider} ;
export default db;