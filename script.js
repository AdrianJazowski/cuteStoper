const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pasue");
const stoptBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".start");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".timeList");

const infoBtn = document.querySelector(".info");
const modalshadow = document.querySelector(".modal-shadow");
const closeModalShadow = document.querySelector(".close");

let countTime;
let minutes = 0;
let seconds = 0;
const handleStart = () => {
  countTime = setInterval(() => {
    if (seconds < 9) {
      seconds++;
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      stopwatch.textContent = `${minutes}:00`;
    }
  }, 200);
};

startBtn.addEventListener("click", handleStart);
