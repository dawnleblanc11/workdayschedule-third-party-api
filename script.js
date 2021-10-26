
var today = moment();
// to match sample need Day of the week full spelling , month full spelling date with st, nd...
var leaddate = moment(today).format("dddd, MMMM Do");
//don't forget # in jquery
$("#currentDay").append(leaddate);
