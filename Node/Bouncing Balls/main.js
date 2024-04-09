const assert = require("assert");
/*
KATA: 6 KYU - Bouncing Balls

Description:
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/

function bouncingBall(h, bounce, window) {
  if (typeof h !== "number" || h <= 0) return -1;
  if (typeof bounce !== "number" || bounce <= 0 || bounce >= 1) return -1;
  if (typeof window !== "number" || window >= h) return -1;

  let rebounds = -1;

  while (h > window) {
    h *= bounce;
    rebounds += 2;
  }
  return rebounds;
}

function test() {
  const input1 = [3.0, 0.66, 1.5];
  const outputExpected1 = 3.0;
  const outputActual1 = bouncingBall(input1[0], input1[1], input1[2]);
  assert.strictEqual(outputActual1, outputExpected1);

  const input2 = [30.0, 0.66, 1.5];
  const outputExpected2 = 15.0;
  const outputActual2 = bouncingBall(input2[0], input2[1], input2[2]);
  assert.strictEqual(outputActual2, outputExpected2);

  console.log("All tests passed successfully.");
}

test();
