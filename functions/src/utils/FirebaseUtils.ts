import * as admin from 'firebase-admin';
import FirebaseAdmin from './FirebaseAdmin';

class FirebaseUtils {
	static increment = (count: number) => {
		return admin.firestore.FieldValue.increment(count);
	};

	static decrement = (count: number) => {
		return admin.firestore.FieldValue.increment(-count);
	};

	static verifyToken = async (accessToken: string) => {
		return await FirebaseAdmin.auth()
			.verifyIdToken(accessToken)
			.then(async decodedToken => {
				return decodedToken.uid;
			});
	};

	static getRandomShardId = (numShards: number): string => {
		return Math.floor(Math.random() * numShards).toString();
	};
}

export default FirebaseUtils;
