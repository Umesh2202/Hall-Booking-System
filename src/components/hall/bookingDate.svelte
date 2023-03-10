<script lang="ts">
	export let startDate: string;
	export let endDate: string;
	export let eventName: string;
</script>

<div class="outer">
	<div>{startDate}</div>
	<div>--</div>
	<div>{endDate}</div>
	<div>:</div>
	<div>{eventName}</div>
	<div><button class="delete">delete</button></div>
</div>

<style>
	.outer {
		display: flex;
		flex-direction: row;
		gap: 0.3em;
		position: relative;
	}

	.delete {
		border: 2px solid red;
		/* float: right; */
		position: absolute;
		right: 0;
	}
</style>
