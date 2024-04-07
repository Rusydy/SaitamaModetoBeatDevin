const assert = require("assert");

/*
KATA: 6 KYU - Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

```
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}

function test() {
    const input1 = [];
    const outputExpected1 = "no one likes this";
    const outputActual1 = likes(input1);
    assert.strictEqual(outputExpected1, outputActual1);

    const input2 = ["Peter"];
    const outputExpected2 = "Peter likes this";
    const outputActual2 = likes(input2);
    assert.strictEqual(outputExpected2, outputActual2);

    const input3 = ["Jacob", "Alex"]
    const outputExpected3 = "Jacob and Alex like this";
    const outputActual3 = likes(input3);
    assert.strictEqual(outputExpected3, outputActual3);

    const input4 = ["Max", "John", "Mark"];
    const outputExpected4 = "Max, John and Mark like this";
    const outputActual4 = likes(input4);
    assert.strictEqual(outputExpected4, outputActual4);

    const input5 = ["Alex", "Jacob", "Mark", "Max"];
    const outputExpected5 = "Alex, Jacob and 2 others like this";
    const outputActual5 = likes(input5);
    assert.strictEqual(outputExpected5, outputActual5);

    console.log("All tests passed successfully.");
}

test();
