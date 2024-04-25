// * process is a global object that provides information about the current Node.js process

// argv is an array that contains the command line arguments passed to the script
console.log(process.argv)
/*
[
  '/Users/username/.nvm/versions/node/v21.6.2/bin/node',
  '/Users/username/node-basics/process.js',
  'hello' // argument passed to the script
]
*/

// TIP: When you pass arguments to a script (e.g. `node process.js hello`), they will be pushed to the process.argv array

// -----------------------------------------------------------

// process.env contains the user environment variables
console.log(process.env.USER) // username
console.log(process.env.HOME) // /Users/username
console.log(process.env.SHELL) // /bin/zsh
console.log(process.env.PWD) // /Users/username/node-basics

// To read environment variables from a .env file, you can use a package like dotenv
import * as dotenv from 'dotenv'
dotenv.config()
console.log(process.env.PORT) // 4000

// -----------------------------------------------------------

// process also has other properties like cwd, pid, version, etc.
console.log(process.cwd()) // /Users/username/node-basics
console.log(process.pid) // 1234
console.log(process.version) // v21.6.2
console.log(process.title) // /Users/username/.nvm/versions/node/v21.6.2/bin/node
console.log(process.uptime()) // 0.02, returns the number of seconds the Node.js process has been running
console.log(process.memoryUsage()) // { rss: 23205888, heapTotal: 6037504, heapUsed: 3715560, external: 8272 }
console.log(process.cpuUsage()) // { user: 10000, system: 10000 }
console.log(process.arch) // arm64
console.log(process.platform) // darwin
console.log(process.version) // v21.6.2

// -----------------------------------------------------------

// Listen for the 'exit' event
process.on('exit', (code) => {
  console.log(`Process exited with code ${code}`)
})

// exit() - terminates the Node.js process with the specified exit code
// TIP: 0 means success, any other number means failure
process.exit(0)
console.log('This will not be printed')
