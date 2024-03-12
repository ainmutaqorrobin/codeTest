// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let result;
  if (Math.sign(n) === 1) {
    result = parseInt(n.toString().split("").reverse().join(""));
  } else if (Math.sign(n) === -1) {
    result = parseInt(-n.toString().slice(1).split("").reverse().join(""));
  } else result = 0;
  return result;
}
module.exports = reverseInt;
