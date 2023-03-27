<script lang="ts">
	import add from '../../assets/add.svg';
	import { hideForm, info } from '../../stores/store';

	let capacity: number;

	const setValues = () => {
		info.set({
			hallName: '',
			inchargeName: '',
			desc: '',
			location: '',
			capacity: capacity,
			contact: ''
		});
	};
</script>

<div class="outer">
	<button
		class="addBtn"
		on:click={() => {
			setValues();
			hideForm.set(false);
		}}
	>
		<img class="plus" src={add} alt="" />
	</button>
</div>

<style>
	.outer {
		background-color: var(--white);
		padding: 2em;
		max-height: fit-content;
		border-radius: 1em;
		box-shadow: 2px 2px 8px var(--shadow);
		display: grid;
		justify-content: center;
		align-items: center;
		position: relative;
		transition: all 0.3s;
	}

	.outer:hover {
		box-shadow: 15px 15px 10px var(--shadow);
	}

	.plus {
		transform: scale(1);
	}

	.addBtn {
		transition: all 0.3s;
	}

	.addBtn:hover {
		transform: scale(1.2);
	}
</style>
