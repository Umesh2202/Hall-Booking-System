<div class="center">
	<div class="circle"><div /></div>
	<div class="circle"><div /></div>
	<div class="circle"><div /></div>
	<div class="circle"><div /></div>
	<div class="circle"><div /></div>
	<div class="circle"><div /></div>
	<div class="circle"><div /></div>
</div>

<style>
	.center {
		position: absolute;
		-webkit-animation: spin 7s infinite linear;
		animation: spin 7s infinite linear;
		width: 20px;
		top: 20%;
		left: 50%;
	}

	.circle > div {
		--size: 8px;
		--radius: 20px;
		position: absolute;
		top: 10px;
		left: 10px;
		width: var(--size);
		aspect-ratio: 1;
		/* border-radius: 50%; */
		background-color: var(--white);
		transform: translate(0px, var(--radius));
	}

	.circle {
		/* opacity: 0; */
		-webkit-animation: fade-spin 1.5s ease-in-out infinite;
		animation: fade-spin 1.5s ease-in-out infinite;
		/* -webkit-animation-delay: 0.5s; */
		/* animation-delay: 0.5s; */
	}

	@-webkit-keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	@-webkit-keyframes fade-spin {
		25% {
			/* opacity: 0; */
			transform: rotate(0deg);
		}
		50% {
			/* opacity: 1; */
		}
		75% {
			/* opacity: 1; */
		}
		90% {
			/* opacity: 0; */
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes fade-spin {
		25% {
			/* opacity: 0; */
			transform: rotate(0deg);
		}
		50% {
			/* opacity: 1; */
		}
		75% {
			/* opacity: 1; */
		}
		90% {
			/* opacity: 0; */
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.circle:nth-child(1) {
		-webkit-animation-delay: calc(0.12 * 1s);
		animation-delay: calc(0.12 * 1s);
	}

	.circle:nth-child(2) {
		-webkit-animation-delay: calc(0.12 * 2s);
		animation-delay: calc(0.12 * 2s);
	}

	.circle:nth-child(3) {
		-webkit-animation-delay: calc(0.12 * 3s);
		animation-delay: calc(0.12 * 3s);
	}

	.circle:nth-child(4) {
		-webkit-animation-delay: calc(0.12 * 4s);
		animation-delay: calc(0.12 * 4s);
	}

	.circle:nth-child(5) {
		-webkit-animation-delay: calc(0.12 * 5s);
		animation-delay: calc(0.12 * 5s);
	}

	.circle:nth-child(6) {
		-webkit-animation-delay: calc(0.12 * 6s);
		animation-delay: calc(0.12 * 6s);
	}

	.circle:nth-child(7) {
		-webkit-animation-delay: calc(0.12 * 7s);
		animation-delay: calc(0.12 * 7s);
	}
</style>
