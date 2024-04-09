const assert = require("assert");

/*
KATA: 6 KYU - Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
  ```
    16  -->  1 + 6 = 7
    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
    132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
    493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
  ```
*/

function digitalRoot(n) {
  let currentVal = Array.from(String(n), (num) => Number(num));

  while (currentVal.length > 1) {
    let sum = currentVal.reduce((partialSum, a) => partialSum + a, 0);
    currentVal = Array.from(String(sum), (num) => Number(num));
  }

  return currentVal[0];
}

function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

function test() {
  const input1 = 16;
  const outputExpected1 = 7;
  const outputActual1 = digitalRoot(input1);
  assert.strictEqual(outputActual1, outputExpected1);

  const outputActualv2_1 = digital_root(input1);
  assert.strictEqual(outputActualv2_1, outputExpected1);

  const input2 = 456;
  const outputExpected2 = 6;
  const outputActual2 = digitalRoot(input2);
  assert.strictEqual(outputActual2, outputExpected2);

  const outputActualv2_2 = digital_root(input2);
  assert.strictEqual(outputActualv2_2, outputExpected2);

  console.log("All tests passed successfully.");
}

test();
