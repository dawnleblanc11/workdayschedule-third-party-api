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
//not sure why each function not working
//$.each(userupdatesarrayparsed, function(usertimeslotKey,usertaskInput) {
//$('textarea.background'+ userupdatesarrayparsed.usertimeslotKey +'PMrow').val(userupdatesarrayparsed.usertaskInput);
//});

$(function()
{
for (let i=0; i < userupdatesarrayparsed.length; i++) {
  $('textarea.background'+ userupdatesarrayparsed[i].usertimeslotKey +'PMrow').val(userupdatesarrayparsed[i].usertaskInput);
};
});

// assign the current class to the hour in the class name
var timeslots = [
  {
    timeslotclass: ".background8AMrow",
    timeslotvalue: 8
  },
  {
    timeslotclass: ".background9AMrow",
    timeslotvalue: 9
  },
  {
    timeslotclass: ".background10AMrow",
    timeslotvalue: 10
  },
  {
    timeslotclass: ".background11AMrow",
    timeslotvalue: 11
  },
  {
    timeslotclass: ".background12PMrow",
    timeslotvalue: 12
  },
  {
    timeslotclass: ".background13PMrow",
    timeslotvalue: 13
  },
  {
    timeslotclass: ".background14PMrow",
    timeslotvalue: 14
  },
  {
    timeslotclass: ".background15PMrow",
    timeslotvalue: 15
  },
  {
    timeslotclass: ".background16PMrow",
    timeslotvalue: 16
  },
  {
    timeslotclass: ".background17PMrow",
    timeslotvalue: 17
  },
  {
    timeslotclass: ".background18PMrow",
    timeslotvalue: 18
  },
];

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
$(function()
{
  var userrevisedtasksarray=[];
$(".saveBtn").on("click", function ()
 {
  var savedtaskInput = $(this).siblings("textarea").val().trim();
  var timeslotkey = $(this).siblings()[1].className.slice(17, 19);
  var userrevisedtasks = { 
    usertimeslotKey: timeslotkey,
    usertaskInput: savedtaskInput,
  };
  userrevisedtasksarray.push(userrevisedtasks);
  console.log(userrevisedtasksarray);
  window.localStorage.setItem('newtask',JSON.stringify(userrevisedtasksarray));
});
});

//not sure why changes from the time before not saved
// Note: to clean out localStorage.clear();
