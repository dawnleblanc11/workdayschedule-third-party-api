
var now = moment();
// to match sample need Day of the week full spelling , month full spelling date with st, nd...
var leaddate = moment(now).format("dddd, MMMM Do");
// don't forget # in jquery
$("#currentDay").append(leaddate);
// create a current hour field to create the colors required
var currenthour = moment(now).format("HH");
//compare the current hour to the hour in the class name

// loop through all times to remove class names "present", "past", "future"
// if current hour== class name hour .addclass "present"
// if current hour< class name hour .addclass "past"
// if curren hour > class name hour .addclass "future"
for (let hours= 08; hours <= 18; hours++) {
    $(".hours").addClass("future");
}

var hourclass = [
        {classname:
        value: 08 }]

accordionItems.forEach(accordionItem => {
  accordionItem.remove('open')
})






