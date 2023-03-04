<script lang="ts">
	export let field: string;
	export let color: string;
</script>

<div class="current_date">
	<span class="color" style={`background-color:${color}`} />
	<span class="text">{field}</span>
</div>

<style>
	.current_date {
		position: relative;
	}

	.text {
		font-size: 1.5rem;
	}

	.color {
		content: '';
		position: absolute;
		width: 1.5em;
		aspect-ratio: 1;
		top: 20%;
		left: -15%;
		border-radius: 0.2em;
	}
</style>
