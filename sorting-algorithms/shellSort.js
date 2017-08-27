function shellSort(arr) {
    // different gap sequences can be implemented based upon size of data array
    // var gaps = [701, 301, 132, 57, 32, 10, 4, 1];  // <-- used for a bit larger data set
    var gaps = [4, 1];  // more suitable for current, smaller test case

    for (var g = 0; g < gaps.length; ++g) {
        var gap = gaps[g];

        for (var i = gap; i < arr.length; ++i) {
            var current = arr[i];

            for (var j = i; j >= gap && arr[j - gap] > current; j -= gap) {
                arr[j] = arr[j - gap];
            }

            arr[j] = current;
        }
    }
    return arr;
}

// test cases
var test = [4,3,7,0,-1,91,11, 9999, -9999];

shellSort(test);
