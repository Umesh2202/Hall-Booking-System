<script>
	import '../app.css';
	import Navbar from '../components/layout/navbar.svelte';
</script>

<Navbar />
<slot />

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap'); */
	@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap');

	:global(*) {
		/* font-family: 'Poppins', sans-serif; */
		font-family: 'Readex Pro', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
