<script lang="ts">
	import Calendar from '../../../components/calendar/calendar.svelte';
	import HallForm from '../../../components/hall/hallForm.svelte';
	import { convertSecToDate } from '../../../components/calendar/functions/bookingInfo';
	import { hideForm, bookings, userId, crrBookingInfo } from '../../../stores/store';
	import BookingDate from '../../../components/hall/bookingDate.svelte';
	export let data: any;

	data = data['halls'];

	const bookingsInfo = data['bookings'];
	bookings.set(bookingsInfo);

	let tempBookingInfo = bookingsInfo.filter((el: { userId: '' }) => {
		return el['userId'] === $userId;
	});

	tempBookingInfo = convertSecToDate(tempBookingInfo);
	crrBookingInfo.set(tempBookingInfo);
</script>

<div class="outer">
	<div class="title">Details</div>
	<div class="inner">
		<div class="name">{data['name']}</div>
		<div class="grid">
			<div class="sub-grid">
				<div class="head">Incharge</div>
				<div class="value">
					{data['incharge']}
				</div>
				<div class="head">Contact</div>
				<div class="value">
					{data['contact']}
				</div>
			</div>
			<div class="cap-grid">
				<div>
					<div class="capacity">
						{data['capacity']}
					</div>
					<div class="cap-head">Capacity</div>
				</div>
			</div>
		</div>
		<div class="head">Description</div>
		<div class="value">
			{data['desc']}
		</div>
		<div class="head">Location</div>
		<div class="value">
			{data['location']}
		</div>
		<div class="head">Your Bookings (mm/dd/yyyy)</div>
		<div class="value">
			{#if $crrBookingInfo.length > 0}
				{#each $crrBookingInfo as info}
					<BookingDate
						startDate={info['startDate']}
						endDate={info['endDate']}
						eventName={info['eventName']}
						id={data['id']}
					/>
				{/each}
			{:else}
				<div>No Bookings</div>
			{/if}
		</div>

		<div class="head">Calendar</div>
		{#key $bookings}
			<Calendar />
		{/key}
		<button
			disabled={!$hideForm}
			class="book"
			on:click={() => {
				hideForm.set(!$hideForm);
			}}>Book</button
		>
	</div>

	<HallForm id={data['id']} />
</div>

<style>
	.outer {
		display: grid;
		justify-items: center;
		align-items: center;
	}

	.title {
		font-size: var(--font2);
		font-weight: 500;
		color: var(--white);
	}

	.inner {
		margin-top: 2em;
		background-color: var(--white);
		width: 60%;
		padding: 4em;
		border-radius: 1em;
		box-shadow: 5px 5px 72px var(--shadow);
	}
	.name {
		font-size: var(--font2);
		color: var(--blue);
		font-weight: 600;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		margin-bottom: 2em;
		margin-top: 3em;
		align-items: flex-start;
	}

	.cap-grid {
		display: grid;
		justify-items: center;
	}

	.cap-head {
		font-size: 3rem;
	}

	.capacity {
		font-size: var(--font1);
		color: var(--blue);
		text-align: center;
	}
	.head {
		font-size: 2rem;
		color: #000000;
		font-weight: 500;
		margin-top: 0.5em;
	}

	.value {
		font-size: 1.5rem;
		color: var(--blue);
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}

	.book {
		width: 100%;
		padding: 0.5em;
		border-radius: 0.3em;
		background-color: var(--blue);
		color: var(--white);
		font-size: 1.5rem;
		font-weight: 500;
		margin-top: 1em;
	}
</style>
