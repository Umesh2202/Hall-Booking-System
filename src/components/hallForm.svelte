<script lang="ts">
	import { hideForm } from '../stores/store';
</script>

<div class={`outer ${$hideForm === false ? '' : 'hide'}`}>
	<div class="field">Event Name</div>
	<input type="text" class="name" />
	<div class="dates">
		<div class="field">Start Date</div>
		<div class="field">End Date</div>
		<input type="date" class="date" />
		<input type="date" class="date" />
	</div>
	<button class="submit">Submit</button>
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
		margin-top: 2em;
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
		margin-top: 1.5em;
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
		font-size: 3rem;
		font-weight: 700;
		color: red;
	}

	.hide {
		display: none;
	}
</style>
