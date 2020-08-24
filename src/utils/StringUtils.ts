export default class StringUtils {
	static isEmpty = (arg?: string): boolean => {
		return !arg || arg.trim().length === 0 ? true : false;
	};

	static isNotEmpty = (arg?: string): boolean => {
		return !StringUtils.isEmpty(arg);
	};

	static trimWhiteSpace = (arg?: string): string => {
		if (StringUtils.isEmpty(arg)) return '';
		return arg!.trim().replace(/\s/g, '');
	};

	static isExistWhiteSpace = (arg?: string): boolean => {
		if (StringUtils.isEmpty(arg)) return true;
		const compactStringRegularExpression = new RegExp('[a-zA-Z0-9-_]+');
		return !compactStringRegularExpression.test(arg!);
	};

	static remove = (arrays: string[], target: string | string[]) => {
		if (Array.isArray(target))
			return arrays.filter(str => {
				for (const trg of target) {
					if (str !== trg) return false;
				}
				return true;
			});
		else return arrays.filter(str => str !== target);
	};
}
