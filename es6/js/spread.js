'use strict'

var inputArrays = process.argv.slice(2)

var min = Math.min(...inputArrays)

console.log(`The minimum of [${inputArrays}] is ${min}`)
