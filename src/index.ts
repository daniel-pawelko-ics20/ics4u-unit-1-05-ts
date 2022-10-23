/**
 * Calculate wood length
 *
 * By:      Daniel Pawelko
 * Version: 1.0
 * Since:   2022-10-15
 */

// Importing promptSync to allow user input
import promptSync from 'prompt-sync'

// Defining variables
const prompt = promptSync()

// User input
const widthString = prompt('Enter the width(inch): ')
const heightString = prompt('Enter the height(inch): ')

/**
 * @param {number} width of wood.
 * @param {number} height of wood.
 * @returns {number} length
 */
function boardFoot(width: number, height: number): number {
  return 144 / width / height
}

try {
  // Converting String to Num
  const widthNum = parseFloat(widthString)
  const heightNum = parseFloat(heightString)

  if (isNaN(widthNum) || isNaN(heightNum)) {
    console.log('Input invalid :(')
  } else if (widthNum <= 0 || heightNum <= 0) {
    console.log('Input must be positive')
  } else {
    // Calling function
    const length = boardFoot(widthNum, heightNum)

    // Output
    console.log(`The wood should be ${length} inch(es) long.`)
  }
} catch (e) {
  // Incace error occurs
  console.log('Input invalid :(')
}

// Done
console.log('\nDone.')
