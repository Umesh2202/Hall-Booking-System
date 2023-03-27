<script lang="ts">
	import HallSubCard from './hallSubCard.svelte';
	import dustbin from '../../assets/dustbin.svg';
	import pen from '../../assets/pen.svg';
	import AddHallForm from './addHallForm.svelte';
	import { deleteHall } from './functions/deleteHall';
	import { hallEdit, hallDelete, hideForm, info } from '../../stores/store';

	let deleteFlag: boolean = false,
		editFlag: boolean = false;

	export let info1;

	let id = info1['id'],
		name: string = info1['name'],
		capacity: number = info1['capacity'],
		incharge: string = info1['incharge'],
		desc: string = info1['desc'],
		location: string = info1['location'],
		contact: string = info1['contact'];

	const setCrrValues = () => {
		info.set({
			hallName: name,
			inchargeName: incharge,
			desc: desc,
			location: location,
			capacity: capacity,
			contact: contact
		});
	};
</script>

<div class={`card-outer `}>
	{#if deleteFlag === false}
		<a href={`/halls/${id}`}>
			<HallSubCard {name} {capacity} {incharge} {deleteFlag} />
		</a>
		<button
			class={`delete dustbin ${$hallDelete === true ? 'disable' : ''}`}
			on:click={() => {
				deleteFlag = true;
				hallDelete.set(true);
			}}
			disabled={$hallDelete}
		>
			<img src={dustbin} alt="" class="icon" />
		</button>

		<button
			class={`delete pen ${$hallEdit === true ? 'disable' : ''}`}
			on:click={() => {
				setCrrValues();
				editFlag = true;
				hallEdit.set(true);
				hideForm.set(false);
			}}
		>
			<img src={pen} alt="" class="icon" />
		</button>
	{:else}
		<div class="outer">
			<div class="title">Are you sure you want to delete this hall?</div>
			<div class="warning">NOTE: All the bookings related to this hall will be deleted</div>
			<div class="buttons">
				<button
					class="decide yes"
					on:click={() => {
						window.location.reload();
						deleteHall(id);
					}}>Yes</button
				>
				<button
					class="decide no"
					on:click={() => {
						deleteFlag = false;
						hallDelete.set(false);
					}}>No</button
				>
			</div>
		</div>
	{/if}
</div>

<style>
	.card-outer {
		position: relative;
	}

	.delete {
		position: absolute;
		top: 25%;
		right: 5%;
		background-color: var(--blue);
		padding: 1em;
		border-radius: 50%;
		z-index: 2;
		transition: all 0.3s;
	}

	.dustbin {
		top: 5%;
		right: 5%;
		background-color: var(--red);
	}

	.delete:hover {
		transform: scale(1.2);
	}

	.disable {
		background-color: var(--grey);
	}

	.icon {
		width: 20px;
	}

	.outer {
		background-color: var(--white);
		padding: 2em;
		max-height: fit-content;
		border-radius: 1em;
		box-shadow: 2px 2px 8px var(--shadow);
		height: 100%;
		display: grid;
		justify-content: space-evenly;
	}
	.title {
		font-size: 2rem;
		line-height: 2.5rem;
	}

	.warning {
		font-size: 1.5rem;
		line-height: 2rem;
		color: var(--red);
		font-weight: 600;
	}

	.buttons {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2em;
	}

	.decide {
		color: var(--white);
		font-weight: 500;
		font-size: 1.5rem;
		border-radius: 0.3rem;
		transition: all 0.3s;
	}

	.decide:hover {
		box-shadow: 5px 5px 10px var(--shadow);
	}

	.yes {
		background-color: var(--red);
	}

	.no {
		background-color: var(--blue);
	}
</style>
