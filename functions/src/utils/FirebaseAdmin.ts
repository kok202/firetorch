import * as admin from 'firebase-admin';
import * as firebaseAccountCredentials from '../serviceAccountCredentials.json';

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount;

// FIXME : More https://console.firebase.google.com/u/0/project/***YOUR_PROJECT***/settings/serviceaccounts/adminsdk
const FirebaseAdmin = !admin.apps.length
	? admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL: 'https://fixme-my-project.firebaseio.com',
			storageBucket: 'fixme-my-project.appspot.com',
	  })
	: admin;
export default FirebaseAdmin;
