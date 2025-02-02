/**
 * Problem:
 * Write a basic calculator that can perform addition, subtraction, multiplication, and division.
 *
 * Your task:
 * Implement the functions `add`, `subtract`, `multiply`, and `divide` that perform
 * the respective operations based on user input.
 *
 * Example:
 * add(2, 3) should return 5.
 * subtract(5, 2) should return 3.
 * multiply(2, 4) should return 8.
 * divide(10, 2) should return 5.
 */

// Write your solution here
// تعریف تابع cal
function cal(opp, a, b) {
    switch (opp) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                return "write a num";
            }
            return a / b;
        default:
            return "come on";
    }
}

// تست فراخوانی تابع با ورودی‌های مختلف
console.log(cal("add", 2, 3));       // Output: 5
console.log(cal("subtract", 5, 3));  // Output: 2
console.log(cal("multiply", 4, 5));  // Output: 20
console.log(cal("divide", 10, 2));   // Output: 5
console.log(cal("divide", 10, 0));   // Output: write a num
console.log(cal("modulus", 10, 3));  // Output: come on

module.exports = {add,subtract,multiply,divide};
