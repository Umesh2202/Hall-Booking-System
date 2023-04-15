import axios from 'axios';

export const deleteHall = async (id: string) => {
	await axios.delete('/api/halls', {
		data: {
			id: id
		}
	});
};
