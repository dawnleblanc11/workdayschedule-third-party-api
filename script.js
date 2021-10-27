var now = moment();
// to match sample need Day of the week full spelling , month full spelling date with st, nd...
var leaddate = moment(now).format("dddd, MMMM Do");
// don't forget # in jquery
$("#currentDay").append(leaddate);
// create a current hour field to create the colors required
//var currenthour = 14; use for testing change of time
var currenthour = moment(now).format("HH");

// var timeslotkeyls = localStorage.getItem(key);
 // var timeslotkeypi = parseInt(timeslotkeyls);
var userupdatesarray = localStorage.getItem('newtask');
var userupdatesarrayparsed = JSON.parse(userupdatesarray);
console.log(userupdatesarrayparsed);
console.log(userupdatesarray);

//function placeuserudates () {
// if (timelotsvalue = parseInt(usertimeslotKey.value)) {


// }
//}



// assign the current class to the hour in the class name
var timeslots = [
  {
    timeslotclass: ".background8AMrow",
    timeslotvalue: 8,
    taskInput: "",
  },
  {
    timeslotclass: ".background9AMrow",
    timeslotvalue: 9,
    taskInput: "",
  },
  {
    timeslotclass: ".background10AMrow",
    timeslotvalue: 10,
    taskInput: "",
  },
  {
    timeslotclass: ".background11AMrow",
    timeslotvalue: 11,
    taskInput: "",
  },
  {
    timeslotclass: ".background12PMrow",
    timeslotvalue: 12,
    taskInput: "",
  },
  {
    timeslotclass: ".background13PMrow",
    timeslotvalue: 13,
    taskInput: "",
  },
  {
    timeslotclass: ".background14PMrow",
    timeslotvalue: 14,
    taskInput: "",
  },
  {
    timeslotclass: ".background15PMrow",
    timeslotvalue: 15,
    taskInput: "",
  },
  {
    timeslotclass: ".background16PMrow",
    timeslotvalue: 16,
    taskInput: "",
  },
  {
    timeslotclass: ".background17PMrow",
    timeslotvalue: 17,
    taskInput: "",
  },
  {
    timeslotclass: ".background18PMrow",
    timeslotvalue: 18,
    taskInput: "",
  },
];
//
  
// 

//function activitybackgroundcolor() {

// loop through all times to reset appropriate "present", "past", "future"
// if current hour= class name hour .addclass "present"
// if current hour< class name hour .addclass "past"
// if current hour > class name hour .addclass "future"
// set up as a function to refresh how often?
for (let i = 0; i < timeslots.length; i++) {
  //loop through all times to remove class names "present", "past", "future"
  $(timeslots[i].timeslotclass).removeClass("past present future");
  // put in appropriate class based on hour
  if (timeslots[i].timeslotvalue < currenthour) {
    console.log("past");
    $(timeslots[i].timeslotclass).addClass("past");
  } else if (timeslots[i].timeslotvalue > currenthour) {
    console.log("future");
    $(timeslots[i].timeslotclass).addClass("future");
  } else {
    console.log("present");
    $(timeslots[i].timeslotclass).addClass("present");
  }
};

//add a new task
//recognize save button click
//creates a key and value to send to storage

$(".saveBtn").on("click", function () {
  var savedtaskInput = $(this).siblings("textarea").val().trim();
  var timeslotkey = $(this).siblings()[1].className.slice(17, 19);
  var userrevisedtasks = { 
    usertimeslotKey: timeslotkey,
    usertaskInput: savedtaskInput,
  };

  window.localStorage.setItem('newtask',JSON.stringify(userrevisedtasks));
});
  
  //localStorage.setItem(timeslotkeyint,savedtaskInput);

 // var timeslotkeyls = localStorage.getItem(key);
 // var timeslotkeypi = parseInt(timeslotkeyls);
 // var savedtaskInputls = localStorage.getItem(value);
 // console.log(timeslotkeypi);
 // console.log(savedtaskInputls);

//push the local storage into the vartimeslots array
//check for match of key item and identifier in array
//push item into array
// to clean out localStorage.clear();
//if (timeslotkeyint === timeslots[4].timeslotvalue) {
//  (timeslots[4].taskInput = savedtaskInput);
//  console.log("criteriamet");
//  console.log(timeslots[4].taskInput);
// } else {
// console.log("criteria Failed")};

//push to innerHTML to appear upon refresh
