class Booleans {
	private readonly _bit: string;

	constructor(booleans: boolean[]) {
		this._bit = this.toBit(booleans)
	}

	get bit() {
		return this._bit;
	}

	toBit(booleans: boolean[]): string {
		return booleans.toString()
	}
}

const { bit } = new Booleans([true, true, false, true])
console.log(bit)