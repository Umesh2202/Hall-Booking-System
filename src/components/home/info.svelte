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
		background-color: #f5f5f5;
		border-radius: 1em;
		display: grid;
		justify-content: center;
		color: #474747;
		width: 60vw;
		padding: 3em;
		line-height: 3.3em;
		text-align: center;
		box-shadow: 5px 5px 72px rgba(30, 46, 50, 0.5);
	}

	.feature-head {
		font-size: 3.5rem;
		font-weight: bold;
		margin-bottom: 2em;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2em;
	}
</style>
