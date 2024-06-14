// insertion sort algorithm
const arr = [20, 3, 6, 15, 8, 1, 9, 10, 4];

let temp;
let j;

for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = temp;
}

// console.log(arr);

// insertion sort with another way

const swap = (arr, minIdx, i) => {
    let temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
};

const array = [12, 5, 23, 1, 7, 46, 2, 15, 9];
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            let minIdx = i;
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
                swap(arr, minIdx, i);
            }
        }
    }
};

// insertionSort(array);
// console.log(array);
