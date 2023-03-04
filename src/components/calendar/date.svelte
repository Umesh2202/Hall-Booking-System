<script lang="ts">
	import { crr_date } from './functions/current_info';

	export let inactive: boolean;
	export let date: number;
</script>

<div
	class={`calendar__day ${inactive === true ? 'inactive' : ''} ${
		crr_date === date && inactive === false ? 'current' : ''
	}`}
>
	<span class="calendar__date">{date}</span>
</div>

<style>
	.calendar__day {
		display: flex;
		flex-flow: column wrap;
		justify-content: space-between;
		width: 100%;
		padding: 1.9rem 0.2rem 0.2rem;
	}

	.calendar__date {
		color: #040605;
		font-size: 1.7rem;
		font-weight: 600;
		line-height: 0.7;
	}

	.inactive .calendar__date {
		color: #c6c6c6;
	}

	.current .calendar__date {
		color: #0075fc;
	}

	@media screen and (min-width: 55em) {
		.calendar__date {
			font-size: 2.3rem;
		}
	}
</style>
