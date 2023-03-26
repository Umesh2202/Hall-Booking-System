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
		<!-- <div class="nav-item"><img src={logo} alt="" width="40px" /></div> -->
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
					class="anchor"
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
					class="anchor"
					disabled={$validUser === true ? true : false}
					on:click={() => formText.set('Admin Login')}>Admin Login</button
				>
			</div>
		</a>
		<div class={`nav-item ${$validUser === false ? 'hidden' : ''}`}>
			<button
				class="anchor"
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
		background-color: var(--white);
		box-shadow: 2px 2px 8px var(--shadow);
		height: var(--nav);
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
		font-size: 1.5rem;
		font-weight: 600;
		color: #000000;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 0.3s;
		position: relative;
	}

	.anchor::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 5px;
		bottom: 0;
		left: 0;
		background-color: var(--blue);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.anchor:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
