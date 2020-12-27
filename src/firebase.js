import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCFQmNdnKlSn23w3Tpazm4rbPozgnXVYqA",
    authDomain: "discord-clone-5dffe.firebaseapp.com",
    projectId: "discord-clone-5dffe",
    storageBucket: "discord-clone-5dffe.appspot.com",
    messagingSenderId: "986114926013",
    appId: "1:986114926013:web:9857d5650ba93ccf7c1ed4",
    measurementId: "G-4ZXXNXMLWR"
  };


  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;