function Person(name) {
  this.name = name
}

const person = new Person('andrea')

Person.prototype.age = 31

console.log(person)

// 프로토타입 체인에 상속받은 프로퍼티도 출력됨
for (const key in person) {
  console.log(key, ':', person[key])
}

// 인스턴스 내에 프로퍼티만 출력됨
for (const key in person) {
  if(person.hasOwnProperty(key)) console.log(key, ':', person[key])
}

// 인스턴스 내에 프로퍼티만 출력됨
console.log(Object.keys(person))
console.log(Object.values(person))

