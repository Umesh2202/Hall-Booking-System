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
	<input
		type="text"
		name={`field==="Password"?"pwd":${field}`}
		id={`field==="Password"?"pwd":${field}`}
		placeholder={`Type your ${field}`}
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
		/* align-items: center; */
	}
	label {
		font-size: 1.5rem;
		font-weight: 400;
		margin-bottom: 0.3em;
		color: #474747;
		/* text-align: left; */
	}
	.text-input {
		width: 100%;
		/* border: 5px solid #0075fc; */
		border-bottom: 1px solid #474747;
		background-color: #f5f5f5;
		padding: 0.3em;
		font-size: 1.6rem;
		margin-bottom: 0.5em;
		/* border-radius: 0.3em; */
	}
</style>
