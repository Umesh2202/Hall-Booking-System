<script>
	import { formText, validUser } from '../../stores/store';
</script>

<div class="container">
	<div class={`options `}>
		<a href={`${$validUser === true ? '/halls' : '/userForm'}`}>
			<button
				on:click={() => {
					if ($formText === 'SignUp' || $formText === '') {
						formText.set('SignUp');
					}
				}}>{`${$validUser === true ? 'Book a hall' : 'SignUp'}`}</button
			>
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
		color: var(--blue);
		background-color: var(--white);
		font-size: 1.5rem;
		border-radius: 0.3em;
		font-weight: 500;
		width: 100%;
		box-shadow: 2px 2px 8px var(--shadow);
		transition: all 0.3s;
	}

	button:hover {
		box-shadow: 10px 10px 10px var(--shadow);
	}

	.hidden {
		display: none;
	}
</style>
