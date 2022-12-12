const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8').split('\n')

// let file = fs.createWriteStream('output.txt')

const inputStr = input.toString()

for (let x = 0; x < inputStr.length; x++) {
  let tempStr = inputStr.slice(x, x + 4)
  let counter = 0

  // file.write('tempStr: ' + tempStr + '\n')

  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr.split(tempStr.charAt(i)).length - 1 > 1) {
      counter++
    }
  }

  if (counter === 0) {
    // file.write(x + 4 + '\ntrue \n')
    console.log(x + 4)
    break
  }
}

// file.end()
