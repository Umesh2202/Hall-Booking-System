<script lang="ts">
	import Home from './home/+page.svelte';
</script>

<div>
	<Home />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Rowdies:wght@300&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

	:global(*) {
		/* font-family: 'Poppins', sans-serif; */
		font-family: 'Rubik', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	div {
		min-height: 100vh;
		background-color: #0075fc;
		display: grid;
		justify-content: center;
	}
</style>
