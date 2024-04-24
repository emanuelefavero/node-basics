import fs from 'fs/promises'

// * WRITE
async function writeFile() {
  try {
    await fs.writeFile('./hello.txt', 'Hello')
  } catch (error) {
    console.error(error)
  }
}

// * APPEND
async function appendFile() {
  try {
    await fs.appendFile('./hello.txt', '\nWorld!')
  } catch (error) {
    console.error(error)
  }
}

// * READ
async function readFile() {
  try {
    const data = await fs.readFile('./hello.txt', 'utf-8')
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

writeFile()
appendFile()
readFile()
