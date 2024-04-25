import { EventEmitter } from 'events'

const emitter = new EventEmitter()

function greetHandler(name) {
  console.log(`Hello ${name}`)
}

function goodbyeHandler() {
  console.log('Goodbye')
}

emitter.on('greet', greetHandler)
emitter.on('goodbye', goodbyeHandler)

emitter.emit('greet', 'John') // Hello John
emitter.emit('goodbye') // Goodbye
