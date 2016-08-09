function calculateProfit(arr) {
  var addInArr = 0;
    for (var i=0; i<arr.length; i++) {
    addInArr = arr[i] + addInArr;
  }
  return addInArr;
}

calculateProfit([2000, 4500, 7500]);
