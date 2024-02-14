/**
 * @param {number} n
 * @return {number}
 */
function findNthDigit(n) {
  let digitsSoFar = 0;
  let num = 1;

  let digitsPerNumber = 1;
  let limit = 10;
  while (digitsSoFar < n) {
    if (num === limit) {
      digitsPerNumber++;
      limit *= 10;
    }
    digitsSoFar += digitsPerNumber;
    num++;
  }
  num--; // we went one too far in the loop
    
  let needNthLeastSigDigit = digitsSoFar - n;
  while (needNthLeastSigDigit > 0) {
    num = (num - num % 10) / 10;
    needNthLeastSigDigit--;
  }
  
  return num % 10;
}