<script lang="ts">
	import FormInput from './formInput.svelte';
	import { firstName } from '../stores/store';
	import { add } from '../stores/add';

	const update = () => {
		add($firstName);
	};
</script>

<div class="form">
	<div class="container">
		<div class="inner">
			<FormInput field="First name" />
			<FormInput field="Last name" />
			<FormInput field="Club name" />
			<FormInput field="Email" />
		</div>
		<button class="bg-indigo-600" on:click={update}>next</button>
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
