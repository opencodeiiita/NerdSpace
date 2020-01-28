const firebaseConfig = {
    apiKey: "AIzaSyDiPG6Cb0DerXaRhIqkfL4fGecBM4mwlPE",
    authDomain: "semstock-65815.firebaseapp.com",
    databaseURL: "https://semstock-65815.firebaseio.com",
    projectId: "semstock-65815",
    storageBucket: "semstock-65815.appspot.com",
    messagingSenderId: "91897392250",
    appId: "1:91897392250:web:2ab33b202fef80360ddfc3",
    measurementId: "G-GFWJ2S8KE8"
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();

  googleSignIn=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}