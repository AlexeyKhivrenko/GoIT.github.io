function newSlice(arr, begin, end) {

  if (end == undefined) {
    end = arr.length;
  }

  var newArr = [];
  for(var i=0; i<end-begin; i++) {
    newArr[i] = arr[begin+i];
  }
  return newArr;
}

var abc = ["Яблоко", "Орех", "Игорь", "Помидор", 2, NaN];

newSlice(abc, 1, 4);
