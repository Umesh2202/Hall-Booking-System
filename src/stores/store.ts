import { writable } from 'svelte/store';
import axios from 'axios';

export const info = writable(['']);
export const email = writable('');
export const password = writable('');

let data = await axios.get('http://localhost:5173/api/posts');

const res: [{ content: '' }] = data.data;
const infos: string[] = [];
