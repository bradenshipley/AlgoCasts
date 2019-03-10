// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


//create empty arrays called results
//create counter, starting at 1
//as long as (start column <= end column) && (start row<= end row)
//loop from start column to end column
//at results[start_row][i] assign counter variable
//increment counter
//increment start row
//loop from start row to end row
//at results[i][end_column] assign counter variable
//increment counter
//decrement end column
//repeat for other two sides
function matrix(n) {
	//create and populate our results arr
	const results = []
	for (let i = 0; i < n; i++) {
		results.push([])
	}
	//set our variables
	let counter = 1
	let startColumn = 0
	let endColumn = n - 1
	let startRow = 0
	let endRow = n - 1
	//set our while loop to check for the 'as long as..' step above
	while (startColumn <= endColumn && startRow <= endRow) {
		//Top Row. startColumn -> endColumn
		for (let i = startColumn; i <= endColumn; i++) {
			results[startRow][i] = counter
			counter++
		}
		startRow++
		//Right side. startRow -> endRow
		for (let i = startRow; i <= endRow; i++) {
			results[i][endColumn] = counter
			counter++
		}
		endColumn--
		//Bottom side. endColumn -> startColumn
		for (let i = endColumn; i >= startColumn; i--) {
			results[endRow][i] = counter
			counter++
		}
		endRow--
		//Left side. endRow->startRow
		for (let i = endRow; i >= startRow; i--) {
			results[i][startColumn] = counter
			counter++
		}
		startColumn++
	}
	return results
}

module.exports = matrix;
