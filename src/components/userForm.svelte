<script lang="ts">
	import FormInput from './formInput.svelte';
</script>

<div class="container">
	<div class="inner">
		<FormInput field="First name" />
		<FormInput field="Last name" />
		<FormInput field="Club name" />
		<FormInput field="Email" />
	</div>
	<button class="bg-indigo-600">next</button>
</div>

<style>
	.inner {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1em;
		/* border: 2px solid red; */
	}

	.container {
		background-color: white;
		box-shadow: 2px 3px 5px #999;
		padding: 5em;
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
