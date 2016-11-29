'use strict'

/**
module.exports = function average(...args) {
  var result = 0
  var i = 0
  args.forEach(function (value) {
    result += value
    i++
  })

  return result / args.length
}
*/
module.exports = (...args) => {
  var result = args.reduce((soFar, value) => soFar + value, 0)
  return result / args.length
}
