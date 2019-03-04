// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//use regex .replace(/[^\w]/g,'').toLowerCase() to remove punctuation and capital letters
// function buildCharMap(str) {
// 	const charMap = {}
// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
// 		charMap[char] = charMap[char] + 1 || 1
// 	}
// 	return charMap
// }
// function anagrams(stringA, stringB) {
// 	const charMapA = buildCharMap(stringA)
// 	const charMapB = buildCharMap(stringB)
// 	//if the size of the objects is different, return false
// 	if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
// 		return false
// 	}
// 	//iterate through one object and see if the values are equal in the other object. return true if no failures show up
// 	for (let char in charMapA) {
// 		if (charMapA[char] !== charMapB[char]) {
// 			return false
// 		}
// 	}
// 	return true
// }
// helper function
function cleanString(str) {
	return str
		.replace(/[^/w]/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('')
}
//alternative solution
function anagrams(strA, strB) {
	return cleanString(strA) === cleanString(strB)
}
module.exports = anagrams
