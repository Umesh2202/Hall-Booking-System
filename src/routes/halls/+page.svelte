<script lang="ts">
	import { validUser, formText, info } from '../../stores/store';
	import HallCard from '../../components/hall/hallCard.svelte';
	import UserForm from '../../components/loginForm/userForm.svelte';
	import AddHallCard from '../../components/hall/addHallCard.svelte';
	import AddHallForm from '../../components/hall/addHallForm.svelte';
	export let data;

	const halls = data['halls'];
</script>

{#if $validUser === true}
	<div class="outer">
		<div class="heading">Available Halls</div>
		<div class="sub-heading">Click to get more details</div>

		<div class="halls">
			{#each halls as hall}
				{#if hall['name'] !== undefined}
					<HallCard info1={hall} />
				{/if}
			{/each}

			{#if $formText === 'Admin Login'}
				<AddHallCard />
				{#key $info}
					<AddHallForm />
				{/key}
			{/if}
		</div>
	</div>
{:else}
	<UserForm />
{/if}

<style>
	.heading {
		font-size: 5rem;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		color: var(--white);
		font-weight: 700;
	}

	.sub-heading {
		font-size: 3rem;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		margin-bottom: 1em;
		color: var(--yellow);
	}

	.halls {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: center;
		grid-auto-rows: 1fr;
		gap: 2em;
		width: 70%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: auto;
	}
</style>
