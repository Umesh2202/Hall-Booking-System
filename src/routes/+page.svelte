<script lang="ts">
	import UserForm from '../components/userForm.svelte';
	import Top from '../components/top.svelte';
	import Option from '../components/option.svelte';
	import Home from './home/+page.svelte';
</script>

<div>
	<Home />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Rowdies:wght@300&display=swap');

	:global(*) {
		font-family: 'Poppins', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	div {
		min-height: 100vh;
		background-color: #e5e5f7;
		opacity: 0.4;
		background: linear-gradient(135deg, #fcbb0055 25%, transparent 25%) -11px 0/ 22px 22px,
			linear-gradient(225deg, #fcbb00 25%, transparent 25%) -11px 0/ 22px 22px,
			linear-gradient(315deg, #fcbb0055 25%, transparent 25%) 0px 0/ 22px 22px,
			linear-gradient(45deg, #fcbb00 25%, #e5e5f7 25%) 0px 0/ 22px 22px;
	}
</style>
