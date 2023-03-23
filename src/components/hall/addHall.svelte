<script lang="ts">
	import add from '../../assets/add.svg';
	import { hideForm } from '../../stores/store';
	import AddHallForm from './addHallForm.svelte';

	// export let name: string;
	// export let capacity: number;
	// export let incharge: string;
</script>

<div class="outer">
	<button
		class="addBtn"
		on:click={() => {
			hideForm.set(false);
		}}
	>
		<img class="plus" src={add} alt="" />
	</button>
	<!-- <div class="name">{name}</div>
	<div class="cap">
		Capacity
		<div class="value">{capacity}</div>
	</div>
	<div class="in">
		Incharge
		<div class="value">{incharge}</div>
	</div> -->
	<!-- <AddHallForm /> -->
</div>

<style>
	.outer {
		background-color: #f5f5f5;
		padding: 2em;
		max-height: fit-content;
		border-radius: 1em;
		box-shadow: 2px 2px 8px #0000004d;
		display: grid;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.outer:hover {
		background-color: #ffdb65;
	}

	.plus {
		transform: scale(1.3);
	}

	.addBtn {
		transition: all 0.3s;
	}

	.addBtn:hover {
		/* width: 100%; */
		/* height: 100%; */
		transform: scale(1.2);
	}
	.name {
		font-size: 3.5rem;
		font-weight: 600;
		color: #0075fc;
	}

	.cap {
		font-size: 2.5rem;
		margin-top: 0.5em;
	}

	.in {
		font-size: 2rem;
		margin-top: 1em;
	}

	.value {
		font-size: 1.5rem;
		color: #0075fc;
	}
</style>
