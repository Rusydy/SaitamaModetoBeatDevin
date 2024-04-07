const assert = require("assert");

/*
KATA: 7 KYU - Friend or Foe?

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/

function friend(friends) {
    return friends.filter(name => name.length == 4);
}

function test() {
    const input1 = ["Ryan", "Kieran", "Mark"];
    const outputExpected1 = ["Ryan", "Mark"];
    const outputActual1 = friend(input1);
    assert.strictEqual(JSON.stringify(outputExpected1), JSON.stringify(outputActual1));

    console.log("All tests passed successfully.");
}

test();
