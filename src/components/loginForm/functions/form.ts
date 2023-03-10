// import { formText } from '../../../stores/store';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../routes/api/users/firebase';

export const formAction = async (formText: string, email: string, password: string) => {
	let user;
	if (formText === 'SignUp') {
		user = await createUserWithEmailAndPassword(auth, email, password);
	} else if (formText === 'User Login') {
		user = await signInWithEmailAndPassword(auth, email, password);
	}

	return user;
};
