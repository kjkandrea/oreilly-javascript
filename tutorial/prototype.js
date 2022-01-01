function Point (x , y) {
  this.x = x
  this.y = y
}

Point.prototype.sqrt = function () {
  return Math.sqrt(
    this.x * this.x
    +
    this.y * this.y
  )
}

var point = new Point(1, 1)

console.log(
  point.sqrt()
)

