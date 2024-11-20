const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initialize the clock and set an interval to update it every second
function startClock() {
  getClock();
  setInterval(getClock, 1000);
}

export { startClock };