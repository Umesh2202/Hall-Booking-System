<script lang="ts">
	import axios from 'axios';
	const get_data = async () => {
		const data = await axios.get('http://localhost:5173/api/posts');
		console.log(data.data[0].content);
	};

	get_data();
</script>

<div class="heading">Hall Booking System</div>

<style>
	.heading {
		margin-top: 1em;
		font-size: 3rem;
	}
</style>
