<script lang="ts">
	import TopBar from './top-bar.svelte';
	import Week from './week.svelte';
	import ColorCodes from './colorCodes.svelte';
	import { datesList } from '../../stores/store';
	import { load } from './functions/dates';
	import { crr_month, crr_year, crr_date, crr_day } from './functions/currentInfo';

	load();
</script>

<main class="calendar-contain">
	<section class="title-bar">
		<span class="title-bar__year"> {crr_month} {crr_year}</span>
		<div class="title-bar__controls" />
	</section>

	<aside class="calendar__sidebar">
		<div class="sidebar__heading">{crr_day}<br />{crr_month} {crr_date}</div>
		<ColorCodes />
	</aside>

	<section class="calendar__days">
		<TopBar />

		{#each $datesList as dates}
			<Week {dates} />
		{/each}
	</section>
</main>

<style>
	span {
		color: #2d4338;
		font-weight: 100;
		-webkit-font-smoothing: subpixel-antialiased;
		font-size: 1rem;
	}

	.calendar-contain {
		position: relative;
		left: 0;
		right: 0;
		border-radius: 0;
		width: 100%;
		overflow: hidden;
		max-width: 1020px;
		min-width: 450px;
		margin-top: 1em;
		/* margin: 1rem auto; */
		background-color: #f5f7f6;
		color: #000000;
		border: 2px solid #474747;
		border-radius: 1em;
	}
	@media screen and (min-width: 55em) {
		.calendar-contain {
			/* margin: auto; */
			top: 5%;
		}
	}

	.title-bar {
		position: relative;
		width: 100%;
		display: table;
		text-align: right;
		background: #f5f7f6;
		padding: 0.5rem;
		margin-bottom: 0;
	}
	.title-bar:after {
		display: table;
		clear: both;
	}

	.title-bar__year {
		display: block;
		position: relative;
		float: left;
		font-size: 1.5rem;
		line-height: 30px;
		width: 43%;
		padding: 0 0.5rem;
		text-align: left;
		font-weight: 400;
	}
	@media screen and (min-width: 55em) {
		.title-bar__year {
			width: 27%;
		}
	}

	.title-bar .title-bar__controls {
		display: inline-block;
		vertical-align: top;
		position: relative;
		width: auto;
	}
	.title-bar .title-bar__controls:before,
	.title-bar .title-bar__controls:after {
		content: none;
	}

	.calendar__sidebar {
		width: 100%;
		margin: 0 auto;
		float: none;
		background: linear-gradient(120deg, #eff3f3, #e1e7e8);
		padding-bottom: 0.7rem;
	}
	@media screen and (min-width: 55em) {
		.calendar__sidebar {
			position: absolute;
			height: 100%;
			width: 30%;
			float: left;
			margin-bottom: 0;
		}
	}

	.sidebar__heading {
		font-size: 2.2rem;
		font-weight: 500;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-bottom: 3rem;
		margin-top: 1rem;
		color: #0075fc;
	}

	.calendar__days {
		display: flex;
		flex-flow: column wrap;
		align-items: stretch;
		width: 100%;
		float: none;
		min-height: 580px;
		height: 100%;
		font-size: 12px;
		padding: 0.8rem 0 1rem 1rem;
		background: #f5f7f6;
	}

	@media screen and (min-width: 55em) {
		.calendar__days {
			width: 70%;
			float: right;
		}
	}
</style>
