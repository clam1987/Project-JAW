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


$("#searchButton").on("click", function (event) {
  event.preventDefault();
  var ingredients = $("#searchBar").val().trim();
       $(".results").empty();  
var appid = "19be36c3";
var appkey = "6dae3e55f3c1da568e7fa055321c944f";
var queryURL = "https://api.edamam.com/search?q=" + ingredients + "&app_id=" + appid + "&app_key=" + appkey;


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){

    // for each hit
    response.hits.forEach(function(result){
      var label = result.recipe.label;
      console.log(result.recipe.url);
      var urlLabel = result.recipe.url;
      var emptyDiv = $("<div>");
      var hyperlink = $("<a>").attr("href", urlLabel).text(label).attr("target", "_blank");

      emptyDiv.html(hyperlink);
      $(".results").append(emptyDiv); 

    })
    
});

});

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
