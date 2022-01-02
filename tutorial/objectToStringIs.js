/**
 * 요약 : typeof 랑 유사하게 동작하나 리턴하는 문자열의 형식이 다르다.
 *
 * toString 을 호출했을 때 자바스크립트 엔진은 newWorker 가 본인의 스코프에서 toString 을 가지고 있는지 확인한다.
 * 만약 가지고 있으면, 그 스코프 내의 toString 이 호출된다. 만약 가지고 있지 않다면,
 * 자바스크립트 엔진은 newWorker 의 [[prototype]] 프로퍼티에 연결된 객체로 들어가 그 스코프에서
 * toString 이 있는지 확인한다. 만약 있으면 해당 스코프 내의 toString 이 실행되고,
 * 가지고 있지 않으면 다시 그 스코프 내에 존재하는 [[prototype]] 프로퍼티에 연결된 객체로 들어가 위 작업을 반복한다.
 * 이 반복 과정은 toString 을 어느 스코프 내에서 찾을 때 까지 반복하거나
 * 더 이상 [[prototype]] 프로퍼티에 연결된 객체가 없을 때까지, 즉 null 일 때까지 반복한다.
 * [[prototype]] 프로퍼티에 연결된 객체가 null 인 경우는
 * 최상위 객체인 Object 의 [[prototype]] 을 조사했을 때이며,
 * 이렇게 프로토타입에 연결된 객체를 타고 상위 클래스로 올라가면서
 * 새로운 프로토타입의 스코프에서 찾고자하는 값을 조사하는 과정을 프로토타입 체이닝이라고 부른다.
 *
 * https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-object-object-%EA%B0%80-%EB%8C%80%EC%B2%B4-%EB%AD%98%EA%B9%8C-fe55b754e709
 */

const entries = [
  Object.prototype.toString.call(undefined),
  Object.prototype.toString.call(null),
  Object.prototype.toString.call('string'),
  Object.prototype.toString.call(1),
  Object.prototype.toString.call([1]),
  Object.prototype.toString.call({}),
  Object.prototype.toString.call(Symbol()),
]

console.log(entries)