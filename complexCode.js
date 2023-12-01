/* complexCode.js */

// This code demonstrates a complex algorithm for finding all prime numbers within a given range

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to find all prime numbers within the given range
function findPrimesInRange(start, end) {
  let primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Example usage
const startRange = 1;
const endRange = 1000;
const primeNumbers = findPrimesInRange(startRange, endRange);

// Output the prime numbers
console.log("Prime numbers between " + startRange + " and " + endRange + ":");
console.log(primeNumbers.join(", "));

// More complex operations on the prime numbers
const sumOfPrimes = primeNumbers.reduce((sum, num) => sum + num, 0);
console.log("Sum of prime numbers: " + sumOfPrimes);
console.log("Average of prime numbers: " + (sumOfPrimes / primeNumbers.length));