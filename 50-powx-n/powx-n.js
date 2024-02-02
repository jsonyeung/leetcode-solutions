/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  // Base case n = 0
  if (n === 0) {
    return 1;
  }

  // Case 1: n is negative
  if (n < 0) {
    return 1 / myPow(x, Math.abs(n));
  }

  // Case 2: n is odd
  if (n % 2 !== 0) {
    return x * myPow(x, n - 1);
  }

  // Case 3: n is even
  // Use the fact that x^n = x^(n//2) * x^(n//2) to halve the number of recursive calls
  const squaredRes = myPow(x, Math.floor(n / 2));
  return squaredRes * squaredRes;
};