const assert = require("assert");

/*
KATA: 6 KYU - Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function spinWords(str) {
  let strArr = str.split(" ");
  let res = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 4) {
      let strI = strArr[i].split("").reverse().join("");

      res.push(strI);

      continue;
    }

    res.push(strArr[i]);
  }

  return res.join(" ");
}

function test() {
  const input1 = "Welcome";
  const outputExpected1 = "emocleW";
  const outputActual1 = spinWords(input1);
  assert.strictEqual(outputActual1, outputExpected1);

  const input2 = "Hey fellow warriors";
  const outputExpected2 = "Hey wollef sroirraw";
  const outputActual2 = spinWords(input2);
  assert.strictEqual(outputActual2, outputExpected2);

  const input3 = "This is a test";
  const outputExpected3 = "This is a test";
  const outputActual3 = spinWords(input3);
  assert.strictEqual(outputActual3, outputExpected3);

  const input4 = "This is another test";
  const outputExpected4 = "This is rehtona test";
  const outputActual4 = spinWords(input4);
  assert.strictEqual(outputActual4, outputExpected4);

  console.log("All tests passed successfully.");
}

test();
