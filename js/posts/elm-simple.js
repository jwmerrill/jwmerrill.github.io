function makeStopWatch (elt) {
  var isRunning = false;
  var lastTime = Date.now();
  var totalTime = 0;

  function run () {
    isRunning = true;
    lastTime = Date.now();
    loop();
  }

  function pause () {
    isRunning = false;
  }

  function incrementTime () {
    var now = Date.now();
    totalTime += now - lastTime;
    elt.textContent = totalTime;
    lastTime = now;
  }

  function loop() {
    if (!isRunning) return;
    incrementTime();
    setTimeout(loop, 1000/60);
  }

  elt.textContent = 0;
  elt.addEventListener('mousedown', run);
  elt.addEventListener('mouseup', pause);
}

makeStopWatch(document.getElementById('stopwatch'));