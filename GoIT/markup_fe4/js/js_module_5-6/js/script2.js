var start = document.createElement('button');
start.innerHTML = 'start';
document.body.appendChild(start);

var pause = document.createElement('button');
pause.innerHTML = 'pause';
document.body.appendChild(pause);

var stop = document.createElement('button');
stop.innerHTML = 'stop';
document.body.appendChild(stop);

var box = document.createElement('div');
document.body.appendChild(box);

var field = document.createElement('textarea');
field.disabled = 'disabled';
box.appendChild(field);

start.addEventListener('click', start_click);
pause.addEventListener('click', pause_click);
stop.addEventListener('click', stop_click);


var go = 0;
var time = new Date().getTime();

function start_click() {

  if (go == 0) {

    function timer() {

       this.startTime = new Date().getTime();
       this.count = startTime - time;
       var msec = count%1000;
       var sec = Math.floor(count/1000)%60;
       var min = Math.floor(count/60000)%60;
       var hours = Math.floor(count/(60000*60))%24;
       var days = Math.floor(count/(60000*60*24))%365;
       field.innerHTML = days + ' : ' + hours + ' : ' + min + ' : ' + sec + ' : ' + msec;
       this.result = field.innerHTML; //ошибка при нажатии на стоп сразу

  };
    go = 1;
  }

}

function pause_click() {

  clearInterval(timer);
  setTimeot(timer);
  go = 0;

}

function stop_click() {

  clearInterval(timer);
  field.innerHTML = result;

  go = 0;

}
