<script lang="ts">
	import axios from 'axios';
	import { arrayRemove, deleteDoc } from 'firebase/firestore';
	import { userId, crrBookingInfo, bookings } from '../../stores/store';
	export let startDate: string, id: number, eventName: string, endDate: string;

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
		// console.log('delete');
	};
</script>

<div class="outer">
	<div>{startDate}</div>
	<div>--</div>
	<div>{endDate}</div>
	<div>:</div>
	<div>{eventName}</div>
	<div>
		<button
			class="delete"
			on:click={() => {
				deleteBooking();
			}}>delete</button
		>
	</div>
</div>

<style>
	.outer {
		display: flex;
		flex-direction: row;
		gap: 0.3em;
		position: relative;
	}

	.delete {
		border: 2px solid red;
		/* float: right; */
		position: absolute;
		right: 0;
	}
</style>
