const assert = require("assert");

/*
KATA: 5 KYU - Pete, the baker

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/

function cakes(recipe, available) {
  const allAvailable = Object.entries(recipe).every(([ingredient, amountNeeded]) => {
      return available.hasOwnProperty(ingredient) && available[ingredient] >= amountNeeded;
  });

  if (!allAvailable) {
      return 0; 
  }

  // Calculate the maximum number of cakes that can be made
  const maxCakesPossible = Object.entries(recipe).reduce((minCakes, [ingredient, amountNeeded]) => {
      const cakesPossible = Math.floor(available[ingredient] / amountNeeded);
      return Math.min(minCakes, cakesPossible);
  }, Infinity);

  return maxCakesPossible;
}

function test() {
  const recipe1 = { flour: 500, sugar: 200, eggs: 1 };
  const available1 = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
  const outputExpected1 = 2;
  const outputActual1 = cakes(recipe1, available1);
  assert.strictEqual(outputExpected1, outputActual1);

  const recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
  const available2 = { sugar: 500, flour: 2000, milk: 2000 };
  const outputExpected2 = 0;
  const outputActual2 = cakes(recipe2, available2);
  assert.strictEqual(outputExpected2, outputActual2);

  console.log("All tests passed successfully.");
}

test();
