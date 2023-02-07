<script lang="ts">
	import FormInput from './formInput.svelte';
</script>

<div class="container">
	<FormInput field="Username" />
	<FormInput field="Password" />

	<button>next</button>
</div>

<style>
	.container {
		border: 2px solid red;
		background-color: white;
		/* width: 10vw; */
		/* box-shadow: 2px 2px 2px black; */
	}
</style>
