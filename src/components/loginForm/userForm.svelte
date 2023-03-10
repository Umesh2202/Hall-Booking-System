<script lang="ts">
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
	import { email, password, validUser, popup, formText } from '../../stores/store';
	import FormInput from './formInput.svelte';
	import { auth } from '../../routes/api/users/firebase';
	import Popup from './popup.svelte';

	let message: string = '';
	let login_flag: boolean = false;
	const addUser = async () => {
		try {
			// const user = await createUserWithEmailAndPassword(auth, $email, $password);
			const user = await signInWithEmailAndPassword(auth, $email, $password);
			console.log(user);
			message = 'Please wait';
			login_flag = true;
			axios.post('http://localhost:5173/api/users', {
				email: $email,
				password: $password
			});
			email.set('');
			password.set('');
			validUser.set(true);
			goto('/halls');
		} catch (err) {
			message = `${err}`;
			popup.set(true);
		}

		popup.set(true);
		setTimeout(() => {
			popup.set(false);
			if (login_flag === true) {
				login_flag = false;
				// goto('/');
			}
		}, 3000);
	};
</script>

<Popup {message} />
<div class="form">
	<div class="container">
		<div class="login">{$formText}</div>
		<div class="inner">
			<FormInput field="Email" />
			<FormInput field="Password" />
		</div>
		<button on:click={addUser}>NEXT</button>
	</div>
</div>

<style>
	.form {
		width: 100%;
		display: grid;
		justify-items: center;
		background-color: #0075fc;
		padding-top: 4em;
		padding-bottom: 4em;
		/* min-height: 100vh; */
	}
	.container {
		background-color: #f5f5f5;
		padding: 5em;
		width: 40%;
		border-radius: 1em;
	}

	.login {
		font-size: 5rem;
		font-weight: 700;
		color: #0075fc;
		text-shadow: 2px 2px 8px #0000004d;
	}
	.inner {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		gap: 1em;
		margin-top: 2.5em;
	}

	button {
		padding: 0.5em;
		width: 100%;
		color: #474744;
		margin-top: 1em;
		font-size: 2rem;
		width: 50%;
		background-color: #ffc400;
		border-radius: 0.3em;
		font-weight: 700;
		margin-top: 2.5em;
	}

	button:hover {
		background-color: #0075fc;
		color: #f5f5f5;
	}
</style>
