function selectionSort(arr) {

    for (var i = 0; i < arr.length - 1; i++) {
        // start at first index
        var current = arr[i];

        // set new smallest
        var smallestRemainingIndex = i + 1;

        for (var j = i + 2; j < arr.length; j++) {
            // find smallest remaining value

            if (arr[j] < arr[smallestRemainingIndex]) {
                smallestRemainingIndex = j;
            }
        }

        // ensure that smallest remaining is less than current, else current is smallest and can stay in place
        if (arr[smallestRemainingIndex] < current) {
            swap(arr, i, smallestRemainingIndex);
        }
    }

    return arr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// test cases
var test = [4,3,7,0,-1,91,11, 9999, -9999];

selectionSort(test);
