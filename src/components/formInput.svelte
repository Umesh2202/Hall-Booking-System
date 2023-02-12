<script lang="ts">
	import { email, password } from '../stores/store';

	export let field: String;
	let value: string;

	const update = () => {
		field === 'Email' ? email.set(value) : password.set(value);
	};
</script>

<div class="container">
	<label for={`${field}`} class="">{field}</label>
	<input
		type="text"
		name={`field==="Password"?"pwd":${field}`}
		id={`field==="Password"?"pwd":${field}`}
		autocomplete={`${field}`}
		class="  sm:text-sm text-input"
		bind:value
		on:change={update}
	/>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
	label {
		font-size: 2.5rem;
		font-weight: 600;
	}
	.text-input {
		/* width: 20em; */
		width: 80%;
		border: 5px solid #0075fc;
		padding: 0.5em;
		font-size: 2rem;
		border-radius: 0.3em;
	}
</style>
