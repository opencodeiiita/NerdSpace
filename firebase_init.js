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