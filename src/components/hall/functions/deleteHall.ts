import axios from 'axios';

export const deleteHall = async (id: string) => {
	await axios.delete('https://hall-booking-system.vercel.app/api/halls', {
		data: {
			id: id
		}
	});
};
