const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const timer = document.querySelector("p");

let totalTime = 10;
let interval;

const updateTimer = () => {
  let min = Math.floor(totalTime / 60);
  let sec = Math.floor(totalTime % 60);
  timer.innerText = `${min.toString().padStart(2, "0")} : ${sec
    .toString()
    .padStart(2, "0")}`;
};

start.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    totalTime--;
    min = totalTime / 60;
    sec = totalTime % 60;
    updateTimer();
    console.log(interval);

    if (totalTime === 0) {
      clearInterval(interval);
      alert("Time complete");
      totalTime = 10;
      updateTimer();
    }
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  totalTime = 1500;
  min = totalTime / 60;
  sec = totalTime % 60;
  updateTimer();
});
