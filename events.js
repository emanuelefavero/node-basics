import { EventEmitter } from 'events'

const emitter = new EventEmitter()

function greetHandler(name) {
  console.log(`Hello ${name}`)
}

function goodbyeHandler() {
  console.log('Goodbye')
}

// Register event listeners
emitter.on('greet', greetHandler)
emitter.on('goodbye', goodbyeHandler)

// Emit events
emitter.emit('greet', 'John') // Hello John
emitter.emit('goodbye') // Goodbye

// Error handling
emitter.on('error', (error) => {
  console.log(error) // <- Error: Something went wrong
})

// Simulate error - uncomment to see the error message
emitter.emit('error', new Error('Something went wrong'))
