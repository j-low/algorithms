function bubbleSort(arr) {
    var swapped;

    do {
        swapped = false;

        for (var i = 0; i < a.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }

    } while (swapped);

    return arr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// test cases
var test = [4,3,7,0,-1,91,11, 9999, -9999];

bubbleSort(test);
