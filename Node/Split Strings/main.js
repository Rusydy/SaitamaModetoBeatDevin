const assert = require("assert");

/*
KATA: 6 KYU - Split Strings

Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str) {
  if (str.length == 0) return [];

  let pairs = [];

  for (let i = 0; i < str.length; i += 2) {
    if (str[i + 1] == undefined) {
      pairs.push(`${str[i]}_`);
      break;
    }

    pairs.push(`${str[i]}${str[i + 1]}`);
  }

  return pairs;
}

const solutionV2 = (str) => (str + "_").match(/../g) || [];

function test() {
  const input1 = "abcdef";
  const outputExpected1 = ["ab", "cd", "ef"];
  const outputActual1 = solution(input1);
  assert.strictEqual(
    JSON.stringify(outputActual1),
    JSON.stringify(outputExpected1),
  );

  const outputActualV2_1 = solutionV2(input1);
  assert.strictEqual(
    JSON.stringify(outputActualV2_1),
    JSON.stringify(outputExpected1),
  );

  const input2 = "abcdefg";
  const outputExpected2 = ["ab", "cd", "ef", "g_"];
  const outputActual2 = solution(input2);
  assert.strictEqual(
    JSON.stringify(outputActual2),
    JSON.stringify(outputExpected2),
  );

  const outputActualV2_2 = solutionV2(input2);
  assert.strictEqual(
    JSON.stringify(outputActualV2_2),
    JSON.stringify(outputExpected2),
  );

  console.log("All tests passed successfully.");
}

test();
