//1. Function to print an array containing only the even numbers from 1-100.
function areEvenNumbers() {
  let evenNumbers = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  console.log(evenNumbers);
}


//2. Function to print the reverse of a list of numbers 1-10.
function reverseList() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.reverse();
  console.log(numbers);
}


//3. Function to print the highest number and average of a given array.
function highestAndAverage(arr) {
  let highest = Math.max(...arr);
  let avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  console.log("The highest number is:", highest);
  console.log("The average is:", avg);
}
let arr = [1, 5, 30, 56, 3, 48, 67, 44, 7, 32];
highestAndAverage(arr);


//4. Function to check if a word is a palindrome.
function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}