import axios from 'axios';

export const load = async () => {
	const res = await axios.get('http://localhost:5173/api/halls');
	const data = res.data;
	return {
		halls: data
	};
};
