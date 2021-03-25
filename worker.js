onmessage = (e) => {
  console.log('Message received from main script');
  var result = null;
  if (e.data === 'start') {
    result = 'started';
    // continue timer from where it is now
  } else if (e.data === 'stop') {
    result = 'stopped';
  } else /*the case it's restart*/ {
    result = 'restarted';
  }

  console.log('Posting message back to main script');
  postMessage(result);
}