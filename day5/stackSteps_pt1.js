// [M]                     [N] [Z]
// [F]             [R] [Z] [C] [C]
// [C]     [V]     [L] [N] [G] [V]
// [W]     [L]     [T] [H] [V] [F] [H]
// [T]     [T] [W] [F] [B] [P] [J] [L]
// [D] [L] [H] [J] [C] [G] [S] [R] [M]
// [L] [B] [C] [P] [S] [D] [M] [Q] [P]
// [B] [N] [J] [S] [Z] [W] [F] [W] [R]
//  1   2   3   4   5   6   7   8   9

const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

let stacks = [
  [],
  ['B', 'L', 'D', 'T', 'W', 'C', 'F', 'M'],
  ['N', 'B', 'L'],
  ['J', 'C', 'H', 'T', 'L', 'V'],
  ['S', 'P', 'J', 'W'],
  ['Z', 'S', 'C', 'F', 'T', 'L', 'R'],
  ['W', 'D', 'G', 'B', 'H', 'N', 'Z'],
  ['F', 'M', 'S', 'P', 'V', 'G', 'C', 'N'],
  ['W', 'Q', 'R', 'J', 'F', 'V', 'C', 'Z'],
  ['R', 'P', 'M', 'L', 'H'],
]

let file = fs.createWriteStream('output.txt')

// Loop input array to determine steps
const getStringBetween = (str, start, end) => {
  const result = str.match(new RegExp(start + '(.*)' + end))

  return result[1]
}

input.map((step) => {
  let numItems = parseInt(getStringBetween(step, 'move ', 'from '))
  let fromStack = parseInt(getStringBetween(step, 'from ', 'to '))
  let toSubstr = step.lastIndexOf('to ')
  let toStack = parseInt(step.substring(toSubstr + 2))

  file.write('numItems: ' + numItems + '\n')
  file.write('From before: ' + stacks[fromStack] + '\n')
  file.write('To before: ' + stacks[toStack] + '\n')
  // Remove a given number of array items from one array
  let itemsToMove = stacks[fromStack].splice(
    stacks[fromStack].length - numItems,
    numItems
  )

  itemsToMove.reverse()

  stacks[toStack] = stacks[toStack].concat(itemsToMove)
  file.write('From after: ' + stacks[fromStack] + '\n')
  file.write('To after: ' + stacks[toStack] + '\n\n\n')
})

file.write(JSON.stringify(stacks))
