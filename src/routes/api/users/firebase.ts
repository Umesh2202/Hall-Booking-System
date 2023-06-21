import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	// your config details go here
};

initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore();

const colRef = collection(db, 'Users');

export { auth, colRef };
