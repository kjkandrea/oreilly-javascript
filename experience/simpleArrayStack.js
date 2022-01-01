class Stack {
  constructor () {
    this.stack = []
    this.push = this.stack.push.bind(this.stack)
    this.pop = this.stack.pop.bind(this.stack)
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())
console.log(stack.stack)