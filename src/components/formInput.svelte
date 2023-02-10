<script lang="ts">
	import { email, password } from '../stores/store';

	export let field: String;
	let value: string;

	const update = () => {
		field === 'Email' ? email.set(value) : password.set(value);
	};
</script>

<div class="">
	<label for={`${field}`} class="">{field}</label>
	<input
		type="text"
		name={`field==="Password"?"pwd":${field}`}
		id={`field==="Password"?"pwd":${field}`}
		autocomplete={`${field}`}
		class="mt-1 block w-full  border-gray-300 shadow-sm sm:text-sm text-input"
		bind:value
		on:change={update}
	/>
</div>

<style>
	.text-input {
		width: 20em;
		border: 2px solid black;
		padding: 0.5em;
	}

	div {
		padding: 1em;
	}
</style>
