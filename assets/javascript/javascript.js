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
var ingridients = $("#searchBar").val().trim();
var appid = "19be36c3";
var appkey = "6dae3e55f3c1da568e7fa055321c944f";
var queryURL = "https://api.edamam.com/search?q=" + ingridients + "&app_id=" + appid + "&app_key=" + appkey;
console.log(ingridients)



//function
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){
  console.log(response);
})




//processy



