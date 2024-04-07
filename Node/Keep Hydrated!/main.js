const assert = require("assert");

/*
KATA: 
8 KYU - Keep Hydrated!

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

function litres(time) {
  return Math.floor(time * 0.5);
}

function test() {
  const input1 = 3;
  const outputExpected1 = 1;
  const outputActual1 = litres(input1);
  assert.strictEqual(outputExpected1, outputActual1);

  const input2 = 1.4;
  const outputExpected2 = 0;
  const outputActual2 = litres(input2);
  assert.strictEqual(outputActual2, outputExpected2);

  console.log("All tests passed successfully.");
}

test();

