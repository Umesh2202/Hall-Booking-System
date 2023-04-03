<script lang="ts">
	import '../app.css';
	import Navbar from '../components/layout/navbar.svelte';
	import Footer from '../components/layout/footer.svelte';
	import Loading from '../components/layout/loading.svelte';

	let loading: Boolean = true;

	// setTimeout(() => {
	// 	loading = false;
	// }, 1000);
</script>

<Navbar />
<div class="bg">
	<!-- {#if loading} -->
	<!-- <Loading /> -->
	<!-- {:else} -->
	<slot />
	<!-- {/if} -->
</div>
<Footer />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap');

	:root {
		--nav: 8vh;
		--foot: 6vh;
		--min-height: calc(100vh - (var(--nav) + var(--foot)));
		--blue: #0075fc;
		--white: #f5f5f5;
		--shadow: #0000004d;
		--yellow: #ffc400;
		--grey: #474747;
		--red: #ff002b;
		--font1: 7rem;
		--font2: 5rem;
		--font3: 4rem;
		--font4: 3rem;
		--font5: 2rem;
		--font6: 1.3rem;
	}

	:global(*) {
		font-family: 'Readex Pro', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.bg {
		min-height: var(--min-height);
		background-color: var(--blue);
		padding-bottom: 2em;
		padding-top: 3em;
	}
</style>
