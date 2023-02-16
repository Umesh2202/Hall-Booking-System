<script lang="ts">
	import Calendar from '../../../components/calendar.svelte';
	import HallForm from '../../../components/hallForm.svelte';
	import { hideForm } from '../../../stores/store';
	export let data: any;
	data = data['halls'];
</script>

<div class="outer">
	<div class="title">Details</div>
	<div class="inner">
		<div class="name">{data['name']}</div>
		<div class="head">Capacity</div>
		<div class="value">
			{data['capacity']}
		</div>
		<div class="head">Incharge</div>
		<div class="value">
			{data['incharge']}
		</div>
		<div class="head">Contact</div>
		<div class="value">
			{data['contact']}
		</div>
		<!-- <div class="desc"> -->
		<!-- {data['desc']} -->
		<!-- </div> -->
		<div class="head">Location</div>
		<div class="value">
			{data['location']}
		</div>
		<div class="head">Ongoing Event</div>
		<div class="value">
			{data['ongoing']}
		</div>
		<!-- <Calendar /> -->
		<!-- <div class="dates">{data['dates']}</div> -->
		<button
			disabled={!$hideForm}
			class="book"
			on:click={() => {
				hideForm.set(!$hideForm);
			}}>Book</button
		>
	</div>
	<HallForm />
</div>
<div class={`${$hideForm === false ? 'cover' : ''}`} />

<style>
	.outer {
		background-color: #0075fc;
		min-height: 100vh;
		display: grid;
		justify-items: center;
		align-items: center;
	}

	.title {
		font-size: 5rem;
		font-weight: 700;
		color: #f5f5f5;
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
	}

	.inner {
		margin-top: 2em;
		background-color: #f5f5f5;
		width: 60%;
		padding: 4em;
		border-radius: 1em;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
	}
	.name {
		font-size: 7rem;
		color: #0075fc;
		font-weight: 700;
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
	}

	.head {
		font-size: 3rem;
		color: #474747;
		font-weight: 600;
		margin-top: 0.5em;
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
	}

	.value {
		font-size: 2rem;
		color: #0075fc;
	}

	.book {
		/* border: 2px solid red; */
		width: 100%;
		padding: 0.5em;
		border-radius: 0.5em;
		background-color: #0075fc;
		color: #f5f5f5;
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 1em;
	}

	.cover {
		font-size: 4rem;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #47474770;
	}
</style>
