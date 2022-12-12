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

  console.log(id)
  if (firstRangeDiff > secondRangeDiff) {
    for (let x = firstRangeNums[0]; x <= firstRangeNums[1]; x++) {
      if (secondRangeNums[0] === x) {
        console.log(
          `true: secondRangeNums ${secondRangeNums[0]} ${x}`
        )
        counter++
        break
      }
      if (secondRangeNums[1] === x) {
        console.log(
          `true: secondRangeNums ${secondRangeNums[1]} ${x}`
        )
        counter++
        break
      }
    }
  } else {
    for (let x = secondRangeNums[0]; x <= secondRangeNums[1]; x++) {
      if (firstRangeNums[0] === x) {
        console.log(`true: firstRangeNums ${firstRangeNums[0]} ${x}`)
        counter++
        break
      }
      if (firstRangeNums[1] === x) {
        console.log(`true: firstRangeNums ${firstRangeNums[1]} ${x}`)
        counter++
        break
      }
    }
  }
  console.log('\n')
})

console.log(counter)
