<script lang="ts">
	import FormInput from './formInput.svelte';
	import { auth } from '../routes/api/halls/firebase';
	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { email, password } from '../stores/store';
	import axios from 'axios';

	const addUser = async () => {
		// const cred = await createUserWithEmailAndPassword(auth, $email, $password);
		axios.post('http://localhost:5173/api/users', {
			email: $email,
			password: $password
		});
	};
</script>

<div class="form">
	<div class="container">
		<div class="inner">
			<FormInput field="Email" />
			<FormInput field="Password" />
		</div>
		<button class="bg-indigo-600" on:click={addUser}>next</button>
	</div>
</div>

<style>
	.form {
		width: 100vw;
		display: grid;
		justify-items: center;
		background-color: #3f3f41;
		padding-top: 4em;
		padding-bottom: 4em;
	}
	.container {
		background-color: white;
		padding: 5em;
		width: 40%;
	}

	.inner {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
	}

	button {
		padding: 0.5em;
		width: 100%;
		color: whitesmoke;
		margin-top: 1em;
	}

	button:hover {
		background-color: #6200be;
	}
</style>
