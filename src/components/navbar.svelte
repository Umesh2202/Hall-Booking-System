<script lang="ts">
	import logo from '../assets/logo.png';
</script>

<div class="outer">
	<div class="inner">
		<div class="nav-item"><img src={logo} alt="" width="70px" /></div>
		<div class="nav-item">
			<a href="/" class="anchor">Home</a>
		</div>
		<div class="nav-item">
			<a href="/about" class="anchor">About</a>
		</div>
	</div>
	<div class="inner">
		<div class="nav-item"><button>User Login</button></div>
		<div class="nav-item"><button>Admin Login</button></div>
	</div>
</div>

<style>
	.outer {
		display: flex;
		justify-content: center;
		/* margin: auto; */
		width: 100%;
		/* border: 2px solid red; */
		background-color: #f5f5f5;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
	}

	.inner {
		display: flex;
		margin: auto;
		/* border: 2px solid blue; */
		padding: 1em;
	}

	.nav-item {
		font-size: 1.5rem;
		display: flex;
	}

	.anchor {
		padding: 0 1em;
		font-size: 2rem;
		font-weight: 700;
		color: #0075fc;
		text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		background-color: #0075fc;
		padding: 0.5em 1em;
		color: #f5f5f5;
		font-weight: 600;
		margin-right: 1em;
		border-radius: 0.5em;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
		display: flex;
	}
</style>
