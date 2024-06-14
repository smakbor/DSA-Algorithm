const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = [];
    let right = [];
    for (let i = 0; i < mid; i++) {
        left.push(arr[i]);
    }
    for (let i = mid; i < arr.length; i++) {
        right.push(arr[i]);
    }
    return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
    let result = [],
        leftIndex = 0,
        rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
};
let merged = mergeSort(selectArr);
console.log(merged);
