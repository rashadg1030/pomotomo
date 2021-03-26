/**
 * Self-adjusting interval to account for drifting
 *
 * @param {function} workFunc  Callback containing the work to be done
 *                             for each interval
 * @param {int}      interval  Interval speed (in milliseconds) - This
 * @param {function} errorFunc (Optional) Callback to run if the drift
 *                             exceeds interval
 */
function AdjustingInterval(workFunc, interval, errorFunc) {
  var that = this;
  var expected, timeout;
  this.interval = interval;

  this.start = function () {
    expected = Date.now() + this.interval;
    timeout = setTimeout(step, this.interval);
  }

  this.stop = function () {
    clearTimeout(timeout);
  }

  function step() {
    var drift = Date.now() - expected;
    if (drift > that.interval) {
      // You could have some default stuff here too...
      if (errorFunc) errorFunc();
    }
    postMessage('tick');
    workFunc();
    expected += that.interval;
    timeout = setTimeout(step, Math.max(0, that.interval - drift));
  }
}

var counter = 0;

const doWork = function () {
  console.log(++counter);
};

// Define what to do if something goes wrong
const doError = function () {
  console.warn('The drift exceeded the interval.');
};

var ticker = new AdjustingInterval(doWork, 1000, doError);

onmessage = (e) => {
  console.log('Message received from main script');
  var message = e.data;

  if (message === 'start') {
    result = 'started';
    // continue timer from where it is now
    ticker.start();
  } else if (message === 'stop') {
    ticker.stop();
  } else /*the case it's restart*/ {

  }
}
