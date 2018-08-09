function Human(name, age, sex, height, weight) {
			this.name = name;
			this.age =  age;
			this.sex = sex;
			this.height = height;
			this.weight = weight;
		}

    function Worker(name, age, sex, height, weight, proffesion, salary) {
      Human.apply(this, arguments);
      if (sex.toLowerCase() == 'male') {
        this.gender = 'he';
      } else if (sex.toLowerCase() == 'female') {
        this.gender = 'she';
      } else {
        this.gender = 'it';
      }
      this.proffesion = proffesion;
      this.salary = salary;
    }

    Worker.prototype.work = function() {
      console.log('This is ' + this.name + '. ' + this.gender + ' is a(an) ' + this.proffesion + ' and earns ' + this.salary + ' per month.');
    };

    function Student(name, age, sex, height, weight, placeOfStudy, scholarship) {
      Human.apply(this, arguments);
      if (sex.toLowerCase() == 'male') {
        this.gender = 'he';
      } else if (sex.toLowerCase() == 'female') {
        this.gender = 'she';
      } else {
        this.gender = 'it';
      }
      this.placeOfStudy = placeOfStudy;
      this.scholarship = scholarship;
    }

    Student.prototype.watchSerials = function() {
      if (this.scholarship < 500) {
        console.log('This student has ' + this.scholarship + ' per month. ' + this.gender + ' doesn\'t have free time for serials, but '+ this.gender + ' like it!');
      } else {
        console.log('This student likes serials and ' + this.gender + ' watching a lot of them!');
      }
    };

var human1 = new Worker('Jack', 33, 'MALE', 178, 75, 'architect', '4000$');
var human2 = new Worker('Hanna', 25, 'Female', 170, 55, 'nurse', '1500$');
var human3 = new Student('Bill', 18, 'Male', 196, 90, 'KNEU', '1000');
var human4 = new Student('Emy', 20, 'Male', 167, 44, 'KPI', '0');

console.log(human1);
console.log(human2);
console.log(human3);
console.log(human4);

human1.work();
human2.work();
human3.watchSerials();
human4.watchSerials();

console.log('human1 age: ', human1.age);
console.log('human2 name: ', human2.name);
console.log('human3 height: ', human3.height);
console.log('human4 weight: ', human4.weight);
