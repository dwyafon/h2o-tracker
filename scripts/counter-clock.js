// from https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript

// see also: https://www.w3schools.com/howto/howto_js_countdown.asp

var startTime = Math.floor(Date.now() / 1000); //Get the starting time (right now) in seconds
localStorage.setItem("startTime", startTime); // Store it if I want to restart the timer on the next page

function startTimeCounter() {
  var now = Math.floor(Date.now() / 1000); // get the time now
  var diff = now - startTime; // diff in seconds between now and start
  var m = Math.floor(diff / 60); // get minutes value (quotient of diff)
  var s = Math.floor(diff % 60); // get seconds value (remainder of diff)
  m = checkTime(m); // add a leading zero if it's single digit
  s = checkTime(s); // add a leading zero if it's single digit
  document.getElementById("idName").innerHTML = m + ":" + s; // update the element where the timer will appear
  var t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

startTimeCounter();

/* This way, it really doesn't matter if the 'setTimeout' is subject to execution delays, 
the elapsed time is always relative the system time when it first began, and the system 
time at the time of update. */
