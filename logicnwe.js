// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

    var config = {
    apiKey: "AIzaSyCsLWAHAQMgqV3EEslSW1YPfKogItyeCSg",
    authDomain: "classproject-8119e.firebaseapp.com",
    databaseURL: "https://classproject-8119e.firebaseio.com",
    projectId: "classproject-8119e",
    storageBucket: "classproject-8119e.appspot.com",
    messagingSenderId: "658003442617"
    };
    firebase.initializeApp(config);


// Assign the reference to the database to a variable named 'database'
//var database = ...

var database = firebase.database();
var userRef = database.ref("/user");


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
  userRef.on("value", function(snapshot) {
    console.log(snapshot.val());

    

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    var data2 = snapshot.val();

    highBidder = data2.highBidder;
    highPrice = data.highPrice;

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...


    // Change the HTML to reflect the stored values

      $("#highest-bidder").text(data2.highBidder);
      $("#highest-price").text(data2.highPrice);

    // Print the data to the console.
      console.log(data2.highBidder);
      console.log(data2.highPrice);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {
      $("#highest-bidder").text(highBidder);
      $("#highest-price").text($ + highPrice);

    // Change the HTML to reflect the initial values


    // Print the data to the console.


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values

    var bidderName = #("#bidder-name").val().trim();
    var bidderPrice = parseInt($("#bidder-price").val().trim();

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });

    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
