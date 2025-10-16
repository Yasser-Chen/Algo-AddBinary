/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = "",
        maxLen;
    // add leading zeros to strings
    if (a.length < b.length) {
        for (let i = a.length; i < b.length; i++) {
            a = `0${a}`;
        }
        maxLen = b.length;
    } else {
        for (let i = b.length; i < a.length; i++) {
            b = `0${b}`;
        }
        maxLen = a.length;
    }

    // calculation
    let leftover = 0,
        sum = 0,
        now = 0;
    for (let index = maxLen - 1; index >= 0; index--) {
        sum = +a[index] + +b[index] + +leftover;
        if (sum == 3) {
            leftover = 1;
            now = 1;
        } else if (sum == 2) {
            leftover = 1;
            now = 0;
        } else if (sum == 1) {
            leftover = 0;
            now = 1;
        } else {
            leftover = 0;
            now = 0;
        }
        result = `${now}${result}`;
    }
    if (leftover == 1) {
        return `1${result}`;
    }
    return result;
};


console.log(addBinary("11", "1")); // 100
console.log(addBinary("1010", "1011")); // 10101
console.log(addBinary("100", "110010")); // 110110