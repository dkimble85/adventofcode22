const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

let strategyGuide = []
let separateIDs = []
let counter = 0

input.map((round) => {
  strategyGuide.push(round.split(/\s/))
})

strategyGuide.map((id) => {
  separateIDs.push(id[0].split(','))
})

separateIDs.map((id) => {
  let firstRange = id[0].split('-')
  let secondRange = id[1].split('-')

  let firstRangeNums = [
    parseInt(firstRange[0]),
    parseInt(firstRange[1]),
  ]
  let secondRangeNums = [
    parseInt(secondRange[0]),
    parseInt(secondRange[1]),
  ]

  let firstRangeDiff = firstRange[1] - firstRange[0]
  let secondRangeDiff = secondRange[1] - secondRange[0]

  if (firstRangeDiff > secondRangeDiff) {
    if (
      secondRangeNums[0] >= firstRangeNums[0] &&
      secondRangeNums[1] <= firstRangeNums[1]
    ) {
      counter++
    }
  } else {
    if (
      firstRangeNums[0] >= secondRangeNums[0] &&
      firstRangeNums[1] <= secondRangeNums[1]
    ) {
      counter++
    }
  }
})

console.log(counter)
