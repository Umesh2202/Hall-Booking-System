<script lang="ts">
	export let flag: boolean, label: string;
</script>

<div class={`warning ${flag === true ? 'invalidDate' : ''}`}>{label}</div>

<style>
	.warning {
		font-size: 1.3rem;
		color: #ff0000;
		text-align: center;
		display: block;
		visibility: hidden;
	}

	.invalidDate {
		visibility: visible;
	}
</style>
