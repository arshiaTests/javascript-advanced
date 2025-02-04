/**
 * Problem:
 * Write a function that takes a positive integer as input and returns the sum of its digits.
 *
 * Your task:
 * Implement the function `sumOfDigits` that calculates the sum of digits in the given number.
 *
 * Example:
 * sumOfDigits(123) should return 6 (1 + 2 + 3).
 * sumOfDigits(987) should return 24 (9 + 8 + 7).
 */
function sumOfDigits(number) {
    return number.toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(123)); 
console.log(sumOfDigits(987)); 


module.exports = sumOfDigits;
