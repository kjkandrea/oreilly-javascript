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

// boolean list 와 boolean list 를 최소비용으로 비교한다.
const foo = new Booleans([true, true, false, true])
const bar = new Booleans([true, true, false, true])
console.log(foo.isEqual(bar.bit))

console.log(foo.isEqual('1100'))