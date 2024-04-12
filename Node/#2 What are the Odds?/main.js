/*
A football game ultimately has three possible outcomes (HOME WIN / DRAW / AWAY WIN). Bookmakers offer different odds for each outcome, this is known as a '3-Way' bet. (The Odds are related to the relative probabilities)

"The house always wins"... They do this by proportionally reducing the true odds which causes the 'book' to exceed 100%. The percentage over is known as the 'bookmakers margin' and it represents their expected profits. Mathematically, for real life examples, the sum of probabilities for all possibilities (the book) must be 1.00 or 100%.

##Task

Write a function takes the bookies odds and returns the 'true' odds. The odds are entered as fractional odds displayed in a 2D array. For example 3-5 = [3,5].


input:    [homeWinOdds, drawOdds, awayWinOdds]
output:   [trueHomeOdds, trueDrawOdds, trueAwayOdds]

        Bookmakers Odds                True Odds
Eg:     [ [3,5], [7,5], [19,5] ] --> [ [1,1], [2,1], [5,1] ]
Note: You'll need to reduce fractions to get your final answer, It's worth completing this Kata before hand. https://www.codewars.com/kata/576400f2f716ca816d001614.

Useful Resources: https://en.wikipedia.org/wiki/Mathematics_of_bookmaking http://www.wikihow.com/Calculate-Odds
*/

const assert = require("assert");

function trueOdds(arr) {
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  const norm = ([a, b], d = gcd(a, b)) => [a / d, b / d];
  const add = ([a, b], [c, d]) => norm([a * d + b * c, b * d]);
  const div = ([a, b], [c, d]) => norm([a * d, b * c]);
  const odds = ([a, b]) => [b - a, a];
  const s = arr.reduce((s, [a, b]) => add(s, [b, a + b]), [0, 1]);
  return arr.map(([a, b]) => odds(div([b, a + b], s)));
}

function test() {
  const input1 = [
    [3, 5],
    [7, 5],
    [19, 5],
  ];
  const outputExpected1 = [
    [1, 1],
    [2, 1],
    [5, 1],
  ];
  const outputActual1 = trueOdds(input1);
  assert.strictEqual(
    JSON.stringify(outputExpected1),
    JSON.stringify(outputActual1),
  );

  const input2 = [
    [1, 2],
    [2, 1],
    [3, 1],
  ];
  const outputExpected2 = [
    [1, 3],
    [1, 1],
    [1, 2],
  ];
  const outputActual2 = trueOdds(input2);
  assert.strictEqual(
    JSON.stringify(outputExpected2),
    JSON.stringify(outputActual2),
  );

  console.log("All tests passed successfully.");
}

/*
Explanation:

Let's consider a specific example to illustrate the process:

Suppose a bookmaker offers the following fractional odds for a football match:

- Home Win: 3-1
- Draw: 2-1
- Away Win: 4-1

We want to calculate the true odds for each outcome.

1. **Calculate Implied Probabilities**:
   - For each outcome, we calculate the implied probability using the formula:
     \[
     \text{Implied Probability} = \frac{1}{\text{Fractional Odds} + 1}
     \]
     So, for the given odds:
     - Home Win: \(\frac{1}{3+1} = 0.25\)
     - Draw: \(\frac{1}{2+1} = 0.333\)
     - Away Win: \(\frac{1}{4+1} = 0.2\)

2. **Adjust for Bookmakers' Margin**:
   - The sum of the implied probabilities is \(0.25 + 0.333 + 0.2 = 0.783\).
   - The bookmakers' margin is \(0.783 - 1 = -0.217\).

3. **Normalize Probabilities**:
   - To adjust for the margin, we need to normalize the probabilities by dividing each by the sum of all probabilities:
     - Normalized Home Win Probability: \(0.25 / 0.783 = 0.319\)
     - Normalized Draw Probability: \(0.333 / 0.783 = 0.425\)
     - Normalized Away Win Probability: \(0.2 / 0.783 = 0.256\)

4. **Convert Probabilities Back to Odds**:
   - Finally, we convert the normalized probabilities back to fractional odds:
     - True Home Win Odds: \(\frac{1}{0.319} \approx 3.134 \Rightarrow [3, 1]\)
     - True Draw Odds: \(\frac{1}{0.425} \approx 2.353 \Rightarrow [2, 1]\)
     - True Away Win Odds: \(\frac{1}{0.256} \approx 3.906 \Rightarrow [4, 1]\)

So, the true odds considering the bookmakers' margin for this football match would be approximately `[3, 1]` for Home Win, `[2, 1]` for Draw, and `[4, 1]` for Away Win.
*/