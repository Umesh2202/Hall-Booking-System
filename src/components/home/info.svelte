<script>
	import tick from '../../assets/tick.svg';
	import cross from '../../assets/cross.svg';
	import add from '../../assets/add.svg';
	import FeatureCard from './featureCard.svelte';
</script>

<div class="container">
	<div class="feature-head">Supported features that you <br /> can rely safely on</div>
	<div class="features">
		<FeatureCard
			svg={tick}
			feature="Book"
			desc="Book a hall from the given options. Set date and time of the booking "
		/>
		<FeatureCard
			svg={cross}
			feature="Cancel"
			desc="Book a hall from the given options. Set date and time of the booking "
		/>
		<FeatureCard
			svg={add}
			feature="Add"
			desc="Book a hall from the given options. Set date and time of the booking "
		/>
	</div>
</div>

<style>
	.container {
		background-color: var(--white);
		border-radius: 1em;
		display: grid;
		justify-content: center;
		color: var(--grey);
		width: 70vw;
		padding: 4em;
		line-height: 3.3em;
		text-align: center;
		box-shadow: 5px 5px 72px #1e2e3280;
	}

	.feature-head {
		font-size: 3.5rem;
		font-weight: 500;
		margin-bottom: 2em;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
	}
</style>
