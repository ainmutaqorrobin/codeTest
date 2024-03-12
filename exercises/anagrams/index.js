// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const objA = assignChar(stringA);
  const objB = assignChar(stringB);

  const keyA = Object.keys(objA);
  const keyB = Object.keys(objB);

  if (keyA.length !== keyB.length) return false;

  for (let char in objA) {
    if (objA[char] !== objB[char]) return false;
  }
  return true;
}
function assignChar(str) {
  const charObject = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charObject[char] = charObject[char] + 1 || 1;
  }

  return charObject;
}
anagrams("HEL@!(#(lo world", "World He@!#llo");
module.exports = anagrams;
