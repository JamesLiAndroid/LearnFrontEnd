'use strict';

var inputs = process.argv.slice(2)

//var results = inputs.map((string) => string.charAt(0)).toString()
var results = inputs.map((string) => string[0]).reduce((soFar, s) => soFar + s)
//console.log(`[${inputs}] becomes \"${results.replace(/,/g, "")}\"`)

console.log(`[${inputs}] becomes \"${results}\"`)
