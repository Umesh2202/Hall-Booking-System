<script lang="ts">
	export let day: string;
</script>

<span class="top-bar__days">{day}</span>

<style>
	.top-bar__days {
		width: 100%;
		padding: 0 5px;
		color: #2d4338;
		font-weight: 400;
		-webkit-font-smoothing: subpixel-antialiased;
		font-size: 1.2rem;
	}
</style>
