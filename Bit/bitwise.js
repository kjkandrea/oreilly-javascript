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