import { writable } from 'svelte/store';
import axios from 'axios';

export const info = writable(['']);
export const firstName = writable('');

let data = await axios.get('http://localhost:5173/api/posts');

const res: [{ content: '' }] = data.data;
const infos: string[] = [];

res.forEach((el) => {
	infos.push(el.content);
});

info.set(infos);
