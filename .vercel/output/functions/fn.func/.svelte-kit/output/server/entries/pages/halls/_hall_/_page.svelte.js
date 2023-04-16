import { c as create_ssr_component, e as escape, v as validate_component, a as subscribe, n as null_to_empty, d as each, b as add_attribute } from "../../../../chunks/index3.js";
import { c as bookings, d as datesList, u as userId, e as crrBookingInfo, h as hideForm, g as deleteDateId } from "../../../../chunks/store.js";
import { c as convertSecToDate } from "../../../../chunks/bookingInfo.js";
import { W as Warning, c as cancel } from "../../../../chunks/cancel.js";
const topBarDay_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".top-bar__days.svelte-1yyidnn{width:100%;padding:0 5px;color:#2d4338;font-weight:400;-webkit-font-smoothing:subpixel-antialiased;font-size:1.2rem}",
  map: null
};
const Top_bar_day = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { day } = $$props;
  if ($$props.day === void 0 && $$bindings.day && day !== void 0)
    $$bindings.day(day);
  $$result.css.add(css$9);
  return `<span class="top-bar__days svelte-1yyidnn">${escape(day)}</span>`;
});
const topBar_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".calendar__top-bar.svelte-tm8ttv{display:flex;flex:32px 0 0}",
  map: null
};
const Top_bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<section class="calendar__top-bar svelte-tm8ttv">${validate_component(Top_bar_day, "TopBarDay").$$render($$result, { day: "Mon" }, {}, {})}
	${validate_component(Top_bar_day, "TopBarDay").$$render($$result, { day: "Tue" }, {}, {})}
	${validate_component(Top_bar_day, "TopBarDay").$$render($$result, { day: "Wed" }, {}, {})}
	${validate_component(Top_bar_day, "TopBarDay").$$render($$result, { day: "Thur" }, {}, {})}
	${validate_component(Top_bar_day, "TopBarDay").$$render($$result, { day: "Fri" }, {}, {})}
	${validate_component(Top_bar_day, "TopBarDay").$$render($$result, { day: "Sat" }, {}, {})}
	${validate_component(Top_bar_day, "TopBarDay").$$render($$result, { day: "Sun" }, {}, {})}
</section>`;
});
const date = /* @__PURE__ */ new Date();
const month = date.getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[date.getDay()];
const crr_year = date.getFullYear();
const crr_month = months[month];
const crr_date = Number(date.getDate().toLocaleString());
const crr_day = dayName;
const date_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".calendar__day.svelte-6c3nuf.svelte-6c3nuf{display:flex;flex-flow:column wrap;justify-content:space-between;width:100%;padding:1.9rem 0.2rem 0.2rem}.calendar__date.svelte-6c3nuf.svelte-6c3nuf{color:#000000;font-size:1.7rem;font-weight:500;line-height:0.7}.inactive.svelte-6c3nuf .calendar__date.svelte-6c3nuf{color:#c6c6c6}.current.svelte-6c3nuf .calendar__date.svelte-6c3nuf{position:relative}.current.svelte-6c3nuf .calendar__date.svelte-6c3nuf::after{position:absolute;content:'';border:2px solid var(--blue);width:50%;bottom:-40%;left:0}.booked.svelte-6c3nuf .calendar__date.svelte-6c3nuf{color:var(--red)}@media screen and (min-width: 55em){.calendar__date.svelte-6c3nuf.svelte-6c3nuf{font-size:2.3rem}}",
  map: null
};
const Date$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bookings, $$unsubscribe_bookings;
  $$unsubscribe_bookings = subscribe(bookings, (value) => $bookings = value);
  let { inactive } = $$props;
  let { date: date2 } = $$props;
  let bookedFlag = false;
  let bookingsData = $bookings;
  bookingsData = convertSecToDate(bookingsData);
  for (let i = 0; i < bookingsData.length; i++) {
    const startDate = bookingsData[i]["startDate"];
    const endDate = bookingsData[i]["endDate"];
    const startDateStInd = startDate.indexOf("/");
    const startDateEdInd = startDate.lastIndexOf("/");
    const startDateNum = Number(startDate.slice(startDateStInd + 1, startDateEdInd));
    const endDateStInd = endDate.indexOf("/");
    const endDateEdInd = endDate.lastIndexOf("/");
    const endDateNum = Number(endDate.slice(endDateStInd + 1, endDateEdInd));
    if (date2 >= startDateNum && date2 <= endDateNum) {
      bookedFlag = true;
      break;
    }
  }
  if ($$props.inactive === void 0 && $$bindings.inactive && inactive !== void 0)
    $$bindings.inactive(inactive);
  if ($$props.date === void 0 && $$bindings.date && date2 !== void 0)
    $$bindings.date(date2);
  $$result.css.add(css$7);
  $$unsubscribe_bookings();
  return `<div class="${escape(
    null_to_empty(`calendar__day ${inactive === true ? "inactive" : ""} ${crr_date === date2 && inactive === false ? "current" : ""} ${bookedFlag === true && inactive === false ? "booked" : ""}`),
    true
  ) + " svelte-6c3nuf"}"><span class="calendar__date svelte-6c3nuf">${escape(date2)}</span>
