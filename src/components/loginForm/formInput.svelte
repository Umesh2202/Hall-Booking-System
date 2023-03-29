<script lang="ts">
	import { email, password } from '../../stores/store';

	export let field: String;
	let value: string;

	const update = () => {
		field === 'Email' ? email.set(value) : password.set(value);
	};
</script>

<div class="container">
	<label for={`${field}`} class="">{field}</label>
	{#if field === 'Password'}
		<input
			type="password"
			name="pwd"
			id="pwd"
			placeholder={`Type your ${field}`}
			autocomplete={`${field}`}
			class="  sm:text-sm text-input"
			bind:value
			on:change={update}
		/>
	{:else if field === 'Email'}
		<input
			type="email"
			name="email"
			id="email"
			placeholder={`Type your ${field}`}
			autocomplete={`${field}`}
			class="  sm:text-sm text-input"
			bind:value
			on:change={update}
		/>
	{/if}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
	label {
		font-size: 1.5rem;
		font-weight: 400;
		margin-bottom: 0.3em;
		color: #000000;
	}
	.text-input {
		width: 100%;
		border-bottom: 1px solid #000000;
		background-color: var(--white);
		padding: 0.3em;
		font-size: 1.6rem;
		margin-bottom: 0.5em;
	}

	.text-input:focus {
		outline: 3px solid var(--white);
	}
</style>
