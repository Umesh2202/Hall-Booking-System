<div class="container">
	<div class="position">Login As</div>
	<div class="options">
		<button>Admin</button>
		<button>User</button>
	</div>
</div>

<style>
	.container {
		box-sizing: border-box;
		padding-bottom: 4em;
		margin-top: 2em;
	}
	.position {
		color: #f5f5f5;
		font-size: 3rem;
		margin-bottom: 0.5em;
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
		font-weight: bold;
	}
	button:hover {
		background-color: #ffe600;
	}
</style>
