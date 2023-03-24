<script lang="ts">
	import axios from 'axios';
	import { hideForm } from '../../stores/store';
	import Warning from './warning.svelte';
	import cancel from '../../assets/cancel.svg';

	// When submit is clicked, the form  disappears and the calendar is updated

	let hallName: string = '',
		inchargeName: string = '',
		desc: string = '',
		location: string = '',
		capacity: Number,
		contact: string = '',
		invalidCapacity: boolean = false, //* true if contact is invalid
		invalidContact: boolean = false, //* true if contact is invalid
		invalidHallName: boolean = false, //* true if text is invalid
		invalidInchargeName: boolean = false, //* true if text is invalid
		invalidDesc: boolean = false, //* true if text is invalid
		invalidLoc: boolean = false, //* true if text is invalid
		notFullContact: boolean = false, //* true if text is invalid
		emptyText: boolean = true; //* true if name is empty

	const checkEmptyText = () => {
		emptyText =
			hallName === '' || inchargeName === '' || desc === '' || location === '' || contact === '';
	};

	const checkValidText = (text: string) => {
		checkEmptyText();

		if (text === '') {
			// emptyText = true;
			return false;
		} else if (text[0] === ' ') {
			// emptyText = false;
			return true;
		} else {
			// emptyText = false;
			return false;
		}
	};

	const checkValidHallName = () => {
		invalidHallName = checkValidText(hallName);
	};

	const checkValidLoc = () => {
		invalidLoc = checkValidText(location);
	};

	const checkValidInchargeName = () => {
		invalidInchargeName = checkValidText(inchargeName);
	};

	const checkValidDesc = () => {
		invalidDesc = checkValidText(desc);
	};

	const checkZero = (text: string) => {
		if (text[0] <= '0') {
			return true;
		} else {
			return false;
		}
	};

	const sliceAlphabets = (text: string) => {
		if (text[text.length - 1].charCodeAt(0) >= 48 && text[text.length - 1].charCodeAt(0) <= 57) {
			return text;
		}
		return text.slice(0, text.length - 1);
	};

	const checkContact = () => {
		contact = sliceAlphabets(contact);
		invalidContact = checkZero(contact) || checkValidText(contact);

		if (contact.length < 10) {
			notFullContact = true;
		} else {
			notFullContact = false;
		}
	};

	const checkValidCapacity = () => {
		invalidCapacity = checkZero(capacity.toString());
	};

	const removeExtraSpaces = () => {
		//* Removes extra spaces from the end of the event name
		while (hallName[hallName.length - 1] === ' ') {
			hallName = hallName.slice(0, hallName.length - 1);
		}
	};

	const editPhoneNum = () => {
		//* Checks if entered phone number has more than 10 digits. Slices it to 10 if more.
		if (contact.length > 10) {
			contact = contact.slice(0, 10);
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
				bind:value={hallName}
				on:input={checkValidHallName}
				on:change={removeExtraSpaces}
			/>

			<input
				type="text"
				class="name"
				placeholder="Enter incharge name"
				bind:value={inchargeName}
				on:input={checkValidInchargeName}
				on:change={removeExtraSpaces}
			/>

			<Warning flag={invalidHallName} label="Enter valid hall name" />
			<Warning flag={invalidInchargeName} label="Enter valid incharge name" />
		</div>

		<div class="field">Description</div>
		<input
			type="text"
			class="name"
			placeholder="Enter hall description"
			bind:value={desc}
			on:input={checkValidDesc}
			on:change={removeExtraSpaces}
		/>

		<Warning flag={invalidDesc} label="Enter valid description" />

		<div class="field">Location</div>
		<input
			type="text"
			class="name"
			placeholder="Enter hall location"
			bind:value={location}
			on:input={checkValidLoc}
			on:change={removeExtraSpaces}
		/>

		<Warning flag={invalidLoc} label="Enter valid hall location" />

		<div class="dates">
			<div class="field">Capacity</div>
			<div class="field">Contact</div>

			<input
				type="number"
				class="date"
				placeholder="Enter hall capacity"
				bind:value={capacity}
				on:input={checkValidCapacity}
			/>

			<input
				type="text"
				class="date"
				placeholder="Enter incharge contact"
				bind:value={contact}
				on:input={() => {
					checkContact();
					editPhoneNum();
				}}
			/>

			<Warning flag={invalidCapacity} label="Enter valid hall capacity" />
			<Warning flag={invalidContact} label="Enter valid contact" />
		</div>

		<button
			class={`submit ${
				(invalidHallName ||
					invalidCapacity ||
					invalidContact ||
					invalidDesc ||
					invalidLoc ||
					notFullContact ||
					emptyText) === true
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
