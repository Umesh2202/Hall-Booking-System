<script lang="ts">
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import { email, password, validUser, popup, formText, userId } from '../../stores/store';
	import FormInput from './formInput.svelte';
	import Popup from './popup.svelte';
	import { formAction } from './functions/form';
	import InvalidUser from '../invalid/invalidUser.svelte';

	let message: string = '';
	let login_flag: boolean = false;
	const addUser = async () => {
		try {
			message = 'Please wait';
			popup.set(true);
			const user = await formAction($formText, $email, $password);
			if ($formText !== 'Admin Login') {
				userId.set(user['user']['uid']);
				axios.post('http://localhost:5174/api/users', {
					email: $email,
					password: $password
				});
			}
			email.set('');
			password.set('');
			login_flag = true;
		} catch (err) {
			message = `${err}`;
			popup.set(true);
		}

		setTimeout(() => {
			popup.set(false);
			if (login_flag === true) {
				login_flag = false;
				goto('/halls');
				validUser.set(true);
				// goto('/');
			}
		}, 2000);
	};
</script>

<div class="form">
	<Popup {message} />
	<div class="container">
		<div class="login">{$formText}</div>
		<div class="inner">
			<FormInput field="Email" />
			<FormInput field="Password" />
		</div>
		<button on:click={addUser} class="next">Next</button>
		<div>Don't have an account?</div>
		<button class="signup">SignUp</button>
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
	}
	.container {
		background-color: #f5f5f5;
		padding: 3.5em;
		width: 30%;
		border-radius: 1em;
	}

	.login {
		font-size: 3rem;
		font-weight: 600;
		color: #0075fc;
		text-align: center;
	}
	.inner {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		gap: 1em;
		margin-top: 2.5em;
	}

	.next {
		padding: 0.3em;
		width: 100%;
		color: #474744;
		margin-top: 1em;
		font-size: 1.5rem;
		background-color: #ffc400;
		border-radius: 0.3em;
		font-weight: 500;
	}

	.next:hover {
		background-color: #0075fc;
		color: #f5f5f5;
	}

	.signup {
		background-color: black;
		color: #f5f5f5;
		padding: 1em;
		border-radius: 0.5em;
	}
</style>
