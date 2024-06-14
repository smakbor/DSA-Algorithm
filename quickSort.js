// const quickSort = (arr) => {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// };

// const array = [3, 6, 9, 2, 4, 1, 7, 12, 5];

// const result = quickSort(array);
// console.log(result);

const array = [3, 6, 9, 2, 4, 1, 7, 12, 5];
const quickSort2 = (arr, l, h) => {
    if (l < h) {
        let pivot = partision(arr, l, h);
        quickSort2(arr, l, pivot - 1);
        quickSort2(arr, pivot + 1, h);
    }
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const partision = (arr, l, h) => {
    let pivot = arr[l];
    let i = l;
    let j = h;
    while (i < j) {
        while (arr[i] <= pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i < j) {
            swap(arr, i, j);
        }
    }

    swap(arr, l, j);

    return j;
};

quickSort2(array, 0, array.length - 1);

console.log(array);
