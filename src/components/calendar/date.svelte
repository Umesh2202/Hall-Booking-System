<script lang="ts">
	// @ts-nocheck
	import { crr_date } from './functions/currentInfo';
	import { bookings } from '../../stores/store';
	import { convertSecToDate } from './functions/bookingInfo';

	export let inactive: boolean;
	export let date: number;

	let bookedFlag: boolean = false;

	let bookingsData = $bookings;
	bookingsData = convertSecToDate(bookingsData);
	for (let i = 0; i < bookingsData.length; i++) {
		const startDate = bookingsData[i]['startDate'];
		const endDate = bookingsData[i]['endDate'];

		const startDateStInd = startDate.indexOf('/');
		const startDateEdInd = startDate.lastIndexOf('/');
		const startDateNum = Number(startDate.slice(startDateStInd + 1, startDateEdInd));

		const endDateStInd = endDate.indexOf('/');
		const endDateEdInd = endDate.lastIndexOf('/');
		const endDateNum = Number(endDate.slice(endDateStInd + 1, endDateEdInd));

		if (date >= startDateNum && date <= endDateNum) {
			bookedFlag = true;
			break;
		}
	}
</script>

<div
	class={`calendar__day ${inactive === true ? 'inactive' : ''} ${
		crr_date === date && inactive === false ? 'current' : ''
	} ${bookedFlag === true && inactive === false ? 'booked' : ''}`}
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
		color: #000000;
		font-size: 1.7rem;
		font-weight: 500;
		line-height: 0.7;
	}

	.inactive .calendar__date {
		color: #c6c6c6;
	}

	.current .calendar__date {
		position: relative;
	}

	.current .calendar__date::after {
		position: absolute;
		content: '';
		border: 2px solid var(--blue);
		width: 50%;
		bottom: -40%;
		left: 0;
	}

	.booked .calendar__date {
		color: var(--red);
	}
	@media screen and (min-width: 55em) {
		.calendar__date {
			font-size: 2.3rem;
		}
	}
</style>
