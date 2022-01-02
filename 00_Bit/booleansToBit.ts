// boolean list 를 이진수로 다루는 자료형
class Booleans {
	private readonly _bit: string;

	constructor(booleans: boolean[]) {
		this._bit = this.toBit(booleans)
	}

	get bit() {
		return this._bit;
	}

	toBit(booleans: boolean[]): string {
		return booleans.map(bool => bool ? 1 : 0).join('')
	}

	isEqual(bit: string): boolean {
		return this._bit === bit;
	}
}

const { bit } = new Booleans([true, true, false, true])
console.log(bit)

// Booleans 로 생성된 boolean list 와 boolean list 의 equality 을 알 수 있다.
const foo = new Booleans([true, true, false, true])
const bar = new Booleans([true, true, false, true])
console.log(foo.isEqual(bar.bit))

console.log(foo.isEqual('1100'))