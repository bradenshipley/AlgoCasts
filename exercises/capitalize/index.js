// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
//make an empty arr 'words
//split input str by spaces
//for each word in arr
//uppercase the first letter of the word
//join the first letter with the rest of the word
//push result into words array
//join words arr into a str
//return result
function capitalize(str) {
	const words = []
	let arr = str.split(' ')
	for (let word of arr) {
		words.push(word[0].toUpperCase() + word.slice(1))
	}
	return words.join(' ')
}

module.exports = capitalize
