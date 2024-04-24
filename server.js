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

  // Create a basic router
  try {
    // Check if GET request
    if (req.method === 'GET') {
      // * /
      if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(
          `<h1>Homepage</h1><a href='/random-number'>Get Random Number</a>`
        )
        // TIP: res.write('Hello') can also be used to send a response

        // * /random-number
      } else if (req.url === '/random-number') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(`<h1>Random Number: ${randomNumber}</h1><a href='/'>Home</a>`)

        // * Not Found
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end(`<h1>Not Found</h1><a href='/'>Home</a>`)
      }
    } else {
      throw new Error('Method Not Allowed')
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(`Server Error: ${error.message}`)
  }
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
