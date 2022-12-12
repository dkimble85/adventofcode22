const fs = require('fs')

const strategyOutput = fs
  .readFileSync('strategy.txt', 'utf-8')
  .split('\n')

// let file = fs.createWriteStream('scores.txt')

let strategyGuide = []
let scoreSheet = {
  A: 1, // rock
  X: 1, // rock
  B: 2, // paper
  Y: 2, // paper
  C: 3, // scissors
  Z: 3, // scissors
  win: 6,
  loss: 0,
  draw: 3,
}

let playerScore = 0,
  oppScore = 0

strategyOutput.map((round) => {
  strategyGuide.push(round.split(/\s/))
})

strategyGuide.map((round) => {
  let oppValue = scoreSheet[round[0]]
  let playerValue = scoreSheet[round[1]]

  if (oppValue === playerValue) {
    // Draw
    oppScore += scoreSheet.draw + oppValue
    playerScore += scoreSheet.draw + playerValue
  } else if (oppValue === 1 && playerValue === 3) {
    // Opp: Rock; Player: Scissors
    oppScore += scoreSheet.win + oppValue
    playerScore += scoreSheet.loss + playerValue
  } else if (oppValue === 3 && playerValue === 1) {
    // Opp: Scissors; Player: Rock
    oppScore += scoreSheet.loss + oppValue
    playerScore += scoreSheet.win + playerValue
  } else if (oppValue > playerValue) {
    // Opp: Win;
    oppScore += scoreSheet.win + oppValue
    playerScore += scoreSheet.loss + playerValue
  } else if (oppValue < playerValue) {
    // Player: Win;
    oppScore += scoreSheet.loss + oppValue
    playerScore += scoreSheet.win + playerValue
  }

  // file.write(playerScore + '\n')
})

// file.end()

console.log(playerScore)
