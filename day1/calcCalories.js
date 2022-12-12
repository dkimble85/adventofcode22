const fs = require('fs')

const fileContents = fs
  .readFileSync('inventory.txt', 'utf-8')
  .split('\n')

let calorieCounter = 0,
  calorieCounterArr = [],
  totalCalories = 0

fileContents.map((entry) => {
  if (!isNaN(parseInt(entry))) {
    calorieCounter += parseInt(entry)
  } else {
    calorieCounterArr.push(calorieCounter)
    calorieCounter = 0
  }
})

const elfMaxCalories = calorieCounterArr.reduce(
  (accumulatedValue, currentValue) => {
    return Math.max(accumulatedValue, currentValue)
  }
)

calorieCounterArr.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))

const big3 = calorieCounterArr.slice(0, 3)

big3.map((entry) => {
  totalCalories += entry
})

console.log(totalCalories) // Total sum of calories carried by 3 elves with the most calories in their inventory => 205615
