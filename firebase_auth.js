const firebaseConfig = {
  // Your web app's Firebase configuration here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
