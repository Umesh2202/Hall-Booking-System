<script lang="ts">
	import { formText } from '../../stores/store';
</script>

<div class={`noaccount ${$formText === 'SignUp' ? 'hidden' : ''}`}>
	{#if $formText !== 'SignUp'}
		<div>Don't have an account?</div>
		<button
			class="signup"
			on:click={() => {
				formText.set('SignUp');
				window.location.reload();
			}}>SignUp</button
		>
	{:else}
		<div>Already have an account?</div>
		<button
			class="signup"
			on:click={() => {
				formText.set('User Login');
				window.location.reload();
			}}>Login</button
		>
	{/if}
</div>

<style>
	.noaccount {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5em;
	}

	.signup {
		background-color: #000000;
		color: var(--white);
		padding: 1em;
		border-radius: 0.5em;
		margin-top: 1em;
	}
</style>
