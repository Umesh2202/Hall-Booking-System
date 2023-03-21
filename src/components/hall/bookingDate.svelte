<script lang="ts">
	import axios from 'axios';
	import { userId, crrBookingInfo, bookings, deleteDateId } from '../../stores/store';
	export let startDate: string, id: number, eventName: string, endDate: string;

	let deleteFlag = false;
	const deleteBooking = async () => {
		await axios.post(`http://localhost:5173/api/hallsBook`, {
			eventName: eventName,
			startDate: startDate,
			endDate: endDate,
			id: id,
			userId: `${$userId}`,
			purpose: 1,
			crrBookingInfo: $crrBookingInfo,
			bookings: $bookings
		});

		let tempBookingInfo = $crrBookingInfo;
		tempBookingInfo = tempBookingInfo.filter((el: never) => {
			return el['startDate'] !== startDate && el['endDate'] !== endDate;
		});

		crrBookingInfo.set(tempBookingInfo);
	};
</script>

<div class="outer">
	{#if deleteFlag === false}
		<div>{startDate}</div>
		<div>--</div>
		<div>{endDate}</div>
		<div>:</div>
		<div>{eventName}</div>
		<div>
			<button
				class="delete"
				disabled={$deleteDateId === id || $deleteDateId === '' ? false : true}
				on:click={() => {
					deleteFlag = true;
					deleteDateId.set(id);
				}}>Delete</button
			>
		</div>
	{:else}
		<div>Are you sure you want to delete this booking ?</div>
		<div class="options">
			<button
				class="delete accept"
				on:click={() => {
					deleteFlag = false;
					deleteBooking();
					deleteDateId.set('');
				}}>Yes</button
			>
			<button
				class="delete cancel"
				on:click={() => {
					deleteFlag = false;
					deleteDateId.set('');
				}}>No</button
			>
		</div>
	{/if}
</div>

<style>
	.outer {
		display: flex;
		flex-direction: row;
		gap: 0.3em;
		position: relative;
		font-weight: 500;
	}

	.delete {
		position: absolute;
		right: 0;
		font-size: 1.5rem;
		padding: 0.3em 1em;
		border-radius: 0.5em;
		background-color: #ff0000;
		color: #f5f5f5;
		font-weight: 600;
	}

	.options {
		position: absolute;
		right: 0;
	}

	.cancel {
		background-color: #0075fc;
		position: static;
	}

	.accept {
		position: static;
	}
</style>
