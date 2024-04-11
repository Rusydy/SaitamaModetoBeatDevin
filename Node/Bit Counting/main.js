const assert = require("assert");

/*
KATA: 6 KYU - Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

const countBits = function (n) {
  let binary = n.toString(2);

  let count = 0;
  binary.split("").forEach((bit) => {
    if (bit === "1") {
      count++;
    }
  });

  return count;
};

const countBitsV2 = (n) => n.toString(2).split("0").join("").length;

function test() {
  const input1 = 0;
  const outputExpected1 = 0;
  const outputActual1 = countBits(input1);
  assert.strictEqual(outputActual1, outputExpected1);

  const outputActualV2_1 = countBitsV2(input1);
  assert.strictEqual(outputActualV2_1, outputExpected1);

  const input2 = 4;
  const outputExpected2 = 1;
  const outputActual2 = countBits(input2);
  assert.strictEqual(outputActual2, outputExpected2);

  const outputActualV2_2 = countBitsV2(input2);
  assert.strictEqual(outputActualV2_2, outputExpected2);

  const input3 = 1234;
  const outputExpected3 = 4;
  const outputActual3 = countBits(input3);
  assert.strictEqual(outputActual3, outputExpected3);

  const outputActualV2_3 = countBitsV2(input3);
  assert.strictEqual(outputActualV2_3, outputExpected3);

  console.log("All tests passed successfully.");
}

test();