</div>`;
});
const week_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".calendar__week.svelte-1s3fbcp{display:flex;flex:1 1 0}",
  map: null
};
const Week = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dates } = $$props;
  if ($$props.dates === void 0 && $$bindings.dates && dates !== void 0)
    $$bindings.dates(dates);
  $$result.css.add(css$6);
  return `<section class="calendar__week svelte-1s3fbcp">${each(dates, (date2) => {
    return `${validate_component(Date$1, "Date").$$render($$result, { date: date2.date, inactive: date2.inactive }, {}, {})}`;
  })}
</section>`;
});
const colorCode_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".current_date.svelte-mgub68{position:relative}.text.svelte-mgub68{font-size:1.5rem}.color.svelte-mgub68{content:'';position:absolute;width:1.5em;aspect-ratio:1;top:20%;left:-15%;border-radius:0.2em}",
  map: null
};
const ColorCode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  let { color } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$5);
  return `<div class="current_date svelte-mgub68"><span class="color svelte-mgub68"${add_attribute("style", `background-color:${color}`, 0)}></span>
	<span class="text svelte-mgub68">${escape(field)}</span>
</div>`;
});
const colorCodes_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".color_codes.svelte-ydzqir{margin-left:5em}",
  map: null
};
const ColorCodes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="color_codes svelte-ydzqir">${validate_component(ColorCode, "ColorCode").$$render($$result, { field: "Current Date", color: "#0075fc" }, {}, {})}
	${validate_component(ColorCode, "ColorCode").$$render($$result, { field: "Booked Dates", color: "#ff002b" }, {}, {})}
	${validate_component(ColorCode, "ColorCode").$$render(
    $$result,
    {
      field: "Available Date",
      color: "#000000"
    },
    {},
    {}
  )}
</div>`;
});
const load = () => {
  const days_obj = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6
  };
  const date2 = /* @__PURE__ */ new Date();
  const last_day = new Date(date2.getFullYear(), date2.getMonth(), 0);
  const last_day_string = last_day.toDateString();
  const last_day_day = last_day_string.slice(0, 3);
  let last_day_num = Number(last_day_string.slice(-7, -5));
  const last_day_ind = days_obj[last_day_day];
  const crr_month_last_date = new Date(date2.getFullYear(), date2.getMonth() + 1, 0);
  const crr_month_string = crr_month_last_date.toDateString();
  const crr_month_last_date_num = Number(crr_month_string.slice(-7, -5));
  const calendar_arr = [];
  let temp = [{}];
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
const calendar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "span.svelte-1a8sdl0.svelte-1a8sdl0{color:#2d4338;font-weight:100;-webkit-font-smoothing:subpixel-antialiased;font-size:1rem}.calendar-contain.svelte-1a8sdl0.svelte-1a8sdl0{position:relative;left:0;right:0;border-radius:0;width:100%;overflow:hidden;max-width:1020px;min-width:450px;margin-top:1em;background-color:#f5f7f6;color:#000000;border:2px solid var(--grey);border-radius:1em}@media screen and (min-width: 55em){.calendar-contain.svelte-1a8sdl0.svelte-1a8sdl0{top:5%}}.title-bar.svelte-1a8sdl0.svelte-1a8sdl0{position:relative;width:100%;display:table;text-align:right;background:#f5f7f6;padding:0.5rem;margin-bottom:0}.title-bar.svelte-1a8sdl0.svelte-1a8sdl0:after{display:table;clear:both}.title-bar__year.svelte-1a8sdl0.svelte-1a8sdl0{display:block;position:relative;float:left;font-size:1.5rem;line-height:30px;width:43%;padding:0 0.5rem;text-align:left;font-weight:400}@media screen and (min-width: 55em){.title-bar__year.svelte-1a8sdl0.svelte-1a8sdl0{width:27%}}.title-bar.svelte-1a8sdl0 .title-bar__controls.svelte-1a8sdl0{display:inline-block;vertical-align:top;position:relative;width:auto}.title-bar.svelte-1a8sdl0 .title-bar__controls.svelte-1a8sdl0:before,.title-bar.svelte-1a8sdl0 .title-bar__controls.svelte-1a8sdl0:after{content:none}.calendar__sidebar.svelte-1a8sdl0.svelte-1a8sdl0{width:100%;margin:0 auto;float:none;background:linear-gradient(120deg, #eff3f3, #e1e7e8);padding-bottom:0.7rem}@media screen and (min-width: 55em){.calendar__sidebar.svelte-1a8sdl0.svelte-1a8sdl0{position:absolute;height:100%;width:30%;float:left;margin-bottom:0}}.sidebar__heading.svelte-1a8sdl0.svelte-1a8sdl0{font-size:2.2rem;font-weight:500;padding-left:1rem;padding-right:1rem;margin-bottom:3rem;margin-top:1rem;color:var(--blue)}.calendar__days.svelte-1a8sdl0.svelte-1a8sdl0{display:flex;flex-flow:column wrap;align-items:stretch;width:100%;float:none;min-height:580px;height:100%;font-size:12px;padding:0.8rem 0 1rem 1rem;background:#f5f7f6}@media screen and (min-width: 55em){.calendar__days.svelte-1a8sdl0.svelte-1a8sdl0{width:70%;float:right}}",
  map: null
};
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $datesList, $$unsubscribe_datesList;
  $$unsubscribe_datesList = subscribe(datesList, (value) => $datesList = value);
  load();
  $$result.css.add(css$3);
  $$unsubscribe_datesList();
  return `<main class="calendar-contain svelte-1a8sdl0"><section class="title-bar svelte-1a8sdl0"><span class="title-bar__year svelte-1a8sdl0">${escape(crr_month)} ${escape(crr_year)}</span>
		<div class="title-bar__controls svelte-1a8sdl0"></div></section>

	<aside class="calendar__sidebar svelte-1a8sdl0"><div class="sidebar__heading svelte-1a8sdl0">${escape(crr_day)}<br>${escape(crr_month)} ${escape(crr_date)}</div>
		${validate_component(ColorCodes, "ColorCodes").$$render($$result, {}, {}, {})}</aside>

	<section class="calendar__days svelte-1a8sdl0">${validate_component(Top_bar, "TopBar").$$render($$result, {}, {}, {})}

		${each($datesList, (dates) => {
    return `${validate_component(Week, "Week").$$render($$result, { dates }, {}, {})}`;
  })}</section>
</main>`;
});
const hallForm_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".outer.svelte-1sdfj29{background-color:var(--white);width:35%;border-radius:0.3em;padding:1em;position:relative;border:2px solid var(--grey);z-index:2}.title.svelte-1sdfj29{font-size:3rem;font-weight:500;text-align:center;position:relative}.title.svelte-1sdfj29::after{content:'';position:absolute;width:100%;bottom:-10%;left:0;border:1px solid var(--grey)}.closeflex.svelte-1sdfj29{display:flex;flex-direction:column;margin-top:1em}.field.svelte-1sdfj29{color:#000000;font-size:1.5rem;font-weight:500}.dates.svelte-1sdfj29{display:grid;grid-template-columns:repeat(2, 1fr);gap:0 1em}.name.svelte-1sdfj29{width:100%;margin-top:0.5em}.date.svelte-1sdfj29{margin-top:0.5em}input.svelte-1sdfj29{font-size:1.7rem;background-color:var(--white);border-bottom:1px solid var(--grey)}input.svelte-1sdfj29:focus{outline:3px solid var(--white)}.submit.svelte-1sdfj29{width:100%;border-radius:0.3em;font-size:1.5rem;background-color:var(--blue);color:var(--white);padding:0.3em;font-weight:600}.disable.svelte-1sdfj29{background-color:var(--grey);cursor:auto}.close.svelte-1sdfj29{position:absolute;top:0%;right:0%;width:60px}.hide.svelte-1sdfj29{display:none}.warning.svelte-1sdfj29{font-size:2rem;color:#ff0000;text-align:center;display:block;visibility:hidden}.invalidEventName.svelte-1sdfj29{visibility:visible}.invalidDate.svelte-1sdfj29{visibility:visible}.cover.svelte-1sdfj29{font-size:var(--font3);position:fixed;width:100%;height:100%;top:0;left:0;background-color:#47474770;display:grid;justify-items:center;align-items:center}",
  map: null
};
const HallForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_bookings;
  let $$unsubscribe_userId;
  let $$unsubscribe_crrBookingInfo;
  let $hideForm, $$unsubscribe_hideForm;
  $$unsubscribe_bookings = subscribe(bookings, (value) => value);
  $$unsubscribe_userId = subscribe(userId, (value) => value);
  $$unsubscribe_crrBookingInfo = subscribe(crrBookingInfo, (value) => value);
  $$unsubscribe_hideForm = subscribe(hideForm, (value) => $hideForm = value);
  let { id } = $$props;
  const date2 = /* @__PURE__ */ new Date();
  let day = date2.getDate() + 1;
  let month2 = date2.getMonth() + 1;
  let year = date2.getFullYear();
  let dd = day.toString(), mm = month2.toString(), yyyy = year.toString();
  if (day < 10) {
    dd = "0" + dd;
  }
  if (month2 < 10) {
    mm = "0" + mm;
  }
  const today = yyyy + "-" + mm + "-" + dd;
  const lastDay = new Date(year, month2, 0).getDate().toString();
  const lastDate = yyyy + "-" + mm + "-" + lastDay;
  let eventName, startDate, endDate, invalidDate = false, invalidEventName = false, bookedDate = false;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$2);
  $$unsubscribe_bookings();
  $$unsubscribe_userId();
  $$unsubscribe_crrBookingInfo();
  $$unsubscribe_hideForm();
  return `<div class="${escape(null_to_empty(`${$hideForm === false ? "cover" : ""}`), true) + " svelte-1sdfj29"}"><div class="${escape(null_to_empty(`outer ${$hideForm === false ? "" : "hide"}`), true) + " svelte-1sdfj29"}"><div class="title svelte-1sdfj29">Book this Hall</div>

		<div class="closeflex svelte-1sdfj29"><div class="field svelte-1sdfj29">Event Name</div>
			<input type="text" class="name svelte-1sdfj29" placeholder="Enter event name"${add_attribute("value", eventName, 0)}></div>

		${validate_component(Warning, "Warning").$$render(
    $$result,
    {
      flag: invalidEventName,
      label: "Enter valid event name"
    },
    {},
    {}
  )}

		<div class="dates svelte-1sdfj29"><div class="field svelte-1sdfj29">Start Date</div>
			<div class="field svelte-1sdfj29">End Date</div>
			<input type="date" class="date svelte-1sdfj29"${add_attribute("min", today, 0)}${add_attribute("max", lastDate, 0)}${add_attribute("value", startDate, 0)}>
			<input type="date" class="date svelte-1sdfj29"${add_attribute("min", today, 0)}${add_attribute("max", lastDate, 0)}${add_attribute("value", endDate, 0)}></div>

		${validate_component(Warning, "Warning").$$render(
    $$result,
    {
      flag: invalidDate,
      label: "Enter valid date"
    },
    {},
    {}
  )}
		${validate_component(Warning, "Warning").$$render(
    $$result,
    {
      flag: bookedDate,
      label: "Date already booked"
    },
    {},
    {}
  )}

		<button class="${escape(
    null_to_empty(`submit ${"disable"}`),
    true
  ) + " svelte-1sdfj29"}" ${"disabled"}>Submit</button>

		<button class="close svelte-1sdfj29"><img${add_attribute("src", cancel, 0)} alt=""></button></div>
</div>`;
});
const bookingDate_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".outer.svelte-1jiffj8{display:flex;flex-direction:row;gap:0.3em;position:relative;font-weight:500;padding-top:1rem}.delete.svelte-1jiffj8{position:absolute;right:0;font-size:1.5rem;padding:0.3em 1em;border-radius:0.5em;background-color:#ff0000;color:var(--white);font-weight:600}.disable.svelte-1jiffj8{background-color:var(--grey)}.options.svelte-1jiffj8{position:absolute;right:0}.cancel.svelte-1jiffj8{background-color:var(--blue);position:static}.accept.svelte-1jiffj8{position:static}",
  map: null
};
const BookingDate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_crrBookingInfo;
  let $$unsubscribe_bookings;
  let $$unsubscribe_userId;
  let $deleteDateId, $$unsubscribe_deleteDateId;
  $$unsubscribe_crrBookingInfo = subscribe(crrBookingInfo, (value) => value);
  $$unsubscribe_bookings = subscribe(bookings, (value) => value);
  $$unsubscribe_userId = subscribe(userId, (value) => value);
  $$unsubscribe_deleteDateId = subscribe(deleteDateId, (value) => $deleteDateId = value);
  let { startDate, id, eventName, endDate } = $$props;
  if ($$props.startDate === void 0 && $$bindings.startDate && startDate !== void 0)
    $$bindings.startDate(startDate);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.eventName === void 0 && $$bindings.eventName && eventName !== void 0)
    $$bindings.eventName(eventName);
  if ($$props.endDate === void 0 && $$bindings.endDate && endDate !== void 0)
    $$bindings.endDate(endDate);
  $$result.css.add(css$1);
  $$unsubscribe_crrBookingInfo();
  $$unsubscribe_bookings();
  $$unsubscribe_userId();
  $$unsubscribe_deleteDateId();
  return `<div class="outer svelte-1jiffj8">${`<div>${escape(startDate)}</div>
		<div>--</div>
		<div>${escape(endDate)}</div>
		<div>:</div>
		<div>${escape(eventName)}</div>
		<div><button class="${escape(
    null_to_empty(`delete ${$deleteDateId === startDate || $deleteDateId === "" ? "" : "disable"}`),
    true
  ) + " svelte-1jiffj8"}" ${($deleteDateId === startDate || $deleteDateId === "" ? false : true) ? "disabled" : ""}>Delete</button></div>`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".outer.svelte-aanqum{display:grid;justify-items:center;align-items:center}.title.svelte-aanqum{font-size:var(--font2);font-weight:500;color:var(--white)}.inner.svelte-aanqum{margin-top:2em;background-color:var(--white);width:60%;padding:4em;border-radius:1em;box-shadow:5px 5px 72px var(--shadow)}.name.svelte-aanqum{font-size:var(--font2);color:var(--blue);font-weight:600}.grid.svelte-aanqum{display:grid;grid-template-columns:repeat(2, 1fr);align-items:center;margin-bottom:2em;margin-top:3em;align-items:flex-start}.cap-grid.svelte-aanqum{display:grid;justify-items:center}.cap-head.svelte-aanqum{font-size:3rem;text-align:center}.capacity.svelte-aanqum{font-size:var(--font1);color:var(--blue);text-align:center}.head.svelte-aanqum{font-size:2rem;color:#000000;font-weight:500;margin-top:0.5em}.value.svelte-aanqum{font-size:1.5rem;color:var(--blue);display:flex;flex-direction:column;gap:0.5em}.book.svelte-aanqum{width:100%;padding:0.5em;border-radius:0.3em;background-color:var(--blue);color:var(--white);font-size:1.5rem;font-weight:500;margin-top:1em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userId, $$unsubscribe_userId;
  let $crrBookingInfo, $$unsubscribe_crrBookingInfo;
  let $$unsubscribe_bookings;
  let $hideForm, $$unsubscribe_hideForm;
  $$unsubscribe_userId = subscribe(userId, (value) => $userId = value);
  $$unsubscribe_crrBookingInfo = subscribe(crrBookingInfo, (value) => $crrBookingInfo = value);
  $$unsubscribe_bookings = subscribe(bookings, (value) => value);
  $$unsubscribe_hideForm = subscribe(hideForm, (value) => $hideForm = value);
  let { data } = $$props;
  data = data["halls"];
  const bookingsInfo = data["bookings"];
  bookings.set(bookingsInfo);
  let tempBookingInfo = bookingsInfo.filter((el) => {
    return el["userId"] === $userId;
  });
  tempBookingInfo = convertSecToDate(tempBookingInfo);
  crrBookingInfo.set(tempBookingInfo);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_userId();
  $$unsubscribe_crrBookingInfo();
  $$unsubscribe_bookings();
  $$unsubscribe_hideForm();
  return `<div class="outer svelte-aanqum">
	<div class="title svelte-aanqum">Details</div>
	<div class="inner svelte-aanqum"><div class="name svelte-aanqum">${escape(data["name"])}</div>
		<div class="grid svelte-aanqum"><div class="sub-grid"><div class="head svelte-aanqum">Incharge</div>
				<div class="value svelte-aanqum">${escape(data["incharge"])}</div>
				<div class="head svelte-aanqum">Contact</div>
				<div class="value svelte-aanqum">${escape(data["contact"])}</div></div>
			<div class="cap-grid svelte-aanqum"><div><div class="capacity svelte-aanqum">${escape(data["capacity"])}</div>
					<div class="cap-head svelte-aanqum">Capacity</div></div></div></div>
		<div class="head svelte-aanqum">Description</div>
		<div class="value svelte-aanqum">${escape(data["desc"])}</div>
		<div class="head svelte-aanqum">Location</div>
		<div class="value svelte-aanqum">${escape(data["location"])}</div>
		<div class="head svelte-aanqum">Your Bookings (mm/dd/yyyy)</div>
		<div class="value svelte-aanqum">${$crrBookingInfo.length > 0 ? `${each($crrBookingInfo, (info) => {
    return `${validate_component(BookingDate, "BookingDate").$$render(
      $$result,
      {
        startDate: info["startDate"],
        endDate: info["endDate"],
        eventName: info["eventName"],
        id: data["id"]
      },
      {},
      {}
    )}`;
  })}` : `<div>No Bookings</div>`}</div>

		<div class="head svelte-aanqum">Calendar</div>
		${validate_component(Calendar, "Calendar").$$render($$result, {}, {}, {})}
		<button ${!$hideForm ? "disabled" : ""} class="book svelte-aanqum">Book</button></div>

	${validate_component(HallForm, "HallForm").$$render($$result, { id: data["id"] }, {}, {})}
</div>`;
});
export {
  Page as default
};
