  var field = document.getElementById('field');
  var start = document.getElementById('start');
  var pause = document.getElementById('pause');
  var split = document.getElementById('split');
  var reset = document.getElementById('reset');
  var fieldForStoppedTime = document.getElementById('fieldForStoppedTime');

  start.addEventListener('click', start_click);
  pause.addEventListener('click', pause_click);
  reset.addEventListener('click', reset_click);
  reset.addEventListener('dblclick', reset_dblclick);
  split.addEventListener('click', split_click);

  var go = 0;
  var count;
  var timer;
  var time;
  var startTime;
  var pauseTime = 0;


  function timeFormatter() {

      time = new Date().getTime();
      count = time - startTime + pauseTime;
      var msec = count%1000;
      var sec = Math.floor(count/1000)%60;
      var min = Math.floor(count/60000)%60;
      var hours = Math.floor(count/(60000*60))%24;
      var days = Math.floor(count/(60000*60*24))%365;
      if (msec < 10) {
        msec = '00' + msec;
      } else if (msec < 100) {
        msec = '0' + msec;
      }

      if (sec < 10) {
        sec = '0' + sec;
      }
      if (min < 10) {
        min = '0' + min;
      }
      if (hours < 10) {
        hours = '0' + hours;
      }
      if (days < 10) {
        days = '0' + days;
      }

      field.innerHTML = days + ':' + hours + ':' + min + ':' + sec + '.' + msec;
      return count;

  }

  function start_click() {

    start.style.display = 'none';
    pause.style.display = 'inline-block';

    if (go == 0) {

      startTime = new Date().getTime();
      timer = setInterval(timeFormatter, 1);
      go = 1;

    } else if (go == 2) {

      startTime = new Date().getTime();
      timer = setInterval(timeFormatter, 1);
      go = 1;

    }

  }

  function pause_click() {

    start.style.display = 'inline-block';
    pause.style.display = 'none';

    pauseTime = count;
    clearInterval(timer);
    go = 2;

  }

  function split_click() {

    fieldForStoppedTime.innerHTML = fieldForStoppedTime.innerHTML + field.innerHTML + '</br>';

  }

  function reset_click() {

    clearInterval(timer);
    start.style.display = 'inline-block';
    pause.style.display = 'none';
    count = 0;
    pauseTime = 0;
    go = 0;
    field.innerHTML = '00:00:00:00.000';

  }


  function reset_dblclick(){
      fieldForStoppedTime.innerHTML = '';
  }
