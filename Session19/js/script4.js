let timer = document.querySelector("#stopwatch");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
// Count Down timer
let hr = 0;
let min = 0;
let sec = 0;
let timerStart = false;
// 00:01:00
// 0:0:10
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);

function startTimer() {
  if (timerStart == false) {
    timerStart = true;
    doTimer();
  }
}

function doTimer() {
  if (timerStart == true) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec += 1;

    if (sec == 60) {
      min += 1;
      sec = 0;
    }

    if (min == 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }

    if (min < 10 || min == 0) {
      min = "0" + min;
    }

    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    // if(min == 60) {
    //     stopTimer()
    // }
    // '00:00:00'
    timer.innerHTML = `${hr}:${min}:${sec}`; // '00:00:00'

    setTimeout(function () {
      doTimer();
    }, 1000);
  }
}

function stopTimer() {
  timerStart = false;
  timer.innerHTML = "00:00:00";
  hr = 0;
  sec = 0;
  min = 0;
}
