<script lang="ts">
	import Date from './date.svelte';

	export let dates: { date: number; inactive: boolean }[];
</script>

<section class="calendar__week">
	{#each dates as date}
		<Date date={date.date} inactive={date.inactive} />
	{/each}
</section>

<style>
	.calendar__week {
		display: flex;
		flex: 1 1 0;
	}
</style>
