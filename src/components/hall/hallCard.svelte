<script lang="ts">
	import HallSubCard from './hallSubCard.svelte';
	import dustbin from '../../assets/dustbin.svg';
	import { deleteHall } from './functions/deleteHall';

	let deleteFlag: boolean;

	export let id: number, name: string;
	export let capacity: number;
	export let incharge: string;

	const decideClass = () => {
		if (deleteFlag != undefined && deleteFlag === true) {
			return 'ondelete';
		} else if (deleteFlag != undefined && deleteFlag === false) return 'nodelete';
		console.log('hi');
	};
</script>

<div
	class={`card-outer ${
		deleteFlag != undefined && deleteFlag === true
			? 'ondelete'
			: deleteFlag != undefined && deleteFlag === false
			? 'nodelete'
			: ''
	}`}
>
	<a href={`/halls/${id}`}>
		<HallSubCard {name} {capacity} {incharge} />
	</a>
	<button
		class={`delete ${
			deleteFlag != undefined && deleteFlag === true
				? 'ondelete'
				: deleteFlag != undefined && deleteFlag === false
				? 'nodelete'
				: ''
		}`}
		on:click={() => {
			deleteFlag = deleteFlag === undefined ? true : !deleteFlag;
			// deleteHall(id);
			console.log(deleteFlag);
			console.log(`${id}`);
		}}
	>
		<img src={dustbin} alt="" class="dustbin" />
	</button>
</div>

<style>
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

	.ondelete {
		animation: flipfront 0.5 1 forwards;
	}

	.dustbin {
		width: 20px;
	}

	@keyframes flipfront {
		from {
			transform: rotateX('0deg');
		}
		to {
			transform: rotateX('180deg');
		}
	}
</style>
