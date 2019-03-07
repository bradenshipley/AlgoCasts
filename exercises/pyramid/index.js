// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//recursive solution

function pyramid(n, row = 0, level = '') {
	if (row === n) {
		return
	}
	if (level.length == 2 * n - 1) {
		console.log(level)
		return pyramid(n, row + 1)
	}
	const center = Math.floor((2 * n - 1) / 2)
	let add
	if (center - row <= level.length && center + >= level.legnth) {
		add += '#'
	} else {
		add += ' '
	}
	pyramid(n, row, level + add)
}
// //from - to n (iterate through rows)
//   //create an empty string, 'level'
//   //for 0 to ??? (columns)
//     //if the column should have a #
//       //add a # to 'level'
//     //else
//       //add a space to 'level
//   //console log 'level'
//   function pyramid(n) {
//     //n is the total number of rows
//     const width = n+n-1
//     const center = Math.floor(width/2)
//     for (let row = 0; row < n; row++){
//       let level = ''
//       for (let col = 0; col < width; col++){
//         if (center - row <= col && center + row >= col) {
//           level+='#'
//         } else {
//           level+=' '
//         }
//       }
//       console.log(level)
//     }
//   }

module.exports = pyramid;
