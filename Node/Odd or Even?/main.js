const assert = require("assert");
/*

KATA:
7 KYU - Odd or Even?

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/

function oddOrEven(array) {
  const res = array.reduce((sum, val) => (sum += val), 0);

  return res % 2 == 0 ? "even" : "odd";
}

function test() {
  const input1 = [0];
  const outputExpected1 = "even";
  const outputActual1 = oddOrEven(input1);
  assert.strictEqual(outputExpected1, outputActual1);

  const input2 = [0, 1, 4];
  const outputExpected2 = "odd";
  const outputActual2 = oddOrEven(input2);
  assert.strictEqual(outputExpected2, outputActual2);

  const input3 = [0, -1, -5];
  const outputExpected3 = "even";
  const outputActual3 = oddOrEven(input3);
  assert.strictEqual(outputExpected3, outputActual3);
  console.log("All tests passed successfully.");
}

test();