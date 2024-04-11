const assert = require("assert");

/*
KATA: 6 KYU - Sort the odd

Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

function sortArrayV2(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => (x % 2 ? odd.shift() : x));
}

function sortArray(array) {
    if (array.length == 0) return [];

    let oddNums = [];

    array.forEach((item) => {
        if (item % 2 != 0) {
            oddNums.push(item);
        }
    });

    oddNums.sort(function (a, b) {
        return a - b;
    });

    let result = [];

    array.forEach((item) => {
        if (item % 2 == 0) {
            result.push(item);
        } else {
            result.push(oddNums.shift());
        }
    });

    return result;
}

function test() {
    const input1 = [5, 3, 2, 8, 1, 4];
    const outputExpected1 = [1, 3, 2, 8, 5, 4];
    const outputActual1 = sortArray(input1);
    assert.strictEqual(
        JSON.stringify(outputExpected1),
        JSON.stringify(outputActual1),
    );

    const input2 = [5, 3, 1, 8, 0];
    const outputExpected2 = [1, 3, 5, 8, 0];
    const outputActual2 = sortArray(input2);
    assert.strictEqual(
        JSON.stringify(outputExpected2),
        JSON.stringify(outputActual2),
    );

    const input3 = [];
    const outputExpected3 = [];
    const outputActual3 = sortArray(input3);
    assert.strictEqual(
        JSON.stringify(outputExpected3),
        JSON.stringify(outputActual3),
    );

    console.log("All tests passed successfully.");
}

test();
