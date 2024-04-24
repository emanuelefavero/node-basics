import * as dotenv from 'dotenv'
dotenv.config()
import { createServer } from 'http'

const users = [
  { id: 1, name: 'Walter White' },
  { id: 2, name: 'Jesse Pinkman' },
  { id: 3, name: 'Gus Fring' },
]

// * Logger Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

// * JSON Header Middleware
const jsonHeader = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
}

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonHeader(req, res, () => {
      // * Handle GET /api/users
      if (req.url === '/api/users' && req.method === 'GET') {
        res.statusCode = 200
        res.write(JSON.stringify(users))
      }

      // * Handle GET /api/users/:id
      else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'GET') {
        const id = req.url.split('/')[3] // get the user id from URL
        const user = users.find((user) => user.id === parseInt(id))

        if (user) {
          res.statusCode = 200
          res.write(JSON.stringify(user))
        }

        // * Handle User Not Found
        else {
          res.statusCode = 404
          res.write(JSON.stringify({ message: 'User Not Found' }))
        }
      }

      // * Handle Route Not Found
      else {
        res.statusCode = 404
        res.write(JSON.stringify({ message: 'Route Not Found' }))
      }

      res.end()
    })
  })
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
