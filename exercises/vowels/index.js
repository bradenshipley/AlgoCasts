// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  //null is a falsy value, arrays are truthy
  return matches ? matches.length : 0
}
// function vowels(str) {
//   const vowelList = ['a', 'e', 'i', 'o', 'u']
//   let count = 0
//   for (let char of str.toLowerCase()) {
//     if (vowelList.includes(char)) {
//       count++
//     }
//   }
//   return count
// }
module.exports = vowels;
