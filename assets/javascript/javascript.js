//Setup database

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCvExqwK1-Oq_3316MRntkTb3UVzx4UqwI",
  authDomain: "fooduserdatabase.firebaseapp.com",
  databaseURL: "https://fooduserdatabase.firebaseio.com",
  projectId: "fooduserdatabase",
  storageBucket: "fooduserdatabase.appspot.com",
  messagingSenderId: "225180646639"
};
firebase.initializeApp(config);



//initialize functions



//variables





var fbauth = {

  createUser: function (username, password) {
    console.log(username)
    console.log(password)
    firebase.auth().createUserWithEmailAndPassword(username, password).catch(function (error)  {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
    });
  },
  
  signIn: function(username, password) {
  firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
},
  // ...


  logoutuser: function (username, password) {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    })
  }
}

$("#submitBtn").on("click", function(e){
  e.preventDefault();
  console.log(e);
  var uUsername = $('#emailInput').val().trim();
  console.log(typeof uUsername);
  var uPass = $('#passwordInput').val();
  console.log(typeof uPass);

  fbauth.createUser(uUsername, uPass);
  fbauth.signIn(uUsername, uPass);
});

$("#login").on("click", function(e){
  e.preventDefault();
  var username = $('#exampleInputEmail1').val().trim();
  var password = $('#exampleInputPassword1').val();
  fbauth.signIn(username, password);
  console.log('You signed in');
})
