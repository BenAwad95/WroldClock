"use strict";

var hourNeedle = document.querySelectorAll('.hour ');
var minsNeedle = document.querySelectorAll(".mins");
var secsNeedle = document.querySelectorAll(".secs");
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function incSecs(el, inc, offset) {
  el.style.transform = "translate(-50%, -100%) rotate(".concat(inc, "deg)");

  if (inc >= 360) {
    inc = 0;
    setMins(el, offset);
  } else {
    inc += 6;
  }

  setTimeout(function () {
    incSecs(el, inc, offset);
  }, 1000); // console.log(inc)
}

function incMins(el, inc, offset) {
  el.style.transform = "translate(-50%, -100%) rotate(".concat(inc, "deg)");

  if (inc >= 360) {
    inc = 0;
    setHour(el, offset);
  } else {
    inc += 1;
  } // console.log(inc)


  setTimeout(function () {
    incMins(el, inc, offset);
  }, 10000);
}

function incHour(el, inc, offset) {
  el.style.transform = "translate(-50%, -100%) rotate(".concat(inc, "deg)");

  if (inc >= 360) {
    inc = 0; // console.log('55')

    setDate(el, offset);
  } else {
    inc += 1;
  }

  setTimeout(function () {
    incHour(el, inc), offset;
  }, 120000);
}

function setDate(el, offset) {
  var timeNow = moment().utcOffset(offset);
  var dayEl = el.parentElement.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild;
  var monthEl = dayEl.nextElementSibling;
  var dateEl = monthEl.nextElementSibling;
  dayEl.innerText = days[timeNow.day()];
  monthEl.innerText = months[timeNow.month()];
  dateEl.innerText = "".concat(timeNow.date(), "-").concat(timeNow.year());
}

function setHour(el, offset) {
  var timeNow = moment().utcOffset(offset);
  var Hour = timeNow.hours() >= 10 ? timeNow.hours() : "0".concat(timeNow.hours());
  el.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerText = Hour;
}

function setMins(el, offset) {
  var timeNow = moment().utcOffset(offset);
  var Mins = timeNow.minutes() >= 10 ? timeNow.minutes() : "0".concat(timeNow.minutes());
  el.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerText = Mins;
} // const time = new Date('2020-02-07 12:59:00:00')


function startClock() {
  // set the pos of hour, min and secs needle
  secsNeedle.forEach(function (element) {
    var offset = element.parentElement.getAttribute('offset');
    var time = moment().utcOffset(offset);
    var incS = time.seconds() * 6;
    incSecs(element, incS, offset);
    setMins(element, offset);
  }); // incSecs(incS)

  minsNeedle.forEach(function (element) {
    var offset = element.parentElement.getAttribute('offset');
    var time = moment().utcOffset(offset);
    var incM = time.minutes() * 6 + time.seconds() / 10;
    incMins(element, incM, offset);
    setHour(element, offset);
  }); // incMins(incM)

  hourNeedle.forEach(function (element) {
    var offset = element.parentElement.getAttribute('offset');
    var time = moment().utcOffset(offset);
    var incH = time.hours() * 30 + time.minutes() / 2;
    incHour(element, incH, offset);
    setDate(element, offset);
  }); // console.log(hourNeedle)
  // incHour(incH)
  // set the date and time elements
  // setHour()
  // setMins()
}

startClock();
var date_now = moment().utcOffset("+08:00"); // console.log(date_now.utc().format())
// console.log(date_now.seconds())