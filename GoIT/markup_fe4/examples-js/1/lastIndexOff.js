  function newIndexOf(arr, value, fromIndex) {

    if (fromIndex === undefined) {
      fromIndex = (arr.length-1);
    }

      var numberOfArr = fromIndex;
      var newArr = [];
      var resultOfIndexOf;

      for (var i = numberOfArr; i>=0; i--) {
              newArr[i] = arr[i];

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

    abc = ["ла", "321", 1, 5, "жор", "1223"];
    newIndexOf(abc, "321", 4);
