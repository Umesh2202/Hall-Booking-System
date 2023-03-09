<script lang="ts">
	import HallCard from '../../components/hall/hallCard.svelte';
	import { validUser } from '../../stores/store';
	export let data;

	const halls = data['halls'];
</script>

<div class="outer">
	{#if $validUser === true}
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
	{:else}
		<div class="invalid">Invalid User <br />Please SignIn or LogIn</div>
	{/if}
</div>

<style>
	.heading {
		font-size: 5rem;
		padding-top: 0.5em;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		color: #f5f5f5;
		font-weight: 700;
		text-shadow: 2px 2px 8px #0000004d;
	}

	.sub-heading {
		font-size: 3rem;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		margin-bottom: 1em;
		color: #ffc400;
		text-shadow: 2px 2px 8px #0000004d;
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

	.invalid {
		margin: auto;
		/* position: absolute; */
		width: max-content;
		/* height: 100vh; */
		color: #f5f5f5;
		font-size: 6rem;
		font-weight: 600;
		padding-top: 1em;
	}
</style>
