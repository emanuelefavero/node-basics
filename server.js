// TIP: dotenv needs to be installed as a dependency: `npm i dotenv`
// If you want to pass env variables without installing dotenv, you can use the following command when running the server: `node --env-file=.env server.js`
import * as dotenv from 'dotenv'
dotenv.config()
import http from 'http'
import { randomNumber } from './utils.js'

const server = http.createServer((req, res) => {
  // Log the request method and URL
  console.log(req.url)
  console.log(req.method)

  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/html' })

  // Send the response
  // TIP: res.write('Hello') can also be used to send a response
  res.end(
    `<h1 style="color: MediumSlateBlue; font-family: sans-serif;">Random Number: ${randomNumber}</h1>`
  )
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
