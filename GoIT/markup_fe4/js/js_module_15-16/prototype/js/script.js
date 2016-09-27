function Human() {
  this.name = 12;
  this.age = 30;
  this.sex = 'male';
  this.height = 180;
  this.weight = 100;
}

function Worker() {
  this.placeOfWork = {
    'placeOfWork1': 'somewhere1',
    'placeOfWork2': 'somewhere2'
  };
  this.salary = '200$';
  this.work = function() {
    alert('work!');
  };
}

function Student() {
  this.placeOfStudy = {
    'placeOfStudy1': 'somewhere1',
    'placeOfStudy2': 'somewhere2'
  };
  this.scholarship = 500;
  this.watchSerials = function() {
    alert("I like to watch serials");
  };
}

Worker.prototype = new Human();
Student.prototype = new Human();

var man1 = new Worker();
var man2 = new Worker();
var man3 = new Student();
var man4 = new Student();

console.log(man1);
