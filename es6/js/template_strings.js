'use strict';

function sendGreeting(name) {
  return `Hello, ${name}!
Your name lowercased is \"${name.toLowerCase()}\".`
}

console.log(sendGreeting(process.argv[2]))
