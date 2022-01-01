# 리터럴 (literal)

프로그램에 직접 나타내는 데이터 값

리터럴은 **데이터(값) 을 표현하는 방식** 를 일컫는다.

```javascript
'string' // String 리터럴
1 // Number 리터럴
{ a: 1, b: 2 } // Object 리터럴
['a', 'b'] // Array 리터럴
`${animal}은 나보다 빠르다.` // 탬플릿 리터럴
const regex = /\w+\s/g // 정규표현식 리터럴
```

그럼 아래와 같은 값은 어떻게 읽을까?

```javascript
const andrea = {
    name: 'andrea',
    age: 30
}
```

> andrea 상수에 Object 리터럴을 이용하여 값을 정의함