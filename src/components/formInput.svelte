<script lang="ts">
	export let field: String;
</script>

<div class="">
	<label for="email-address" class="">{field}</label>
	<input
		type="text"
		name="email-address"
		id="email-address"
		autocomplete="email"
		class="mt-1 block w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-input"
	/>
</div>

<style>
	.text-input {
		width: 20em;
		border: 2px solid black;
		padding: 0.5em;
	}

	div {
		/* border: 2px solid red; */
		padding: 1em;
	}
</style>
