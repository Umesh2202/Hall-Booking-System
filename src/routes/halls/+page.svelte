<script lang="ts">
	import { validUser } from '../../stores/store';
	import HallCard from '../../components/hall/hallCard.svelte';
	import InvalidUser from '../../components/invalid/invalidUser.svelte';
	import UserForm from '../../components/loginForm/userForm.svelte';
	import { goto } from '$app/navigation';
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
					<a href={`/halls/${hall['id']}`}>
						<HallCard name={hall['name']} capacity={hall['capacity']} incharge={hall['incharge']} />
					</a>
				{/if}
			{/each}
			<HallCard name="Hall Name" capacity={123} incharge="Someone" />
			<HallCard name="Hall Name" capacity={123} incharge="Someone" />
		</div>
	</div>
{:else}
	<UserForm />
{/if}

<style>
	.heading {
		font-size: 5rem;
		padding-top: 0.5em;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		color: #f5f5f5;
		font-weight: 700;
		/* text-shadow: 2px 2px 8px #0000004d; */
	}

	.sub-heading {
		font-size: 3rem;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		margin-bottom: 1em;
		color: #ffc400;
		/* text-shadow: 2px 2px 8px #0000004d; */
	}
	.outer {
		min-height: 100vh;
		background-color: #0075fc;
	}

	.halls {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
		width: 70%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: auto;
	}
</style>
