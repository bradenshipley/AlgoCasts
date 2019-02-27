// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Split the string into an array
// Call the reverse Array method
// Join the array into a string
// Return the result of the above methods

function reverse(str) {
	return str
		.split('')
		.reverse()
		.join('')
}

module.exports = reverse
