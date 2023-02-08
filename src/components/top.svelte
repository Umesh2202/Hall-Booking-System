<script lang="ts">
	import { info } from '../stores/store';
	import { add } from '../stores/add';

	add('very nice');
</script>

<div class="heading">Hall Booking System</div>
{#each $info as single_info}
	<div>{single_info}</div>
{/each}

<style>
	.heading {
		margin-top: 1em;
		font-size: 3rem;
	}
</style>
