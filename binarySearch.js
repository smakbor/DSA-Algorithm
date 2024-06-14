const binaryArr = [2, 3, 6, 8, 10, 13, 15, 17, 20, 27, 30];
let find = 2;
const binarySearch = (arr, target) => {
    // let start = 0;
    // let end = arr.length;

    for (let i = 0; i < arr.length; i++) {
        let mid = Math.floor((i + arr.length) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            i = mid + 1;
        } else if (target < arr[mid]) {
            arr.length = mid - 1;
        }
    }
};

const result = binarySearch(binaryArr, find);

// console.log(result);

// recurrsively
let start = 0;
let end = binaryArr.length;
const recursion = (arr, target, start, end) => {
    if (start > end) {
        return false;
    }
    let mid = Math.floor((start + end) / 2);
    if (target === arr[mid]) {
        return mid;
    } else if (target < arr[mid]) {
        return recursion(arr, target, start, mid - 1);
    } else {
        return recursion(arr, target, mid + 1, end);
    }
};

const res = recursion(binaryArr, find, start, end);
// console.log(res);
