
/*
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
How many circular primes are there below one million?

...

number will not contain any even digits (except 2 itself)
THIS IS NOT THE SAME AS EVERY PERMUTATION OF THE NUMBER
*/

function countCircPrimes(upperBound) {
  const possCircPrimes = [];
  let count = 4; //accounts for single digit circular primes
  for (let i = 11; i < upperBound; i += 2) {
    if (hasBadDigit(i) == true) {
      continue;
    }
    if (checkPrime(i) == true) {
      possCircPrimes.push(i)
    }
  }
  for (let j = 0; j < possCircPrimes.length; j++) {
    if (checkCircP(possCircPrimes[j]) == true) {
      count++
    }
  }
  return count;
}

console.log(countCircPrimes(1000000))



//***callback functions***

//checks is a number is a circular prime
function checkCircP(possCircP) {
  let rotations = [];
  let digits = possCircP.toString().split('').map(a => Number(a));
  for (let i = 0; i < digits.length - 1; i++) {
    let rotate = digits.shift();
    digits.push(rotate);
    let crush = digits.join('');
    rotations.push(Number(crush))
  }
  for (let n = 0; n < rotations.length; n++) {
    if (checkPrime(rotations[n]) == false) {
      return false;
    }
  }
  return true;
}

//checks if a number contains an even digit or 0 or 5
function hasBadDigit(num) {
  let digitized = num.toString().split('').map(a => Number(a));
  for (let i = 0; i < digitized.length; i++) {
    if (digitized[i] % 2 == 0 || digitized[i] == 0 || digitized[i] == 5) {
      return true;
    }
  }
  return false;
}

//checks if a number is prime
function checkPrime(num) {
  if (num === 0 || num === 1 || num < 0) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
