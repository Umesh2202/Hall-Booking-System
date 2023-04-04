<script lang="ts">
	import axios from 'axios';
	import { hideForm, bookings, userId, crrBookingInfo } from '../../stores/store';
	import { convertSecToDate } from '../calendar/functions/bookingInfo';
	import Warning from './warning.svelte';
	import cancel from '../../assets/cancel.svg';

	export let id: number;

	const temp: any = $bookings;
	let disable_button: boolean = false;
	// When submit is clicked, the form  disappears and the calendar  is updated

	const date = new Date();
	let day = date.getDate() + 1;
	let month = date.getMonth() + 1;
	let year = date.getFullYear();

	let dd = day.toString(),
		mm = month.toString(),
		yyyy = year.toString();

	if (day < 10) {
		dd = '0' + dd;
	}

	if (month < 10) {
		mm = '0' + mm;
	}

	const today = yyyy + '-' + mm + '-' + dd;
	const lastDay = new Date(year, month, 0).getDate().toString();
	const lastDate = yyyy + '-' + mm + '-' + lastDay;

	console.log(today, lastDate);
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
		}
	};

	const checkValidDate = () => {
		let crrSec = new Date().getTime();
		let stSec = new Date(startDate).getTime();
		let edSec = new Date(endDate).getTime();

		if (stSec === undefined || edSec === undefined) {
			emptyDate = true;
		} else {
			emptyDate = false;
			if (stSec > edSec || stSec < crrSec || edSec < crrSec) {
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
		<div class="title">Book this Hall</div>

		<div class="closeflex">
			<div class="field">Event Name</div>
			<input
				type="text"
				class="name"
				placeholder="Enter event name"
				bind:value={eventName}
				on:input={checkValidEventName}
				on:change={removeExtraSpaces}
			/>
		</div>

		<Warning flag={invalidEventName} label="Enter valid event name" />

		<div class="dates">
			<div class="field">Start Date</div>
			<div class="field">End Date</div>
			<input
				type="date"
				class="date"
				min={today}
				max={lastDate}
				bind:value={startDate}
				on:change={() => {
					checkValidDate();
					checkBookedDate();
				}}
			/>
			<input
				type="date"
				class="date"
				min={today}
				max={lastDate}
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
				invalidDate ||
				invalidEventName ||
				emptyName ||
				emptyDate ||
				bookedDate ||
				disable_button === true
					? 'disable'
					: ''
			}`}
			on:click={() => {
				disable_button = true;
				book();
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			}}
			disabled={invalidDate || invalidEventName || emptyName || emptyDate || bookedDate}
			>Submit</button
		>

		<button
			class="close"
			on:click={() => {
				hideForm.set(true);
			}}
		>
			<img src={cancel} alt="" />
		</button>
	</div>
</div>

<style>
	.outer {
		background-color: var(--white);
		width: 35%;
		border-radius: 0.3em;
		padding: 1em;
		position: relative;
		border: 2px solid var(--grey);
		z-index: 2;
	}

	.title {
		font-size: 3rem;
		font-weight: 500;
		text-align: center;
		position: relative;
	}

	.title::after {
		content: '';
		position: absolute;
		width: 100%;
		bottom: -10%;
		left: 0;
		border: 1px solid var(--grey);
	}

	.closeflex {
		display: flex;
		flex-direction: column;
		margin-top: 1em;
	}

	.field {
		color: #000000;
		font-size: 1.5rem;
		font-weight: 500;
	}

	.dates {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0 1em;
	}

	.name {
		width: 100%;
		margin-top: 0.5em;
	}

	.date {
		margin-top: 0.5em;
	}

	input {
		font-size: 1.7rem;
		background-color: var(--white);
		border-bottom: 1px solid var(--grey);
	}

	input:focus {
		outline: 3px solid var(--white);
	}

	.submit {
		width: 100%;
		border-radius: 0.3em;
		font-size: 1.5rem;
		background-color: var(--blue);
		color: var(--white);
		padding: 0.3em;
		font-weight: 600;
	}

	.disable {
		background-color: var(--grey);
		cursor: auto;
	}
	.close {
		position: absolute;
		top: 0%;
		right: 0%;
		width: 60px;
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
		font-size: var(--font3);
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
