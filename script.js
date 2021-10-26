var leaddateEl= document.getElementById("currentDay");

var today = moment();
// to match sample need Day of the week full spelling , month full spelling date with st, nd...
var leaddate = moment(today).format("dddd, MMMM Do");
leaddateEl.innerHTML = leaddate;