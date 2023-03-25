<script lang="ts">
	import { validUser, formText, hideForm } from '../../stores/store';
	import HallCard from '../../components/hall/hallCard.svelte';
	import UserForm from '../../components/loginForm/userForm.svelte';
	import AddHall from '../../components/hall/addHall.svelte';
	import AddHallForm from '../../components/hall/addHallForm.svelte';
	import dustbin from '../../assets/dustbin.svg';
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
					<div class="card-outer">
						<a href={`/halls/${hall['id']}`}>
							<HallCard
								name={hall['name']}
								capacity={hall['capacity']}
								incharge={hall['incharge']}
							/>
						</a>
						<button
							class="delete"
							on:click={() => {
								console.log(`${hall['id']}`);
							}}
						>
							<img src={dustbin} alt="" class="dustbin" />
						</button>
					</div>
				{/if}
			{/each}

			{#if $formText === 'Admin Login'}
				<AddHall />
				<AddHallForm />
			{/if}
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
	}

	.sub-heading {
		font-size: 3rem;
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		margin-bottom: 1em;
		color: #ffc400;
	}
	.outer {
		min-height: 100vh;
		background-color: #0075fc;
	}

	.halls {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 1fr;
		gap: 2em;
		width: 70%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: auto;
	}

	.card-outer {
		position: relative;
	}

	.delete {
		position: absolute;
		top: 5%;
		right: 5%;
		background-color: #ff002b;
		padding: 1em;
		border-radius: 50%;
		z-index: 2;
	}

	.dustbin {
		width: 20px;
	}
</style>
