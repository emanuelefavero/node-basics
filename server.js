// TIP: dotenv needs to be installed as a dependency: `npm i dotenv`
// If you want to pass env variables without installing dotenv, you can use the following command when running the server: `node --env-file=.env server.js`
import * as dotenv from 'dotenv'
dotenv.config()
import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

// Get current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer(async (req, res) => {
  // Log the request method and URL
  console.log(req.url)
  console.log(req.method)

  // Create a basic router
  try {
    // Check if GET request
    if (req.method === 'GET') {
      let filePath

      // * Home
      if (req.url === '/') {
        res.statusCode = 200
        filePath = path.join(__dirname, 'public', 'index.html')
      }

      // * /about
      else if (req.url === '/about') {
        res.statusCode = 200
        filePath = path.join(__dirname, 'public', 'about.html')
      }

      // * Not Found
      else {
        res.statusCode = 404
        filePath = path.join(__dirname, 'public', 'not-found.html')

        // TIP: You could also throw an error instead of returning a 404 page
        // throw new Error('Page Not Found')
      }

      // * Read the file and send it as a response
      const data = await fs.readFile(filePath)
      res.setHeader('Content-Type', 'text/html')
      res.write(data)
      res.end()

      // TIP: Use `res.writeHead(200, { 'Content-Type': 'text/html' })` to set both status code and content type

      // If not a GET request
    } else {
      throw new Error(`${req.method} Method Not Allowed`)
    }

    // Catch any errors
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(`Server Error: ${error.message}`)
  }
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
