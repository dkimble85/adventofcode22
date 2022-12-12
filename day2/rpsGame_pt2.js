const fs = require('fs')

const strategyOutput = fs
  .readFileSync('strategy.txt', 'utf-8')
  .split('\n')

let strategyGuide = []
let scoreSheet = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
  win: 6,
  loss: 0,
  draw: 3,
}

let playerScore = 0

strategyOutput.map((round) => {
  strategyGuide.push(round.split(/\s/))
})

strategyGuide.map((round) => {
  let oppValue = scoreSheet[round[0]]

  switch (round[1]) {
    case 'X':
      if (oppValue === 1) {
        playerScore += 3
      } else {
        playerScore += oppValue - 1 + scoreSheet.loss
      }

      return
    case 'Y':
      playerScore += oppValue + scoreSheet.draw
      return
    case 'Z':
      if (oppValue === 3) {
        playerScore += 7
      } else {
        playerScore += oppValue + 1 + scoreSheet.win
      }
      return
    default:
      return
  }
})

console.log(playerScore)
