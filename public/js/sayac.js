let timerInterval;
let running = false;
let seconds = 0;

function startStop() {
  if (running) {
    clearInterval(timerInterval);
    document.getElementById('startStop').textContent = 'Başlat';
  } else {
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById('startStop').textContent = 'Durdur';
  }
  running = !running;
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById('timer').textContent = '00:00:00';
  document.getElementById('startStop').textContent = 'Başlat';
  running = false;
  seconds = 0;
}

function updateTimer() {
  seconds++;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  document.getElementById('timer').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(secs)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}


function goBack() {
    history.back();
  }
