// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
// 	//create object to hold seen characters
// 	let charMap = {}
// 	//iterate through the string and put each character into the character map object
// 	for (let char of str) {
// 		charMap[char] ? charMap[char]++ : (charMap[char] = 1)
// 	}
// 	//return the key that has the highest value, using the reduce function
// 	return Object.keys(charMap).reduce((a, b) =>
// 		charMap[a] > charMap[b] ? a : b
// 	)
// }

function maxChar(str) {
	//create object to hold seen characters
	let charMap = {}
	let max = 0
	let maxChar = ''
	//iterate through the string and put each character into the character map object
	for (let char of str) {
		charMap[char] ? charMap[char]++ : (charMap[char] = 1)
	}
	//iterate through the object
	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char]
			maxChar = char
		}
	}
	return maxChar
}

module.exports = maxChar
