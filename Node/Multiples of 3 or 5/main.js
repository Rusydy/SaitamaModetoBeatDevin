const assert = require("assert");

/*
KATA: Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/


function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

function solutionV2(number) {
  return number < 1
    ? 0
    : [...new Array(number).keys()]
      .filter((n) => n % 3 == 0 || n % 5 == 0)
      .reduce((a, b) => a + b);
}

function test() {
  const input1 = 10;
  const outputExpected1 = 23;
  const outputActual1 = solution(input1);
  assert.strictEqual(outputActual1, outputExpected1);

  const outputActualV2 = solutionV2(input1);
  assert.strictEqual(outputActualV2, outputExpected1);

  console.log("All tests passed successfully.");
}

test();

/*
How solutionV2 works:

1. Return 0 for negative numbers:
  ```
  return number < 1 ? 0 : ...
  ```

2. Create an array of numbers from 0 to number - 1:
  ```
  [...new Array(number).keys()]
  ```
  This creates an array of numbers from 0 to number - 1. For example, if number is 10, it creates [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].
  the `...` operator is used to spread the array into individual elements.
  the `new Array(number)` creates an array of length `number`.
  the `.keys()` method is used to get the keys of the array.

3. Filter the array to keep only the numbers that are multiples of 3 or 5:
  ```
  .filter((n) => n % 3 == 0 || n % 5 == 0)
  ```
  This keeps only the numbers that are multiples of 3 or 5. The `n % 3 == 0` checks if `n` is a multiple of 3, and `n % 5 == 0` checks if `n` is a multiple of 5.

4. Sum all the numbers in the array:
  ```
  .reduce((a, b) => a + b)
  ```
  This sums all the numbers in the array. The `a` is the accumulator, and `b` is the current value. The `a + b` adds the current value to the accumulator.

*/