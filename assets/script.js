//firebase key
var firebaseConfig = {
    apiKey: "AIzaSyDw3OVAFkFeAZdJHWoeQPkO0qlIp2aBI9c",
    authDomain: "example-timesheet.firebaseapp.com",
    databaseURL: "https://example-timesheet.firebaseio.com",
    projectId: "example-timesheet",
    storageBucket: "",
    messagingSenderId: "454663895635",
    appId: "1:454663895635:web:87919e67fd5b45006c64a6",
    measurementId: "G-M138LH4D54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//create a variable to reference the database
var database = firebase.database();




//on click function for the submit button
$(".btn-submit").on("click", function (event) {
    event.preventDefault();

    var name = $("#employeeName").val().trim();
    var role = $("#role").val().trim();
    var startDate = $("#startDate").val().trim();
    var rate = $("#monthlyRate").val().trim();

    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(rate);

    database.ref().push({
        name : name,
        role : role,
        startDate : startDate,
        rate : rate
    })
    //don't refresh the page
    return false;

});

//firebase watcher and initial loader. HINT: this code behaves similarly to .on("value")
database.ref().on("child_added", function(childSnapshot){
    //log everything coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().rate);

    $("tbody").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().startDate + "</td><td>months worked function</td><td>" + childSnapshot.val().rate + "</td><td>total billed function</td></tr>");
}, function(errorObject){
    console.log("Errors handled: " + errorObject.code);
});
