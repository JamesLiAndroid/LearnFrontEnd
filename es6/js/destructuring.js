// 'use strict'

var inputArrays = process.argv.slice(2)

let [,username, email] = inputArrays

let result = {}

result = {username, email}

// [, result.username, result.email] = inputArrays

console.log(result)
//console.log(`\{ username: \'${username}\', email: \'${email}\' \}`)
