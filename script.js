var now = moment();
// to match sample need Day of the week full spelling , month full spelling date with st, nd...
var leaddate = moment(now).format("dddd, MMMM Do");
// don't forget # in jquery
$("#currentDay").append(leaddate);
// create a current hour field to create the colors required
//var currenthour = 14; use for testing change of time
var currenthour = moment(now).format("HH");

// uses local storage to populate shedule when reentering
// var timeslotkeyls = localStorage.getItem(key);
// var timeslotkeypi = parseInt(timeslotkeyls);

function updateschedule() {
  console.log(userrevisedtasksarray);
  var userupdatesarrayparsed = JSON.parse(
    window.localStorage.getItem("newtask")
  );
  console.log(userupdatesarrayparsed);
  for (i = 0; i < userupdatesarrayparsed.length; i++) {
    $(
      "textarea.background" + userupdatesarrayparsed[i].usertimeslotKey + "row"
    ).val(userupdatesarrayparsed[i].usertaskInput);
  }
}

// assign the current class to the hour in the class name
var timeslots = [
  {
    timeslotclass: ".background08row",
    timeslotvalue: 8,
  },
  {
    timeslotclass: ".background09row",
    timeslotvalue: 9,
  },
  {
    timeslotclass: ".background10row",
    timeslotvalue: 10,
  },
  {
    timeslotclass: ".background11row",
    timeslotvalue: 11,
  },
  {
    timeslotclass: ".background12row",
    timeslotvalue: 12,
  },
  {
    timeslotclass: ".background13row",
    timeslotvalue: 13,
  },
  {
    timeslotclass: ".background14row",
    timeslotvalue: 14,
  },
  {
    timeslotclass: ".background15row",
    timeslotvalue: 15,
  },
  {
    timeslotclass: ".background16row",
    timeslotvalue: 16,
  },
  {
    timeslotclass: ".background17row",
    timeslotvalue: 17,
  },
  {
    timeslotclass: ".background18row",
    timeslotvalue: 18,
  },
];

function taskbackgroundcolor() {
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
      $(timeslots[i].timeslotclass).addClass("past");
    } else if (timeslots[i].timeslotvalue > currenthour) {
      $(timeslots[i].timeslotclass).addClass("future");
    } else {
      $(timeslots[i].timeslotclass).addClass("present");
    }
  }
}

//creates a key and value to send to storage
var userrevisedtasksarray = [];

function saveTasks() {
  var savedtaskInput = $(this).siblings("textarea").val().trim();
  var timeslotkey = $(this).siblings()[1].className.slice(17, 19);
  var userrevisedtasks = {
    usertimeslotKey: timeslotkey,
    usertaskInput: savedtaskInput,
  };
  userrevisedtasksarray.push(userrevisedtasks);
  window.localStorage.setItem("newtask", JSON.stringify(userrevisedtasksarray));
  updateschedule();
}

taskbackgroundcolor();
//recognize save button click
$(".saveBtn").click(saveTasks);
updateschedule();

