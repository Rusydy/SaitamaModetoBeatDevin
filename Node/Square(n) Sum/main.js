const assert = require("assert");

/*
KATA: 
8 KYU - Square(n) Sum

Description:

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1^2 + 2^2 + 2^2 = 9
*/

function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + num * num, 0);
}

// Test cases
function test() {
    // Test case 1
    const input1 = [1, 2, 2];
    const resultExpected1 = 9;
    const resultActual1 = squareSum(input1);
    assert.strictEqual(resultActual1, resultExpected1);

    // Test case 2
    const input2 = [1, 2];
    const resultExpected2 = 5;
    const resultActual2 = squareSum(input2);
    assert.strictEqual(resultActual2, resultExpected2);

    // Test case 3
    const input3 = [0, 3, 4, 5];
    const resultExpected3 = 50;
    const resultActual3 = squareSum(input3);
    assert.strictEqual(resultActual3, resultExpected3);

    console.log("All tests passed successfully.");
}

test();
