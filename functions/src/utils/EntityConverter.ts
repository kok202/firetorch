import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

export default class EntityConverter {
	static convert<T, V>(cls: ClassType<T>, object: any): T {
		const str = JSON.stringify(object);
		const plain = JSON.parse(str);
		return plainToClass(cls, plain);
	}

	static asPlainObject = (object: any) => {
		return JSON.parse(JSON.stringify(object));
	};

	static asDeclaredPlainObject = (object: any) => {
		return JSON.parse(JSON.stringify(object));
	};
}
