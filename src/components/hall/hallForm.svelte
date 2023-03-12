<script lang="ts">
	import axios from 'axios';
	import { hideForm, bookings, userId, crrBookingInfo } from '../../stores/store';
	import type Date from '../calendar/date.svelte';
	import { convertSecToDate } from '../calendar/functions/bookingInfo';

	export let id: number;

	const temp: any = $bookings;
	let tempBookingInfo: any = $crrBookingInfo;

	// When submit is clicked, the form  disappears and the calendar  is updated

	let eventName: string,
		startDate: Date,
		endDate: Date,
		invalidDate: boolean = false, //* true if date is invalid
		invalidEventName: boolean = false, //* true if name is invalid
		emptyName: boolean = true, //* true if name is empty
		emptyDate: boolean = true; //* true if any date is empty

	const book = async () => {
		if ((invalidDate || invalidEventName || emptyName || emptyDate) === false) {
			await axios.post(`http://localhost:5173/api/hallsBook`, {
				eventName: eventName,
				startDate: startDate,
				endDate: endDate,
				id: id,
				userId: `${$userId}`,
				purpose: 0
			});
			temp.push({ eventName: eventName, startDate: startDate, endDate: endDate, userId: $userId });
			tempBookingInfo.push({
				eventName: eventName,
				startDate: startDate,
				endDate: endDate,
				userId: $userId
			});
			tempBookingInfo = convertSecToDate(tempBookingInfo);
			crrBookingInfo.set(tempBookingInfo);
			bookings.set(temp);
		}
	};

	const checkValidDate = () => {
		if (startDate === undefined || endDate === undefined) {
			emptyDate = true;
		} else {
			emptyDate = false;
			if (startDate > endDate) {
				invalidDate = true;
			} else {
				invalidDate = false;
			}
		}
	};

	const checkValidEventName = () => {
		if (eventName === '') {
			emptyName = true;
		} else if (eventName[0] === ' ') {
			invalidEventName = true;
			emptyName = false;
		} else {
			invalidEventName = false;
			emptyName = false;
		}
	};

	const removeExtraSpaces = () => {
		//* Removes extra spaces from the end of the event name
		while (eventName[eventName.length - 1] === ' ') {
			eventName = eventName.slice(0, eventName.length - 1);
		}
	};
</script>

<div class={`outer ${$hideForm === false ? '' : 'hide'}`}>
	<div class="field">Event Name</div>
	<input
		type="text"
		class="name"
		placeholder="Enter event name"
		bind:value={eventName}
		on:input={checkValidEventName}
		on:change={removeExtraSpaces}
	/>

	<div class={`warning ${invalidEventName === true ? 'invalidEventName' : ''}`}>
		Enter valid event name
	</div>

	<div class="dates">
		<div class="field">Start Date</div>
		<div class="field">End Date</div>
		<input type="date" class="date" bind:value={startDate} on:change={checkValidDate} />
		<input type="date" class="date" bind:value={endDate} on:change={checkValidDate} />
	</div>
	<div class={`warning ${invalidDate === true ? 'invalidDate' : ''}`}>Enter valid date</div>
	<button
		class={`submit ${
			invalidDate || invalidEventName || emptyName || emptyDate === true ? 'disable' : ''
		}`}
		on:click={() => {
			book();
			setTimeout(() => {
				// window.location.reload();
			}, 2000);
		}}>Submit</button
	>
	<button
		class="close"
		on:click={() => {
			hideForm.set(!$hideForm);
		}}>X</button
	>
</div>

<style>
	.outer {
		background-color: #f5f5f5;
		width: 40%;
		border-radius: 1em;
		padding: 3em;
		position: absolute;
		border: 5px solid #474747;
		z-index: 2;
	}

	.field {
		color: #474747;
		font-size: 2.5rem;
		font-weight: 600;
		text-shadow: 2px 2px 8px #0000004d;
	}

	.dates {
		/* margin-top: 2em; */
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0 1em;
	}

	.name {
		width: 100%;
	}

	input {
		border: 3px solid #0075fc;
		border-radius: 0.5em;
		padding: 0.5em;
		font-size: 1.5rem;
		box-shadow: 2px 2px 8px #0000004d;
	}

	.submit {
		width: 100%;
		border-radius: 0.5em;
		/* margin-top: 1.5em; */
		font-size: 2rem;
		background-color: #0075fc;
		color: #f5f5f5;
		padding: 0.3em;
		font-weight: 600;
	}

	.disable {
		background-color: #474747;
		cursor: auto;
	}
	.close {
		position: absolute;
		top: 0%;
		right: 3%;
		font-size: 2rem;
		font-weight: 700;
		color: #ff0000;
	}

	.hide {
		display: none;
	}

	.warning {
		font-size: 2rem;
		color: #ff0000;
		text-align: center;
		margin-top: 1em;
		display: block;
		visibility: hidden;
	}

	.invalidEventName {
		visibility: visible;
	}

	.invalidDate {
		visibility: visible;
	}
</style>
