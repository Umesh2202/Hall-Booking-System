<script>
	import { formText, validUser } from '../../stores/store';
</script>

<div class="container">
	<div class={`options ${$validUser === true ? 'hidden' : ''}`}>
		<a href="/userForm">
			<button on:click={() => formText.set('SignUp')}>SignUp</button>
		</a>
	</div>
</div>

<style>
	.container {
		box-sizing: border-box;
		padding-bottom: 4em;
		margin-top: 2em;
	}

	.options {
		display: grid;
		grid-template-columns: repeat(2, 15vw);
		gap: 1.5em;
	}
	button {
		padding: 0.5em;
		color: #0075fc;
		background-color: #f5f5f5;
		font-size: 2rem;
		border-radius: 0.3em;
		font-weight: 500;
		width: 100%;
		box-shadow: 2px 2px 8px #0000004d;
	}

	button:hover {
		background-color: #ffc400;
	}

	.hidden {
		display: none;
	}
</style>
