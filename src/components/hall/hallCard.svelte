<script lang="ts">
	import dustbin from '../../assets/dustbin.svg';

	export let name: string;
	export let capacity: number;
	export let incharge: string;
</script>

<div class="outer">
	<div class="name">{name}</div>
	<div class="cap">
		Capacity
		<div class="value">{capacity}</div>
	</div>
	<div class="in">
		Incharge
		<div class="value">{incharge}</div>
	</div>
	<button class="delete">
		<img src={dustbin} alt="" class="dustbin" />
	</button>
</div>

<style>
	.outer {
		background-color: #f5f5f5;
		padding: 2em;
		max-height: fit-content;
		border-radius: 1em;
		box-shadow: 2px 2px 8px #0000004d;
		position: relative;
	}

	.outer:hover {
		background-color: #ffdb65;
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

	.delete {
		position: absolute;
		top: 5%;
		right: 5%;
	}

	.dustbin {
		width: 40px;
	}
</style>
