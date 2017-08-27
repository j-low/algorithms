function insertionSort(arr) {
    var len = arr.length;

    for(var i = 0; i < len; i++) {
      var current = arr[i];

      /* the iterator clause of this inner loop is the crucial part to understanding how insertionSort does its magic */
      for(var j = i - 1; j >= 0 && (arr[j] > current); j--) {
        arr[j+1] = arr[j];
      }

      arr[j+1] = current; // (j + 1) here instead of j because the for loop decrements AFTER current iteration
    }

    return arr;
}

// test cases
var test = [4,3,7,0,-1,91,11, 9999, -9999];

insertionSort(test);
