const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

let file = fs.createWriteStream('inventory.txt')

let rucksackItems = []
let inventoryTotal = 0
let priorityScale = [
  '',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

for (let i = 0; i < input.length; i += 3) {
  rucksackItems.push(input.slice(i, i + 3))
}

rucksackItems.map((item) => {
  let firstItem = item[0]
  let singleMatch = false
  let firstMatchLetter = ''

  for (let i = 0; i < item[0].length; i++) {
    if (
      item[1].indexOf(firstItem[i]) > -1 &&
      item[2].indexOf(firstItem[i]) > -1
    ) {
      inventoryTotal += priorityScale.indexOf(firstItem[i])
      return
    }
  }
})

console.log(inventoryTotal)
