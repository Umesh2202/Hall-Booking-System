import axios from 'axios';

export const load = async ({ params }) => {
	const res = await axios.get('http://localhost:5173/api/halls');
	let data = res.data;
	data = data.filter((el: { id: '' }) => {
		return el['id'] === params.hall;
	});
	console.log(data[0]);
	return {
		halls: data[0]
	};
};
