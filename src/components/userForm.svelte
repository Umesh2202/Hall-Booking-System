<script lang="ts">
	import FormInput from './formInput.svelte';
	import { auth } from '../routes/api/halls/firebase';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { email, password } from '../stores/store';
	import Popup from './popup.svelte';
	import { popup } from '../stores/store';
	import logo from '../logo.png';
	import axios from 'axios';
	import { goto } from '$app/navigation';

	let message: string = '';
	let login_flag: boolean = false;
	const addUser = async () => {
		goto('/halls');
		try {
			await createUserWithEmailAndPassword(auth, $email, $password);
			message = 'Please wait';
			axios.post('http://localhost:5173/api/users', {
				email: $email,
				password: $password
			});
			login_flag = true;
			email.set('');
			password.set('');
		} catch (err) {
			message = `${err}`;
			popup.set(true);
		}

		popup.set(true);
		setTimeout(() => {
			popup.set(false);
			if (login_flag === true) {
				login_flag = false;
				goto('/');
			}
		}, 3000);
	};
</script>

<Popup {message} />
<div class="form">
	<div class="container">
		<!-- <img src={logo} alt="" /> -->
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
		min-height: 100vh;
	}
	.container {
		background-color: #f5f5f5;
		padding: 5em;
		width: 40%;
		border-radius: 1em;
	}

	.inner {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		gap: 1em;
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
	}

	button:hover {
		background-color: #0075fc;
		color: #f5f5f5;
	}
</style>
