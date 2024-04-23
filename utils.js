function generateRandomNumber() {
  return Math.floor(Math.random() * 10 + 1)
}

const randomNumber = generateRandomNumber()

export { generateRandomNumber, randomNumber }
