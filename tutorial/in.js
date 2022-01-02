const array = [1, 2, 3]
console.log(0 in array); // 해당 key 가 있는지 검사할 수 있음.
console.log(2 in array);
console.log(3 in array);
console.log(array.hasOwnProperty(2)) // 이거랑 동일

const object = {
  x: 1,
  y: 2,
  z: 3,
}
console.log('x' in object); // 해당 key 가 있는지 검사할 수 있음.
console.log('z' in object);
console.log('a' in object);
console.log(object.hasOwnProperty('z')) // 이거랑 동일