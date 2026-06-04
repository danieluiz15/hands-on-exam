/* Question 7 */ 
let numbers = [2, 20, 3, 7, 10, 4, 4, 7, 9, 12, 15, 14, 11, 10, 13, 10, 20, 16, 12, 16];

let uniqueNumbersSet = new Set(numbers); // Create a Set to store unique numbers

let uniqueNumbersArray = Array.from(uniqueNumbersSet); // Convert the Set back to an array

uniqueNumbersArray.sort((a, b) => a - b); // Sort the array

console.log(uniqueNumbersArray);
