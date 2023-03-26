import axios from 'axios';

export const deleteHall = async (id: string) => {
	await axios.delete('http://localhost:5174/api/halls', {
		data: {
			id: id
		}
	});
};
