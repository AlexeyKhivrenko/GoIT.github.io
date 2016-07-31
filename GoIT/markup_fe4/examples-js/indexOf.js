
  // indexOf(arr, value, fromIndex)
  function newIndexOf(arr, value, fromIndex) {

    var numberOfArr = fromIndex;

    if (fromIndex === undefined) {
      fromIndex = 0;
    }

    var newArr = [];
    var resultOfIndexOf;

    for (var i = numberOfArr; i<arr.length; i++) {
            newArr[i-numberOfArr] = arr[i];

            for (var k=0; k<newArr.length; k++) {

              if (value === newArr[k]) {
                resultOfIndexOf = i;
                return resultOfIndexOf;
              } else {
                resultOfIndexOf = -1;
              }
            }

    }

    return resultOfIndexOf;

  }

  abc = [1, 2, 0, null, 3, 4, 5, 6, 'fake'];
  newIndexOf(abc, 'fake', 2);
