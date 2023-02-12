<script lang="ts">
	import UserForm from '../components/userForm.svelte';
	import Top from '../components/top.svelte';
	import Option from '../components/option.svelte';
</script>

<div>
	<Top />
	<Option />
	<UserForm />
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Rowdies:wght@300&display=swap');

	* {
		font-family: 'Poppins', sans-serif;
		margin: 0;
		padding: 0;
	}

	div {
		background-color: rgb(248, 248, 248);
		display: grid;
		justify-content: center;
		justify-items: center;
		align-items: flex-start;
		min-height: 100vh;
	}
</style>
