<script lang="ts">
	import axios from 'axios';
	import { hallEdit, hideForm, info } from '../../stores/store';
	import Warning from './warning.svelte';
	import cancel from '../../assets/cancel.svg';

	// When submit is clicked, the form  disappears and the calendar is updated

	let hallName: string = $info['hallName'],
		inchargeName: string = $info['inchargeName'],
		desc: string = $info['desc'],
		location: string = $info['location'],
		capacity: Number = $info['capacity'],
		contact: string = $info['contact'],
		invalidCapacity: boolean = false, //* true if contact is invalid
		invalidContact: boolean = false, //* true if contact is invalid
		invalidHallName: boolean = false, //* true if text is invalid
		invalidInchargeName: boolean = false, //* true if text is invalid
		invalidDesc: boolean = false, //* true if text is invalid
		invalidLoc: boolean = false, //* true if text is invalid
		notFullContact: boolean = false, //* true if text is invalid
		emptyText: boolean = true; //* true if name is empty

	const addHall = async () => {
		await axios.post(`/api/halls`, {
			name: hallName,
			incharge: inchargeName,
			desc: desc,
			location: location,
			capacity: capacity,
			contact: contact,
			bookings: []
		});
	};

	const editHall = async () => {
		await axios.patch(`/api/halls`, {
			name: hallName,
			incharge: inchargeName,
			desc: desc,
			location: location,
			capacity: capacity,
			contact: contact,
			bookings: [],
			id: $info['id']
		});
	};

	const checkEmptyText = () => {
		emptyText =
			hallName === '' || inchargeName === '' || desc === '' || location === '' || contact === '';
	};

	const checkValidText = (text: string) => {
		checkEmptyText();

		if (text === '') {
			return false;
		} else if (text[0] === ' ') {
			return true;
		} else {
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
		<div class="title">{$info['title']}</div>
		<div class="grid">
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

		<div class="closeflex">
			<div class="field">Description</div>
			<input
				type="text"
				class="name"
				placeholder="Enter hall description"
				bind:value={desc}
				on:input={checkValidDesc}
				on:change={removeExtraSpaces}
			/>
		</div>

		<Warning flag={invalidDesc} label="Enter valid description" />

		<div class="closeflex">
			<div class="field">Location</div>
			<input
				type="text"
				class="name"
				placeholder="Enter hall location"
				bind:value={location}
				on:input={checkValidLoc}
				on:change={removeExtraSpaces}
			/>
		</div>

		<Warning flag={invalidLoc} label="Enter valid hall location" />

		<div class="grid">
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
			disabled={invalidHallName ||
				invalidCapacity ||
				invalidContact ||
				invalidDesc ||
				invalidLoc ||
				notFullContact ||
				emptyText}
			on:click={() => {
				if (!$hallEdit) {
					addHall();
				} else {
					editHall();
				}
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			}}>Submit</button
		>
		<button
			class="close"
			on:click={() => {
				hideForm.set(true);
				hallEdit.set(false);
			}}
		>
			<img src={cancel} alt="" />
		</button>
	</div>
</div>

<style>
	.outer {
		background-color: var(--white);
		width: 50%;
		border-radius: 0.3em;
		padding: 1em;
		position: relative;
		border: 2px solid var(--grey);
		z-index: 10;
	}

	.title {
		font-size: 3rem;
		font-weight: 500;
		text-align: center;
		margin-bottom: 1em;
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

	.field {
		color: #000000;
		font-size: 1.5rem;
		font-weight: 400;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0 1em;
	}

	.name {
		width: 100%;
	}

	input {
		font-size: 1.7rem;
		background-color: var(--white);
		border-bottom: 1px solid var(--grey);
		margin-top: 0.5em;
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
		font-weight: 500;
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
		position: absolute;
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
		z-index: 2;
	}

	.closeflex {
		display: flex;
		flex-direction: column;
	}
</style>
