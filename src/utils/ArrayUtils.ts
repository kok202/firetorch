export default class ArrayUtils {
	static isEmpty(array?: Array<any> | null): boolean {
		return !array || !array.length;
	}
	static isNotEmpty(array?: Array<any> | null): boolean {
		return !this.isEmpty(array);
	}
	static getLast<T>(array: Array<T>): T | null {
		if (this.isEmpty(array)) return null;
		return array[array.length - 1];
	}
	static getLastIndex<T>(array: Array<T> | null): number {
		if (this.isEmpty(array)) return 0;
		else return array!.length - 1;
	}
}
