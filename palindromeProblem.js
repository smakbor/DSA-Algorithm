const str = "level";

const palindrome = (st) => {
    let start = 0;
    let end = st.length - 1;
    let result = true;
    while (end > start) {
        if (st[start] != st[end]) {
            result = false;
        }
        start++;
        end--;
    }
    return result;
};
// const res = palindrome(str);
// console.log(res);

/// maximum occurence in string

const maxString = "hello worldlwlwlwlewl";

let finalObj = {};

for (let i = 0; i < maxString.length; i++) {
    if (finalObj[maxString[i]]) {
        finalObj[maxString[i]] += 1;
    } else {
        finalObj[maxString[i]] = 1;
    }
}

// console.log(finalObj);
