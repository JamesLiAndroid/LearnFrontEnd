'use strict'

/**
module.exports = function makeImportant(str, num = Array.prototype.map.call(str, (c) => '!').join('')) {
  if(!isNaN(num)) {
    return str + '!'.repeat(num)
  }

  return str + num
}
*/

module.exports = (string, bangs = string.length) => string + '!'.repeat(bangs)
