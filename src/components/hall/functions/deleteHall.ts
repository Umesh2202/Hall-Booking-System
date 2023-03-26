import axios, { type AxiosRequestConfig } from 'axios';

export const deleteHall = async (id) => {
	await axios.delete('http://localhost:5174/api/halls', {
		id: id
	});
};
