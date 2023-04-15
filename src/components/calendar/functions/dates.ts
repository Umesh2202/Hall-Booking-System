import { datesList } from '../../../stores/store';

interface dateType {
	[Mon: string]: number;
	Tue: number;
	Wed: number;
	Thu: number;
	Fri: number;
	Sat: number;
	Sun: number;
}

export const load = () => {
	const days_obj: dateType = {
		Mon: 0,
		Tue: 1,
		Wed: 2,
		Thu: 3,
		Fri: 4,
		Sat: 5,
		Sun: 6
	};

	const date = new Date();

	const last_day = new Date(date.getFullYear(), date.getMonth(), 0);
	const last_day_string = last_day.toDateString();
	const last_day_day = last_day_string.slice(0, 3);
	let last_day_num = Number(last_day_string.slice(-7, -5));
	const last_day_ind: number = days_obj[last_day_day];

	const crr_month_last_date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	const crr_month_string = crr_month_last_date.toDateString();
	const crr_month_last_date_num = Number(crr_month_string.slice(-7, -5));

	const calendar_arr: object[] = [];
	let temp: object[] = [{}];
	temp.pop();

	let j = 1;

	for (let i = last_day_ind; i >= 0; i--) {
		temp.push({ date: last_day_num--, inactive: true });
	}
	temp.reverse();

	for (let i = 0; i < 5; i++) {
		for (j; j <= crr_month_last_date_num; j++) {
			if (temp.length === 7) {
				calendar_arr.push(temp);
				temp = [{}];
				temp.pop();
			}
			temp.push({ date: j, inactive: false });
		}
	}

	for (let i = 1; i <= 5; i++) {
		if (temp.length === 7) {
			calendar_arr.push(temp);
			break;
		}
		temp.push({ date: i, inactive: true });
	}

	datesList.set(calendar_arr);
};
