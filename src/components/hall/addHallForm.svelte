<script lang="ts">
	import axios from 'axios';
	import { hideForm, bookings, userId, crrBookingInfo } from '../../stores/store';
	import type Date from '../calendar/date.svelte';
	import { convertSecToDate } from '../calendar/functions/bookingInfo';
	import Warning from './warning.svelte';
	import cancel from '../../assets/cancel.svg';

	// export let id: number;

	const temp: any = $bookings;

	// When submit is clicked, the form  disappears and the calendar  is updated

	let eventName: string,
		capacity: Number,
		endDate: Date,
		invalidDate: boolean = false, //* true if date is invalid
		invalidEventName: boolean = false, //* true if name is invalid
		emptyName: boolean = true, //* true if name is empty
		emptyDate: boolean = true, //* true if any date is empty
		bookedDate: boolean = false; //* true if any date is between booked dates

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

<div class={`${$hideForm === false ? 'cover' : ''}`}>
	<div class={`outer ${$hideForm === false ? '' : 'hide'}`}>
		<div class="dates">
			<div class="field">Hall Name</div>
			<div class="field">Incharge Name</div>
			<input
				type="text"
				class="name"
				placeholder="Enter hall name"
				bind:value={eventName}
				on:input={checkValidEventName}
				on:change={removeExtraSpaces}
			/>

			<input
				type="text"
				class="name"
				placeholder="Enter incharge name"
				bind:value={eventName}
				on:input={checkValidEventName}
				on:change={removeExtraSpaces}
			/>

			<Warning flag={invalidEventName} label="Enter valid hall name" />
			<Warning flag={invalidEventName} label="Enter valid hall name" />
		</div>

		<div class="field">Description</div>
		<input
			type="text"
			class="name"
			placeholder="Enter hall description"
			bind:value={eventName}
			on:input={checkValidEventName}
			on:change={removeExtraSpaces}
		/>

		<Warning flag={invalidEventName} label="Enter valid hall name" />

		<div class="field">Location</div>
		<input
			type="text"
			class="name"
			placeholder="Enter hall location"
			bind:value={eventName}
			on:input={checkValidEventName}
			on:change={removeExtraSpaces}
		/>

		<Warning flag={invalidEventName} label="Enter valid hall name" />

		<div class="dates">
			<div class="field">Capacity</div>
			<div class="field">Contact</div>

			<input
				type="number"
				class="date"
				placeholder="Enter hall capacity"
				bind:value={capacity}
				on:input={checkValidEventName}
				on:change={removeExtraSpaces}
			/>

			<input
				type="number"
				class="date"
				placeholder="Enter incharge contact"
				bind:value={capacity}
				on:input={checkValidEventName}
				on:change={removeExtraSpaces}
			/>

			<Warning flag={invalidEventName} label="Enter valid hall name" />
			<Warning flag={invalidEventName} label="Enter valid hall name" />
		</div>

		<button
			class={`submit ${
				invalidDate || invalidEventName || emptyName || emptyDate || bookedDate === true
					? 'disable'
					: ''
			}`}
			on:click={() => {
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
		width: 80%;
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
