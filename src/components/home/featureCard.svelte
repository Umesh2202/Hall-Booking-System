<script lang="ts">
	export let svg: string;
	export let feature: string;
	export let desc: string;

	// import svg from '../routes/tick.svg';
</script>

<div class="feature">
	<img src={svg} alt="" />
	<div class="title">
		{feature}
	</div>
	<div class="desc">{desc}</div>
</div>

<style>
	.feature {
		padding: 2em;
		border-radius: 1em;
		background-color: #f8f9fa;
		box-shadow: 2px 2px 8px #0000004d;
		display: grid;
		justify-items: center;
	}

	.title {
		font-size: 2.5rem;
		margin-top: 1em;
		font-weight: 700;
	}

	.desc {
		line-height: 1.3em;
		width: 80%;
		margin-top: 3em;
		font-size: 1.3rem;
		font-weight: 500;
	}
</style>
