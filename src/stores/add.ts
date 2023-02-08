import { info } from './store';

const add = (value: string) => {
	info.update((el) => {
		return [...el, value];
	});
};

export { add };
