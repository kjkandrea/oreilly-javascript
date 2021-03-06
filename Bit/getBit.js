const toBit = number => {
  if (typeof number === 'number') return number.toString(2)
  throw new TypeError()
}

const bits = [
  toBit(1),
  toBit(2),
  toBit(3),
  toBit(4),
  toBit(5),
  toBit(6),
  toBit(7),
  toBit(8),
  toBit(9),
  toBit(100),
]

console.log(bits)