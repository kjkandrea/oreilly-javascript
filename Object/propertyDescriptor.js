/**
 * {
 *    writable: 쓰기 가능한가?
 *    enumerable: 삭제 가능한가?
 *    configurable: 열거 가능한가?
 * }
 */

function Person(name) {
  this.name = name
  this.age = 31
  this.partnerName = 'sj'
  this.job = 'fe developer'
}

const person = new Person('andrea')

Object.defineProperty(person, 'age', { writable: false })
Object.defineProperty(person, 'partnerName', { writable: false, configurable: false })
Object.defineProperty(person, 'job', { enumerable: false })

person.name = 'jk'
person.age = 21 // no change. 엄격모드에서는 에러로 취급
delete person.partnerName // no change. 엄격모드에서는 에러로 취급

console.log(
  Object.getOwnPropertyDescriptor(person, 'name')
  /**
   * {
   *    value: 'jk,
   *    writable: true,
   *    enumerable: true,
   *    configurable: true
   * }
   */
)

console.log(
  Object.getOwnPropertyDescriptor(person, 'age')
  /**
   * {
   *    value: 31,
   *    writable: false,
   *    enumerable: true,
   *    configurable: true
   * }
   */
)

console.log(
  Object.getOwnPropertyDescriptor(person, 'partnerName')
  /**
   * {
   *    value: 'sj',
   *    writable: false,
   *    enumerable: true,
   *    configurable: false
   * }
   */
)

console.log(
  Object.getOwnPropertyDescriptor(person, 'job')
  /**
   * {
   *    value: 'sj',
   *    writable: true,
   *    enumerable: false,
   *    configurable: true
   * }
   */
)

for (const key in person) {
  console.log(key) // 'job' 은 enumerable: false 이므로 출력안됨
}


