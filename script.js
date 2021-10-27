
var now = moment();
// to match sample need Day of the week full spelling , month full spelling date with st, nd...
var leaddate = moment(now).format("dddd, MMMM Do");
// don't forget # in jquery
$("#currentDay").append(leaddate);
// create a current hour field to create the colors required
var currenthour = 14;
//var currenthour = moment(now).format("HH");

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
    timeslotclass: ".background1PMrow",
    timeslotvalue: 13
  },
  {
    timeslotclass: ".background2PMrow",
    timeslotvalue: 14
  },
  {
    timeslotclass: ".background3PMrow",
    timeslotvalue: 15
  },
  {
    timeslotclass: ".background4PMrow",
    timeslotvalue: 16
  },
  {
    timeslotclass: ".background5PMrow",
    timeslotvalue: 17
  },
  {
    timeslotclass: ".background6PMrow",
    timeslotvalue: 18
  },
];
// loop through all times to remove class names "present", "past", "future"
//function activitybackgroundcolor() {
 // timeslots.forEach(backgroundrowItem => {
 //   timeslots.remove('past','present','future')
 // })
//}
//timeslots.class.forEach ($("timeslotclass") => {
//  remove('past','present','future') });
// loop through all times to reset appropriate "present", "past", "future"
// if current hour== class name hour .addclass "present"
// if current hour< class name hour .addclass "past"
// if curren hour > class name hour .addclass "future"
// set up as a function to refresh how often?
for (let i=0; i < timeslots.length; i++) {
  //clean out other old classes
  $(timeslots[i].timeslotclass).removeClass("past present future");
// put in appropriate class based on hour
if (timeslots[i].timeslotvalue < currenthour) 
{ console.log("past");
$(timeslots[i].timeslotclass).addClass("past")}
 else if (timeslots[i].timeslotvalue > currenthour) 
 { console.log("future");
 $(timeslots[i].timeslotclass).addClass("future")}
  else
  {console.log("present");
  $(timeslots[i].timeslotclass).addClass("present")};
};

//add a new task
$(".savebtn").on("click", function() {
  var text = $(this).text().trim();
  console.log(text);
});







