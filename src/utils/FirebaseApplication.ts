import * as firebase from 'firebase';

const getFirebaseApplication = () => {
	if (firebase.apps.length) {
		return firebase.app();
	}
	const firebaseApp = firebase.initializeApp({
		// FIXME : init
		apiKey: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
		authDomain: 'fixme-my-project.firebaseapp.com',
		databaseURL: 'https://fixme-my-project.firebaseio.com',
		projectId: 'fixme-my-project',
		storageBucket: 'fixme-my-project.appspot.com',
		messagingSenderId: '00000000000',
		appId: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
	});
	firebaseApp.firestore().settings({
		cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
	});
	firebaseApp.firestore().enablePersistence();
	return firebaseApp;
};

export default getFirebaseApplication;
