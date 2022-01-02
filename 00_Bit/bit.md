# 비트단위 연산을 활용해 무언가 해보자!

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