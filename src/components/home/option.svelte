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
		padding: 0.8em 0.5em;
		color: #0075fc;
		background-color: #f5f5f5;
		font-size: 1.5rem;
		border-radius: 0.3em;
		font-weight: 500;
		width: 100%;
		box-shadow: 2px 2px 8px #0000004d;
		transition: all 0.3s;
	}

	button:hover {
		box-shadow: 10px 10px 10px #0000004d;
	}

	.hidden {
		display: none;
	}
</style>
