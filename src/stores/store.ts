import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const email = writable('');
export const password = writable('');
export const popup = writable(false);
export const hideForm = writable(true);
export const datesList = writable([]);
export const bookings = writable([]);
export const validUser = writable(browser && (localStorage.getItem('validUser') || false));
export const formText = writable((browser && localStorage.getItem('formText')) || 'SignUp');
export const userId = writable((browser && localStorage.getItem('userId')) || '');
export const crrBookingInfo = writable([]);
export const deleteDateId = writable('');
export const adminInfo = { email: 'roman@gmail.com', password: '123456' };
export const hallDelete = writable(false);
export const editForm = writable(false);

userId.subscribe((value) => {
	browser && localStorage.setItem('userId', value);
});

validUser.subscribe((value) => {
	browser && localStorage.setItem('validUser', value === true ? true : JSON.parse(value));
});

formText.subscribe((value) => {
	browser && localStorage.setItem('formText', value);
});
