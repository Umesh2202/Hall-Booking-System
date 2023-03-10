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
			userId.set(user['user']['uid']);
			axios.post('http://localhost:5173/api/users', {
				email: $email,
				password: $password
			});
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
	{#if $formText !== ''}
		<Popup {message} />
		<div class="container">
			<div class="login">{$formText}</div>
			<div class="inner">
				<FormInput field="Email" />
				<FormInput field="Password" />
			</div>
			<button on:click={addUser}>NEXT</button>
		</div>
	{:else}
		<InvalidUser />
	{/if}
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
