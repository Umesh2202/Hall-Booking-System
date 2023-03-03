<script lang="ts">
	import TopBarDay from './top-bar-day.svelte';
</script>

<section class="calendar__top-bar">
	<TopBarDay day="Mon" />
	<TopBarDay day="Tue" />
	<TopBarDay day="Wed" />
	<TopBarDay day="Thur" />
	<TopBarDay day="Fri" />
	<TopBarDay day="Sat" />
	<TopBarDay day="Sun" />
</section>

<style>
	.calendar__top-bar {
		display: flex;
		flex: 32px 0 0;
	}
</style>
