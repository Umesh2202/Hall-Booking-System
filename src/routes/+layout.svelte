<script>
	import '../app.css';
	import Navbar from '../components/layout/navbar.svelte';
	import Footer from '../components/layout/footer.svelte';
</script>

<Navbar />
<div class="bg">
	<slot />
</div>
<Footer />

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap'); */
	@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap');

	:root {
		--nav: 8vh;
		--foot: 6vh;
		--min-height: calc(100vh - (var(--nav) + var(--foot)));
		--blue: #0075fc;
		--white: #f5f5f5;
		--shadow: #0000004d;
		--yellow: #ffc400;
	}

	:global(*) {
		/* font-family: 'Poppins', sans-serif; */
		font-family: 'Readex Pro', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.bg {
		min-height: var(--min-height);
		background-color: var(--blue);
	}
</style>
