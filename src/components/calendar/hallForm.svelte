<script lang="ts">
	import axios from 'axios';
	import { hideForm } from '../../stores/store';
	import type Date from './date.svelte';

	export let id: number;

	let eventName: string,
		startDate: Date,
		endDate: Date,
		invalidDate: boolean = false,
		invalidEventName: boolean = false;

	const book = () => {
		console.log(id);
		axios.post(`http://localhost:5173/api/hallsBook`, {
			eventName: eventName,
			startDate: startDate,
			endDate: endDate,
			id: id
		});
	};

	const checkValidDate = () => {
		if (startDate > endDate) {
			invalidDate = true;
		} else {
			invalidDate = false;
		}
	};

	const checkValidEventName = () => {
		if (eventName === '') {
			invalidEventName = true;
		} else if (eventName[0] === ' ') {
			invalidEventName = true;
		} else {
			invalidEventName = false;
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
	<button class="submit" on:click={book}>Submit</button>
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
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
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
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
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
