<script lang="ts">
	import { signOut } from 'firebase/auth';
	import { auth } from '../../routes/api/users/firebase';
	import logo from '../../assets/logo.png';
	import { validUser, formText } from '../../stores/store';
	import { goto } from '$app/navigation';

	validUser.set(JSON.parse($validUser));

	const logOut = () => {
		signOut(auth);
		validUser.set(false);
		goto('/');
	};
</script>

<div class="outer">
	<div class="inner">
		<div class="nav-item"><img src={logo} alt="" width="70px" /></div>
		<div class="nav-item">
			<a href="/" class="anchor">Home</a>
		</div>
		<div class="nav-item">
			<a href="/about" class="anchor">About</a>
		</div>
	</div>
	<div class="inner">
		<a href="/userForm">
			<div class={`nav-item ${$validUser === true ? 'hidden' : ''}`}>
				<button
					disabled={$validUser === true ? true : false}
					on:click={() => {
						formText.set('User Login');
					}}>User Login</button
				>
			</div>
		</a>
		<a href="/userForm">
			<div class={`nav-item ${$validUser === true ? 'hidden' : ''}`}>
				<button
					disabled={$validUser === true ? true : false}
					on:click={() => formText.set('Admin Login')}>Admin Login</button
				>
			</div>
		</a>
		<div class={`nav-item ${$validUser === false ? 'hidden' : ''}`}>
			<button
				on:click={() => {
					logOut();
				}}>Logout</button
			>
		</div>
	</div>
</div>

<style>
	.outer {
		display: flex;
		justify-content: center;
		width: 100%;
		background-color: #f5f5f5;
		box-shadow: 2px 2px 8px #0000004d;
	}

	.inner {
		display: flex;
		margin: auto;
		padding: 1em;
	}

	.nav-item {
		font-size: 1.5rem;
		display: flex;
	}

	.hidden {
		visibility: hidden;
		cursor: none;
	}

	.anchor {
		margin: 0 0.5em;
		font-size: 2rem;
		font-weight: 700;
		color: #0075fc;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.3s;
	}

	.anchor:hover {
		color: #474747;
	}

	button {
		background-color: #0075fc;
		padding: 0.5em 1em;
		color: #f5f5f5;
		font-weight: 600;
		margin-right: 1em;
		border-radius: 0.5em;
		display: flex;
		transition: all 0.3s ease-in-out;
	}

	button:hover {
		box-shadow: 5px 5px 10px #0000004d;
	}
</style>
