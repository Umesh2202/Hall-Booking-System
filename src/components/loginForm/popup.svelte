<script lang="ts">
	export let message: string;
	import { popup } from '../../stores/store';
</script>

<div class={`container ${$popup === true ? 'open-popup' : 'close-popup'}`}>
	<div class="message">{message}</div>
	<div class={`progress-bar ${$popup === true ? 'progress' : 'complete'}`} />
</div>

<style>
	.container {
		background-color: #ffc400;
		width: max-content;
		padding: 2em;
		position: absolute;
		top: -50%;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		border-radius: 1em 1em 0 0;
	}

	.message {
		font-size: clamp(0.5rem, 3vw, 1.2rem);
		font-weight: 600;
	}

	.progress-bar {
		position: absolute;
		bottom: 0;
		border: 2px solid black;
		left: 0;
	}

	.progress {
		animation: progress 1s 1s 1 forwards;
	}

	.complete {
		width: 100%;
	}

	.open-popup {
		animation: slidedown 1s 1 forwards;
	}

	.close-popup {
		animation: slideup 1s 1 forwards;
	}

	@keyframes progress {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}

	@keyframes slidedown {
		from {
			top: -50%;
		}
		to {
			top: 5%;
		}
	}

	@keyframes slideup {
		from {
			top: 5%;
		}
		to {
			top: -50%;
		}
	}
</style>
