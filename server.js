// TIP: dotenv needs to be installed as a dependency: `npm i dotenv`
// If you want to pass env variables without installing dotenv, you can use the following command when running the server: `node --env-file=.env server.js`
import * as dotenv from 'dotenv'
dotenv.config()
import http from 'http'
import { randomNumber } from './utils.js'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(
    `<h1 style="color: MediumSlateBlue; font-family: sans-serif;">Random Number: ${randomNumber}</h1>`
  )
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
