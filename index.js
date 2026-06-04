/* Question 7 */ 
let numbers = [2, 20, 3, 7, 10, 4, 4, 7, 9, 12, 15, 14, 11, 10, 13, 10, 20, 16, 12, 16];

let uniqueNumbersSet = new Set(numbers); // Create a Set to store unique numbers

let uniqueNumbersArray = Array.from(uniqueNumbersSet); // Convert the Set back to an array

uniqueNumbersArray.sort((a, b) => a - b); // Sort the array

console.log(uniqueNumbersArray);

/* Question 8 */
function rotateArray(arr, k) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const positions = k % arr.length; // Handle cases where k is larger than the array length
  if (positions === 0) return arr.slice();

  const elementsToMove = arr.slice(-positions);  // Get the elements that will move to the front
  const remainingElements = arr.slice(0, arr.length - positions); // Get the remaining elements

  return [...elementsToMove, ...remainingElements]; // Combine them and return the new array
}

const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(originalArray, 2); // Rotate the array to the right by 2 positions
console.log(rotatedArray); 

/* Question 9 */
let consultants = [
  { name: 'Peyton Turner', company: 'Walker Inc' },
  { name: 'Isaias Fritsch', company: 'Walker Inc' },
  { name: 'Susana Wilderman', company: 'Nolan Inc' }
];

const companyGroups = consultants.reduce((groups, consultant) => {
  const company = consultant.company;

    if (!groups[company]) { // Check if the company group already exists
      groups[company] = [];
    }

    groups[company].push(consultant); // Add the consultant to the appropriate company group

    return groups;
}, {});
console.log(companyGroups);

/* Question 10 */

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    const reversedStr = cleanedStr.split('').reverse().join(''); // Reverse the cleaned string
    return cleanedStr === reversedStr; // Compare the cleaned string with its reverse
}

console.log(isPalindrome("madam")); // true