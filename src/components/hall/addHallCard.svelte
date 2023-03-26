<script lang="ts">
	import add from '../../assets/add.svg';
	import { hideForm } from '../../stores/store';
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
		transition: all 0.3s;
	}

	.outer:hover {
		box-shadow: 15px 15px 10px #0000004d;
	}

	.plus {
		transform: scale(1);
	}

	.addBtn {
		transition: all 0.3s;
	}

	.addBtn:hover {
		/* width: 100%; */
		/* height: 100%; */
		transform: scale(1.2);
	}
</style>
