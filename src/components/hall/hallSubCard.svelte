<script lang="ts">
	import HallCardField from './hallCardField.svelte';

	export let name: string, deleteFlag: boolean;
	export let capacity: number;
	export let incharge: string;
</script>

<div class={`outer ${deleteFlag === true ? 'ondelete' : deleteFlag === false ? 'nodelete' : ''}`}>
	<div class="name">{name}</div>
	<HallCardField field="Capacity" value={`${capacity}`} />
	<HallCardField field="Incharge" value={`${incharge}`} />
</div>

<style>
	.outer {
		background-color: var(--white);
		padding: 2em;
		max-height: fit-content;
		border-radius: 1em;
		box-shadow: 2px 2px 8px var(--shadow);
		transition: all 0.3s;
	}

	.outer:hover {
		box-shadow: 15px 15px 10px var(--shadow);
	}
	.name {
		font-size: 3.5rem;
		font-weight: 600;
		color: var(--blue);
	}
</style>
