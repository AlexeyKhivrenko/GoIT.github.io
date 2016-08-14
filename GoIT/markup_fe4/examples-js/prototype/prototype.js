var Human = {
  type: "Human",
  head: 1,
  legs: 2
};

var Megahuman = Object.create(Human);

Megahuman.head = 2;
Megahuman.head; //2;
delete Megahuman.head;
Megahuman.head; //1


function toFixed() {
	return this.x;
}
var obj1 = { x:2 };
obj2 = Object.create(obj1);

var obj2 = {
	b : toFixed,
	__proto__ : obj1
}

obj2.b();
