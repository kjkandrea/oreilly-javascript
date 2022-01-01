function generateStack() {
  const _stack = Symbol('private')

  class Stack {
    constructor () {
      this[_stack] = []
      this.push = this[_stack].push.bind(this[_stack])
      this.pop = this[_stack].pop.bind(this[_stack])
    }

    get array () {
      return [...this[_stack]]
    }
  }

  return new Stack
}

const stack = generateStack()
console.log(stack)
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())
stack.array.push(3) // No. You Can't.
console.log(stack.array)