function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("input number");
var n = prompt("input power of number");

if (n == 0) { //when the power of number is zero
  var zeroPower = pow(x, n) / pow(x, n);
  alert( zeroPower );
  console.log( zeroPower );
} else if (n < 0) { //when the power of number less then 0
  var negativePower = 1 / pow(x, -n); //Can reseived right answer
  alert( negativePower );
  console.log( negativePower );
} else if (n != parseInt(n) ) { //when then power of number isn't integer
  alert('input integer power');
  console.log('input integer power');
} else { //when didn't use another conditions
  alert( pow(x, n) );
  console.log( pow(x, n) );
}
