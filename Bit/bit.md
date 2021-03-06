# 비트단위 연산을 활용해 무언가 해보자!

[자바스크립트 개발자라면 알아야 할 33가지 개념 #12 자바스크립트 비트연산 실제로 활용하기!](https://velog.io/@jakeseo_me/2019-04-30-1604-%EC%9E%91%EC%84%B1%EB%90%A8-7qjv3gv9ad)

## 이진수 string 생성하기

```javascript
const toBit = number => number.toString(2)

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

]

// [ '1', '10', '11', '100', '101', '110', '111', '1000', '1001' ]
```

## bitwise 로 1 이동시키기

```javascript
let bit = (1).toString(2)
console.log(bit) // 2진법 : 1

bit = bit << 1
console.log(bit) // 2진법 규칙에 맞게 1을 이동시킴. 십진법으로 출력 : 2
console.log(bit.toString(2)) // 2진법 규칙에 맞게 1을 이동시킴. 이진법으로 출력 : 10

bit = bit << 1
console.log(bit) // 2진법 규칙에 맞게 1을 이동시킴. 십진법으로 출력 : 4
console.log(bit.toString(2)) // 2진법 규칙에 맞게 1을 이동시킴. 이진법으로 출력 : 100

bit = bit << 1
console.log(bit) // 2진법 규칙에 맞게 1을 이동시킴. 십진법으로 출력 : 8
console.log(bit.toString(2)) // 2진법 규칙에 맞게 1을 이동시킴. 이진법으로 출력 : 1000

bit = bit << 1
console.log(bit) // 2진법 규칙에 맞게 1을 이동시킴. 십진법으로 출력 : 16
console.log(bit.toString(2)) // 2진법 규칙에 맞게 1을 이동시킴. 이진법으로 출력 : 10000
```