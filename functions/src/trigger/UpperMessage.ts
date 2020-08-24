import * as functions from 'firebase-functions';

// FIXME : Sample code
const upperMessageListener = functions.firestore
	.document('sampleMessage/{documentId}')
	.onCreate((snapshot: any, context) => {
		const original = snapshot.data().original;
		const uppercase = original.toUpperCase();
		return snapshot.ref.set({ uppercase: uppercase });
	});

export default upperMessageListener;
