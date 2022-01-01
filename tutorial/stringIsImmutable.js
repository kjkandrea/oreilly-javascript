let abc = 'abc'

console.log(abc[1])
abc[1] = 'z' // No. You Can't
console.log(abc[1])

console.log('abc' !== abc) // false

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index)
    + replacement
    + this.substr(index + replacement.length)
}

abc = abc.replaceAt(1, 'z'); // string is immutable. but you can
console.log(abc)
console.log('abc' !== abc) // true
