<script lang="ts">
	import ColorCode from './colorCode.svelte';
</script>

<div class="color_codes">
	<ColorCode field="Current Date" color="#0075fc" />
	<ColorCode field="Booked Dates" color="var(--red)" />
	<ColorCode field="Available Date" color="#000000" />
</div>

<style>
	.color_codes {
		margin-left: 5em;
	}
</style>
