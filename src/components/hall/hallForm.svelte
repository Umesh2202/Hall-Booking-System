<script lang="ts">
	import axios from 'axios';
	import { hideForm, bookings, userId, crrBookingInfo } from '../../stores/store';
	import type Date from '../calendar/date.svelte';
	import { convertSecToDate } from '../calendar/functions/bookingInfo';
	import Warning from './warning.svelte';
	import cancel from '../../assets/cancel.svg';

	export let id: number;

	const temp: any = $bookings;

	// When submit is clicked, the form  disappears and the calendar  is updated

	let eventName: string,
		startDate: Date,
		endDate: Date,
		invalidDate: boolean = false, //* true if date is invalid
		invalidEventName: boolean = false, //* true if name is invalid
		emptyName: boolean = true, //* true if name is empty
		emptyDate: boolean = true, //* true if any date is empty
		bookedDate: boolean = false; //* true if any date is between booked dates

	const book = async () => {
		let tempBookingInfo: any = $crrBookingInfo;
		if ((invalidDate || invalidEventName || emptyName || emptyDate) === false) {
			await axios.post(`http://localhost:5174/api/hallsBook`, {
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
				startDate: changeDateFormat(startDate.toString()),
				endDate: changeDateFormat(endDate.toString()),
				userId: $userId
			});

			crrBookingInfo.set(tempBookingInfo);
			bookings.set(temp);
			console.log($bookings);
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

	const changeDateFormat = (orgDate: string) => {
		let ind: number = orgDate.indexOf('-');
		let year: string = orgDate.slice(0, ind);

		let remainString = orgDate.slice(ind + 1, orgDate.length);
		ind = remainString.indexOf('-');
		let month: string = remainString.slice(0, ind);
		if (month[0] == '0') {
			month = month.slice(1, year.length);
		}

		let date = remainString.slice(ind + 1, orgDate.length);
		if (date[0] == '0') {
			date = date.slice(1, year.length);
		}

		const finalDate = month + '/' + date + '/' + year;
		return finalDate;
	};

	const checkBookedDate = () => {
		let tempBookingInfo = $bookings;
		tempBookingInfo = convertSecToDate(tempBookingInfo);

		const inputDates = {
			startDate: changeDateFormat(`${startDate}`),
			endDate: changeDateFormat(`${endDate}`)
		};

		for (let i = 0; i < tempBookingInfo.length; i++) {
			const bookedStDate = tempBookingInfo[i]['startDate'];
			const bookedEdDate = tempBookingInfo[i]['endDate'];

			if (
				(inputDates['startDate'] >= bookedStDate && inputDates['startDate'] <= bookedEdDate) ||
				(inputDates['endDate'] >= bookedStDate && inputDates['endDate'] <= bookedEdDate)
			) {
				bookedDate = true;
				break;
			} else {
				bookedDate = false;
			}
		}
	};

	const removeExtraSpaces = () => {
		//* Removes extra spaces from the end of the event name
		while (eventName[eventName.length - 1] === ' ') {
			eventName = eventName.slice(0, eventName.length - 1);
		}
	};
</script>

<div class={`${$hideForm === false ? 'cover' : ''}`}>
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

		<Warning flag={invalidEventName} label="Enter valid event name" />

		<div class="dates">
			<div class="field">Start Date</div>
			<div class="field">End Date</div>
			<input
				type="date"
				class="date"
				bind:value={startDate}
				on:change={() => {
					checkValidDate();
					checkBookedDate();
				}}
			/>
			<input
				type="date"
				class="date"
				bind:value={endDate}
				on:change={() => {
					checkValidDate();
					checkBookedDate();
				}}
			/>
		</div>

		<Warning flag={invalidDate} label="Enter valid date" />
		<Warning flag={bookedDate} label="Date already booked" />

		<button
			class={`submit ${
				invalidDate || invalidEventName || emptyName || emptyDate || bookedDate === true
					? 'disable'
					: ''
			}`}
			on:click={() => {
				book();
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			}}>Submit</button
		>
		<button
			class="close"
			on:click={() => {
				hideForm.set(!$hideForm);
			}}
		>
			<img src={cancel} alt="" />
		</button>
	</div>
</div>

<style>
	.outer {
		background-color: #f5f5f5;
		width: 40%;
		border-radius: 0.5em;
		padding: 0.7em;
		position: relative;
		border: 5px solid #474747;
		z-index: 2;
	}

	.field {
		color: #474747;
		font-size: 2.5rem;
		font-weight: 600;
		/* text-shadow: 2px 2px 8px #0000004d; */
	}

	.dates {
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
		top: -4%;
		right: -4%;
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
		display: block;
		visibility: hidden;
	}

	.invalidEventName {
		visibility: visible;
	}

	.invalidDate {
		visibility: visible;
	}

	.cover {
		font-size: 4rem;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #47474770;
		display: grid;
		justify-items: center;
		align-items: center;
	}
</style>
