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


$("#submitIngredients").on("click", function (event) {
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

