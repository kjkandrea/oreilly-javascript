const _stack = Symbol('private')

class Stack {
  constructor () {
    this[_stack] = []
    this.push = this[_stack].push.bind(this[_stack])
    this.pop = this[_stack].pop.bind(this[_stack])
  }

  get array () {
    return this[_stack]
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())
console.log(stack.array)