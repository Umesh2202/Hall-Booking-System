<script lang="ts">
	import { signOut } from 'firebase/auth';
	import { auth } from '../../routes/api/users/firebase';
	import logo from '../../assets/logo.png';
	import { validUser, formText } from '../../stores/store';
	import { goto } from '$app/navigation';
	import { fade, scale } from 'svelte/transition';

	validUser.set(JSON.parse($validUser));

	let hideLoginConf = true; //* true if login confirmation box is hidden
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
		{#if $validUser === false}
			<a href="/userForm" in:fade={{ delay: 1000 }} out:fade={{ duration: 500 }}>
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
			<a href="/userForm" in:fade={{ delay: 1000 }} out:fade={{ duration: 500 }}>
				<div class={`nav-item ${$validUser === true ? 'hidden' : ''}`}>
					<button
						class="anchor"
						disabled={$validUser === true ? true : false}
						on:click={() => formText.set('Admin Login')}>Admin Login</button
					>
				</div>
			</a>
		{:else}
			<div
				class={`nav-item ${$validUser === false ? 'hidden' : ''}`}
				in:fade={{ delay: 1000 }}
				out:fade={{ duration: 0 }}
			>
				<button
					class="anchor"
					on:click={() => {
						hideLoginConf = !hideLoginConf;
					}}>Logout</button
				>
				{#if !hideLoginConf}
					<div class="confirmation" in:scale out:scale>
						<div>Are you sure you want to Logout?</div>
						<div class="conf-buttons">
							<button
								class="decide yes"
								on:click={() => {
									hideLoginConf = true;
									formText.set('');
									logOut();
								}}>Yes</button
							>
							<button
								class="decide no"
								on:click={() => {
									hideLoginConf = true;
								}}>No</button
							>
						</div>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.outer {
		/* display: flex; */
		/* justify-content: center; */
		display: grid;
		grid-template-columns: repeat(2, 1fr);
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
		position: relative;
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

	.confirmation {
		position: absolute;
		top: 100%;
		right: -50%;
		background-color: var(--white);
		padding: 1em;
		width: 200%;
		border-radius: 0.3em;
		font-size: 1.2rem;
		font-weight: 500;
	}

	.conf-buttons {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.5em;
		margin-top: 0.5em;
	}

	.decide {
		padding: 0.5em;
		color: var(--white);
		border-radius: 0.3em;
	}

	.yes {
		background-color: var(--red);
	}

	.no {
		background-color: var(--blue);
	}
</style>
