<script lang="ts">
	export let field: string, value: string;
</script>

<div class="outer">
	{field}
	<div class="value">{value}</div>
</div>

<style>
	.outer {
		font-size: 2rem;
		margin-top: 0.5em;
	}

	.value {
		font-size: 1.5rem;
		color: #0075fc;
	}
</style>
