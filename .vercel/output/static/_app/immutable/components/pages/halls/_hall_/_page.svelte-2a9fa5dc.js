import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, n as attr, b as insert_hydration, E as append_hydration, u as set_data, C as noop, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, G as null_to_empty, F as component_subscribe, g as group_outros, d as check_outros, U as destroy_each, Q as src_url_equal, R as set_input_value, H as listen, L as run_all, e as empty } from "../../../../chunks/index-42505854.js";
import { g as bookings, j as datesList, u as userId, k as crrBookingInfo, h as hideForm, l as deleteDateId } from "../../../../chunks/store-44f3bbc0.js";
import { a as axios } from "../../../../chunks/axios-b3c02076.js";
import { W as Warning, c as cancel } from "../../../../chunks/cancel-cc8606d8.js";
const topBarDay_svelte_svelte_type_style_lang = "";
function create_fragment$9(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*day*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*day*/
        ctx[0]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "top-bar__days svelte-1yyidnn");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*day*/
      1)
        set_data(
          t,
          /*day*/
          ctx2[0]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let { day } = $$props;
  $$self.$$set = ($$props2) => {
    if ("day" in $$props2)
      $$invalidate(0, day = $$props2.day);
  };
  return [day];
}
class Top_bar_day extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$9, safe_not_equal, { day: 0 });
  }
}
const topBar_svelte_svelte_type_style_lang = "";
function create_fragment$8(ctx) {
  let section;
  let topbarday0;
  let t0;
  let topbarday1;
  let t1;
  let topbarday2;
  let t2;
  let topbarday3;
  let t3;
  let topbarday4;
  let t4;
  let topbarday5;
  let t5;
  let topbarday6;
  let current;
  topbarday0 = new Top_bar_day({ props: { day: "Mon" } });
  topbarday1 = new Top_bar_day({ props: { day: "Tue" } });
  topbarday2 = new Top_bar_day({ props: { day: "Wed" } });
  topbarday3 = new Top_bar_day({ props: { day: "Thur" } });
  topbarday4 = new Top_bar_day({ props: { day: "Fri" } });
  topbarday5 = new Top_bar_day({ props: { day: "Sat" } });
  topbarday6 = new Top_bar_day({ props: { day: "Sun" } });
  return {
    c() {
      section = element("section");
      create_component(topbarday0.$$.fragment);
      t0 = space();
      create_component(topbarday1.$$.fragment);
      t1 = space();
      create_component(topbarday2.$$.fragment);
      t2 = space();
      create_component(topbarday3.$$.fragment);
      t3 = space();
      create_component(topbarday4.$$.fragment);
      t4 = space();
      create_component(topbarday5.$$.fragment);
      t5 = space();
      create_component(topbarday6.$$.fragment);
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      claim_component(topbarday0.$$.fragment, section_nodes);
      t0 = claim_space(section_nodes);
      claim_component(topbarday1.$$.fragment, section_nodes);
      t1 = claim_space(section_nodes);
      claim_component(topbarday2.$$.fragment, section_nodes);
      t2 = claim_space(section_nodes);
      claim_component(topbarday3.$$.fragment, section_nodes);
      t3 = claim_space(section_nodes);
      claim_component(topbarday4.$$.fragment, section_nodes);
      t4 = claim_space(section_nodes);
      claim_component(topbarday5.$$.fragment, section_nodes);
      t5 = claim_space(section_nodes);
      claim_component(topbarday6.$$.fragment, section_nodes);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(section, "class", "calendar__top-bar svelte-tm8ttv");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      mount_component(topbarday0, section, null);
      append_hydration(section, t0);
      mount_component(topbarday1, section, null);
      append_hydration(section, t1);
      mount_component(topbarday2, section, null);
      append_hydration(section, t2);
      mount_component(topbarday3, section, null);
      append_hydration(section, t3);
      mount_component(topbarday4, section, null);
      append_hydration(section, t4);
      mount_component(topbarday5, section, null);
      append_hydration(section, t5);
      mount_component(topbarday6, section, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(topbarday0.$$.fragment, local);
      transition_in(topbarday1.$$.fragment, local);
      transition_in(topbarday2.$$.fragment, local);
      transition_in(topbarday3.$$.fragment, local);
      transition_in(topbarday4.$$.fragment, local);
      transition_in(topbarday5.$$.fragment, local);
      transition_in(topbarday6.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(topbarday0.$$.fragment, local);
      transition_out(topbarday1.$$.fragment, local);
      transition_out(topbarday2.$$.fragment, local);
      transition_out(topbarday3.$$.fragment, local);
      transition_out(topbarday4.$$.fragment, local);
      transition_out(topbarday5.$$.fragment, local);
      transition_out(topbarday6.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_component(topbarday0);
      destroy_component(topbarday1);
      destroy_component(topbarday2);
      destroy_component(topbarday3);
      destroy_component(topbarday4);
      destroy_component(topbarday5);
      destroy_component(topbarday6);
    }
  };
}
class Top_bar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$8, safe_not_equal, {});
  }
}
const date = new Date();
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
const convertSecToDate = (data) => {
  const info = [];
  info.pop();
  for (let i = 0; i < data.length; i++) {
    const stSec = data[i].startDate.seconds;
    let date2 = new Date(1970, 0, 1);
    date2.setSeconds(JSON.parse(stSec));
    const startDate = date2.toLocaleDateString();
    const edSec = data[i].endDate.seconds;
    date2 = new Date(1970, 0, 1);
    date2.setSeconds(JSON.parse(edSec));
    const endDate = date2.toLocaleDateString();
    info.push({
      eventName: data[i].eventName,
      startDate,
      endDate,
      userId: data[i].userId
    });
  }
  return info;
};
const date_svelte_svelte_type_style_lang = "";
function create_fragment$7(ctx) {
  let div;
  let span;
  let t;
  let div_class_value;
  return {
    c() {
      div = element("div");
      span = element("span");
      t = text(
        /*date*/
        ctx[1]
      );
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*date*/
        ctx[1]
      );
      span_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "calendar__date svelte-6c3nuf");
      attr(div, "class", div_class_value = null_to_empty(`calendar__day ${/*inactive*/
      ctx[0] === true ? "inactive" : ""} ${crr_date === /*date*/
      ctx[1] && /*inactive*/
      ctx[0] === false ? "current" : ""} ${/*bookedFlag*/
      ctx[2] === true && /*inactive*/
      ctx[0] === false ? "booked" : ""}`) + " svelte-6c3nuf");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span);
      append_hydration(span, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*date*/
      2)
        set_data(
          t,
          /*date*/
          ctx2[1]
        );
      if (dirty & /*inactive, date, bookedFlag*/
      7 && div_class_value !== (div_class_value = null_to_empty(`calendar__day ${/*inactive*/
      ctx2[0] === true ? "inactive" : ""} ${crr_date === /*date*/
      ctx2[1] && /*inactive*/
      ctx2[0] === false ? "current" : ""} ${/*bookedFlag*/
      ctx2[2] === true && /*inactive*/
      ctx2[0] === false ? "booked" : ""}`) + " svelte-6c3nuf")) {
        attr(div, "class", div_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let $bookings;
  component_subscribe($$self, bookings, ($$value) => $$invalidate(4, $bookings = $$value));
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
  $$self.$$set = ($$props2) => {
    if ("inactive" in $$props2)
      $$invalidate(0, inactive = $$props2.inactive);
    if ("date" in $$props2)
      $$invalidate(1, date2 = $$props2.date);
  };
  return [inactive, date2, bookedFlag];
}
let Date$1 = class Date2 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$7, safe_not_equal, { inactive: 0, date: 1 });
  }
};
const week_svelte_svelte_type_style_lang = "";
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block$2(ctx) {
  let date2;
  let current;
  date2 = new Date$1({
    props: {
      date: (
        /*date*/
        ctx[1].date
      ),
      inactive: (
        /*date*/
        ctx[1].inactive
      )
    }
  });
  return {
    c() {
      create_component(date2.$$.fragment);
    },
    l(nodes) {
      claim_component(date2.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(date2, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const date_changes = {};
      if (dirty & /*dates*/
      1)
        date_changes.date = /*date*/
        ctx2[1].date;
      if (dirty & /*dates*/
      1)
        date_changes.inactive = /*date*/
        ctx2[1].inactive;
      date2.$set(date_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(date2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(date2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(date2, detaching);
    }
  };
}
function create_fragment$6(ctx) {
  let section;
  let current;
  let each_value = (
    /*dates*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      section = element("section");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(section_nodes);
      }
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(section, "class", "calendar__week svelte-1s3fbcp");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(section, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*dates*/
      1) {
        each_value = /*dates*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(section, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { dates } = $$props;
  $$self.$$set = ($$props2) => {
    if ("dates" in $$props2)
      $$invalidate(0, dates = $$props2.dates);
  };
  return [dates];
}
class Week extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$6, safe_not_equal, { dates: 0 });
  }
}
const colorCode_svelte_svelte_type_style_lang = "";
function create_fragment$5(ctx) {
  let div;
  let span0;
  let span0_style_value;
  let t0;
  let span1;
  let t1;
  return {
    c() {
      div = element("div");
      span0 = element("span");
      t0 = space();
      span1 = element("span");
      t1 = text(
        /*field*/
        ctx[0]
      );
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      span0 = claim_element(div_nodes, "SPAN", { class: true, style: true });
      children(span0).forEach(detach);
      t0 = claim_space(div_nodes);
      span1 = claim_element(div_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t1 = claim_text(
        span1_nodes,
        /*field*/
        ctx[0]
      );
      span1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "color svelte-mgub68");
      attr(span0, "style", span0_style_value = `background-color:${/*color*/
      ctx[1]}`);
      attr(span1, "class", "text svelte-mgub68");
      attr(div, "class", "current_date svelte-mgub68");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span0);
      append_hydration(div, t0);
      append_hydration(div, span1);
      append_hydration(span1, t1);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*color*/
      2 && span0_style_value !== (span0_style_value = `background-color:${/*color*/
      ctx2[1]}`)) {
        attr(span0, "style", span0_style_value);
      }
      if (dirty & /*field*/
      1)
        set_data(
          t1,
          /*field*/
          ctx2[0]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { field } = $$props;
  let { color } = $$props;
  $$self.$$set = ($$props2) => {
    if ("field" in $$props2)
      $$invalidate(0, field = $$props2.field);
    if ("color" in $$props2)
      $$invalidate(1, color = $$props2.color);
  };
  return [field, color];
}
class ColorCode extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$5, safe_not_equal, { field: 0, color: 1 });
  }
}
const colorCodes_svelte_svelte_type_style_lang = "";
function create_fragment$4(ctx) {
  let div;
  let colorcode0;
  let t0;
  let colorcode1;
  let t1;
  let colorcode2;
  let current;
  colorcode0 = new ColorCode({
    props: { field: "Current Date", color: "#0075fc" }
  });
  colorcode1 = new ColorCode({
    props: { field: "Booked Dates", color: "#ff002b" }
  });
  colorcode2 = new ColorCode({
    props: {
      field: "Available Date",
      color: "#000000"
    }
  });
  return {
    c() {
      div = element("div");
      create_component(colorcode0.$$.fragment);
      t0 = space();
      create_component(colorcode1.$$.fragment);
      t1 = space();
      create_component(colorcode2.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(colorcode0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(colorcode1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(colorcode2.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "color_codes svelte-ydzqir");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(colorcode0, div, null);
      append_hydration(div, t0);
      mount_component(colorcode1, div, null);
      append_hydration(div, t1);
      mount_component(colorcode2, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(colorcode0.$$.fragment, local);
      transition_in(colorcode1.$$.fragment, local);
      transition_in(colorcode2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(colorcode0.$$.fragment, local);
      transition_out(colorcode1.$$.fragment, local);
      transition_out(colorcode2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(colorcode0);
      destroy_component(colorcode1);
      destroy_component(colorcode2);
    }
  };
}
class ColorCodes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$4, safe_not_equal, {});
  }
}
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
  const date2 = new Date();
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
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block$1(ctx) {
  let week;
  let current;
  week = new Week({ props: { dates: (
    /*dates*/
    ctx[1]
  ) } });
  return {
    c() {
      create_component(week.$$.fragment);
    },
    l(nodes) {
      claim_component(week.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(week, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const week_changes = {};
      if (dirty & /*$datesList*/
      1)
        week_changes.dates = /*dates*/
        ctx2[1];
      week.$set(week_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(week.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(week.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(week, detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let main;
  let section0;
  let span;
  let t0;
  let t1;
  let t2;
  let t3;
  let div0;
  let t4;
  let aside;
  let div1;
  let t5;
  let br;
  let t6;
  let t7;
  let t8;
  let t9;
  let colorcodes;
  let t10;
  let section1;
  let topbar;
  let t11;
  let current;
  colorcodes = new ColorCodes({});
  topbar = new Top_bar({});
  let each_value = (
    /*$datesList*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      main = element("main");
      section0 = element("section");
      span = element("span");
      t0 = text(crr_month);
      t1 = space();
      t2 = text(crr_year);
      t3 = space();
      div0 = element("div");
      t4 = space();
      aside = element("aside");
      div1 = element("div");
      t5 = text(crr_day);
      br = element("br");
      t6 = text(crr_month);
      t7 = space();
      t8 = text(crr_date);
      t9 = space();
      create_component(colorcodes.$$.fragment);
      t10 = space();
      section1 = element("section");
      create_component(topbar.$$.fragment);
      t11 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      section0 = claim_element(main_nodes, "SECTION", { class: true });
      var section0_nodes = children(section0);
      span = claim_element(section0_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, crr_month);
      t1 = claim_space(span_nodes);
      t2 = claim_text(span_nodes, crr_year);
      span_nodes.forEach(detach);
      t3 = claim_space(section0_nodes);
      div0 = claim_element(section0_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      section0_nodes.forEach(detach);
      t4 = claim_space(main_nodes);
      aside = claim_element(main_nodes, "ASIDE", { class: true });
      var aside_nodes = children(aside);
      div1 = claim_element(aside_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t5 = claim_text(div1_nodes, crr_day);
      br = claim_element(div1_nodes, "BR", {});
      t6 = claim_text(div1_nodes, crr_month);
      t7 = claim_space(div1_nodes);
      t8 = claim_text(div1_nodes, crr_date);
      div1_nodes.forEach(detach);
      t9 = claim_space(aside_nodes);
      claim_component(colorcodes.$$.fragment, aside_nodes);
      aside_nodes.forEach(detach);
      t10 = claim_space(main_nodes);
      section1 = claim_element(main_nodes, "SECTION", { class: true });
      var section1_nodes = children(section1);
      claim_component(topbar.$$.fragment, section1_nodes);
      t11 = claim_space(section1_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(section1_nodes);
      }
      section1_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "title-bar__year svelte-1a8sdl0");
      attr(div0, "class", "title-bar__controls svelte-1a8sdl0");
      attr(section0, "class", "title-bar svelte-1a8sdl0");
      attr(div1, "class", "sidebar__heading svelte-1a8sdl0");
      attr(aside, "class", "calendar__sidebar svelte-1a8sdl0");
      attr(section1, "class", "calendar__days svelte-1a8sdl0");
      attr(main, "class", "calendar-contain svelte-1a8sdl0");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      append_hydration(main, section0);
      append_hydration(section0, span);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(span, t2);
      append_hydration(section0, t3);
      append_hydration(section0, div0);
      append_hydration(main, t4);
      append_hydration(main, aside);
      append_hydration(aside, div1);
      append_hydration(div1, t5);
      append_hydration(div1, br);
      append_hydration(div1, t6);
      append_hydration(div1, t7);
      append_hydration(div1, t8);
      append_hydration(aside, t9);
      mount_component(colorcodes, aside, null);
      append_hydration(main, t10);
      append_hydration(main, section1);
      mount_component(topbar, section1, null);
      append_hydration(section1, t11);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(section1, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$datesList*/
      1) {
        each_value = /*$datesList*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(section1, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(colorcodes.$$.fragment, local);
      transition_in(topbar.$$.fragment, local);
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(colorcodes.$$.fragment, local);
      transition_out(topbar.$$.fragment, local);
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      destroy_component(colorcodes);
      destroy_component(topbar);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $datesList;
  component_subscribe($$self, datesList, ($$value) => $$invalidate(0, $datesList = $$value));
  load();
  return [$datesList];
}
class Calendar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
  }
}
const hallForm_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div7;
  let div6;
  let div0;
  let t0;
  let t1;
  let div2;
  let div1;
  let t2;
  let t3;
  let input0;
  let t4;
  let warning0;
  let t5;
  let div5;
  let div3;
  let t6;
  let t7;
  let div4;
  let t8;
  let t9;
  let input1;
  let t10;
  let input2;
  let t11;
  let warning1;
  let t12;
  let warning2;
  let t13;
  let button0;
  let t14;
  let button0_class_value;
  let button0_disabled_value;
  let t15;
  let button1;
  let img;
  let img_src_value;
  let div6_class_value;
  let div7_class_value;
  let current;
  let mounted;
  let dispose;
  warning0 = new Warning({
    props: {
      flag: (
        /*invalidEventName*/
        ctx[5]
      ),
      label: "Enter valid event name"
    }
  });
  warning1 = new Warning({
    props: {
      flag: (
        /*invalidDate*/
        ctx[4]
      ),
      label: "Enter valid date"
    }
  });
  warning2 = new Warning({
    props: {
      flag: (
        /*bookedDate*/
        ctx[8]
      ),
      label: "Date already booked"
    }
  });
  return {
    c() {
      div7 = element("div");
      div6 = element("div");
      div0 = element("div");
      t0 = text("Book this Hall");
      t1 = space();
      div2 = element("div");
      div1 = element("div");
      t2 = text("Event Name");
      t3 = space();
      input0 = element("input");
      t4 = space();
      create_component(warning0.$$.fragment);
      t5 = space();
      div5 = element("div");
      div3 = element("div");
      t6 = text("Start Date");
      t7 = space();
      div4 = element("div");
      t8 = text("End Date");
      t9 = space();
      input1 = element("input");
      t10 = space();
      input2 = element("input");
      t11 = space();
      create_component(warning1.$$.fragment);
      t12 = space();
      create_component(warning2.$$.fragment);
      t13 = space();
      button0 = element("button");
      t14 = text("Submit");
      t15 = space();
      button1 = element("button");
      img = element("img");
      this.h();
    },
    l(nodes) {
      div7 = claim_element(nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div0 = claim_element(div6_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Book this Hall");
      div0_nodes.forEach(detach);
      t1 = claim_space(div6_nodes);
      div2 = claim_element(div6_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "Event Name");
      div1_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      input0 = claim_element(div2_nodes, "INPUT", {
        type: true,
        class: true,
        placeholder: true
      });
      div2_nodes.forEach(detach);
      t4 = claim_space(div6_nodes);
      claim_component(warning0.$$.fragment, div6_nodes);
      t5 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div3 = claim_element(div5_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t6 = claim_text(div3_nodes, "Start Date");
      div3_nodes.forEach(detach);
      t7 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t8 = claim_text(div4_nodes, "End Date");
      div4_nodes.forEach(detach);
      t9 = claim_space(div5_nodes);
      input1 = claim_element(div5_nodes, "INPUT", {
        type: true,
        class: true,
        min: true,
        max: true
      });
      t10 = claim_space(div5_nodes);
      input2 = claim_element(div5_nodes, "INPUT", {
        type: true,
        class: true,
        min: true,
        max: true
      });
      div5_nodes.forEach(detach);
      t11 = claim_space(div6_nodes);
      claim_component(warning1.$$.fragment, div6_nodes);
      t12 = claim_space(div6_nodes);
      claim_component(warning2.$$.fragment, div6_nodes);
      t13 = claim_space(div6_nodes);
      button0 = claim_element(div6_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t14 = claim_text(button0_nodes, "Submit");
      button0_nodes.forEach(detach);
      t15 = claim_space(div6_nodes);
      button1 = claim_element(div6_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      img = claim_element(button1_nodes, "IMG", { src: true, alt: true });
      button1_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "title svelte-1sdfj29");
      attr(div1, "class", "field svelte-1sdfj29");
      attr(input0, "type", "text");
      attr(input0, "class", "name svelte-1sdfj29");
      attr(input0, "placeholder", "Enter event name");
      attr(div2, "class", "closeflex svelte-1sdfj29");
      attr(div3, "class", "field svelte-1sdfj29");
      attr(div4, "class", "field svelte-1sdfj29");
      attr(input1, "type", "date");
      attr(input1, "class", "date svelte-1sdfj29");
      attr(
        input1,
        "min",
        /*today*/
        ctx[10]
      );
      attr(
        input1,
        "max",
        /*lastDate*/
        ctx[11]
      );
      attr(input2, "type", "date");
      attr(input2, "class", "date svelte-1sdfj29");
      attr(
        input2,
        "min",
        /*today*/
        ctx[10]
      );
      attr(
        input2,
        "max",
        /*lastDate*/
        ctx[11]
      );
      attr(div5, "class", "dates svelte-1sdfj29");
      attr(button0, "class", button0_class_value = null_to_empty(`submit ${/*invalidDate*/
      ctx[4] || /*invalidEventName*/
      ctx[5] || /*emptyName*/
      ctx[6] || /*emptyDate*/
      ctx[7] || /*bookedDate*/
      ctx[8] || /*disable_button*/
      ctx[0] === true ? "disable" : ""}`) + " svelte-1sdfj29");
      button0.disabled = button0_disabled_value = /*invalidDate*/
      ctx[4] || /*invalidEventName*/
      ctx[5] || /*emptyName*/
      ctx[6] || /*emptyDate*/
      ctx[7] || /*bookedDate*/
      ctx[8];
      if (!src_url_equal(img.src, img_src_value = cancel))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(button1, "class", "close svelte-1sdfj29");
      attr(div6, "class", div6_class_value = null_to_empty(`outer ${/*$hideForm*/
      ctx[9] === false ? "" : "hide"}`) + " svelte-1sdfj29");
      attr(div7, "class", div7_class_value = null_to_empty(`${/*$hideForm*/
      ctx[9] === false ? "cover" : ""}`) + " svelte-1sdfj29");
    },
    m(target, anchor) {
      insert_hydration(target, div7, anchor);
      append_hydration(div7, div6);
      append_hydration(div6, div0);
      append_hydration(div0, t0);
      append_hydration(div6, t1);
      append_hydration(div6, div2);
      append_hydration(div2, div1);
      append_hydration(div1, t2);
      append_hydration(div2, t3);
      append_hydration(div2, input0);
      set_input_value(
        input0,
        /*eventName*/
        ctx[1]
      );
      append_hydration(div6, t4);
      mount_component(warning0, div6, null);
      append_hydration(div6, t5);
      append_hydration(div6, div5);
      append_hydration(div5, div3);
      append_hydration(div3, t6);
      append_hydration(div5, t7);
      append_hydration(div5, div4);
      append_hydration(div4, t8);
      append_hydration(div5, t9);
      append_hydration(div5, input1);
      set_input_value(
        input1,
        /*startDate*/
        ctx[2]
      );
      append_hydration(div5, t10);
      append_hydration(div5, input2);
      set_input_value(
        input2,
        /*endDate*/
        ctx[3]
      );
      append_hydration(div6, t11);
      mount_component(warning1, div6, null);
      append_hydration(div6, t12);
      mount_component(warning2, div6, null);
      append_hydration(div6, t13);
      append_hydration(div6, button0);
      append_hydration(button0, t14);
      append_hydration(div6, t15);
      append_hydration(div6, button1);
      append_hydration(button1, img);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[18]
          ),
          listen(
            input0,
            "input",
            /*checkValidEventName*/
            ctx[14]
          ),
          listen(
            input0,
            "change",
            /*removeExtraSpaces*/
            ctx[16]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[19]
          ),
          listen(
            input1,
            "change",
            /*change_handler*/
            ctx[20]
          ),
          listen(
            input2,
            "input",
            /*input2_input_handler*/
            ctx[21]
          ),
          listen(
            input2,
            "change",
            /*change_handler_1*/
            ctx[22]
          ),
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[23]
          ),
          listen(
            button1,
            "click",
            /*click_handler_1*/
            ctx[24]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & /*eventName*/
      2 && input0.value !== /*eventName*/
      ctx2[1]) {
        set_input_value(
          input0,
          /*eventName*/
          ctx2[1]
        );
      }
      const warning0_changes = {};
      if (dirty[0] & /*invalidEventName*/
      32)
        warning0_changes.flag = /*invalidEventName*/
        ctx2[5];
      warning0.$set(warning0_changes);
      if (dirty[0] & /*startDate*/
      4) {
        set_input_value(
          input1,
          /*startDate*/
          ctx2[2]
        );
      }
      if (dirty[0] & /*endDate*/
      8) {
        set_input_value(
          input2,
          /*endDate*/
          ctx2[3]
        );
      }
      const warning1_changes = {};
      if (dirty[0] & /*invalidDate*/
      16)
        warning1_changes.flag = /*invalidDate*/
        ctx2[4];
      warning1.$set(warning1_changes);
      const warning2_changes = {};
      if (dirty[0] & /*bookedDate*/
      256)
        warning2_changes.flag = /*bookedDate*/
        ctx2[8];
      warning2.$set(warning2_changes);
      if (!current || dirty[0] & /*invalidDate, invalidEventName, emptyName, emptyDate, bookedDate, disable_button*/
      497 && button0_class_value !== (button0_class_value = null_to_empty(`submit ${/*invalidDate*/
      ctx2[4] || /*invalidEventName*/
      ctx2[5] || /*emptyName*/
      ctx2[6] || /*emptyDate*/
      ctx2[7] || /*bookedDate*/
      ctx2[8] || /*disable_button*/
      ctx2[0] === true ? "disable" : ""}`) + " svelte-1sdfj29")) {
        attr(button0, "class", button0_class_value);
      }
      if (!current || dirty[0] & /*invalidDate, invalidEventName, emptyName, emptyDate, bookedDate*/
      496 && button0_disabled_value !== (button0_disabled_value = /*invalidDate*/
      ctx2[4] || /*invalidEventName*/
      ctx2[5] || /*emptyName*/
      ctx2[6] || /*emptyDate*/
      ctx2[7] || /*bookedDate*/
      ctx2[8])) {
        button0.disabled = button0_disabled_value;
      }
      if (!current || dirty[0] & /*$hideForm*/
      512 && div6_class_value !== (div6_class_value = null_to_empty(`outer ${/*$hideForm*/
      ctx2[9] === false ? "" : "hide"}`) + " svelte-1sdfj29")) {
        attr(div6, "class", div6_class_value);
      }
      if (!current || dirty[0] & /*$hideForm*/
      512 && div7_class_value !== (div7_class_value = null_to_empty(`${/*$hideForm*/
      ctx2[9] === false ? "cover" : ""}`) + " svelte-1sdfj29")) {
        attr(div7, "class", div7_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(warning0.$$.fragment, local);
      transition_in(warning1.$$.fragment, local);
      transition_in(warning2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(warning0.$$.fragment, local);
      transition_out(warning1.$$.fragment, local);
      transition_out(warning2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div7);
      destroy_component(warning0);
      destroy_component(warning1);
      destroy_component(warning2);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $bookings;
  let $userId;
  let $crrBookingInfo;
  let $hideForm;
  component_subscribe($$self, bookings, ($$value) => $$invalidate(27, $bookings = $$value));
  component_subscribe($$self, userId, ($$value) => $$invalidate(28, $userId = $$value));
  component_subscribe($$self, crrBookingInfo, ($$value) => $$invalidate(29, $crrBookingInfo = $$value));
  component_subscribe($$self, hideForm, ($$value) => $$invalidate(9, $hideForm = $$value));
  let { id } = $$props;
  const temp = $bookings;
  let disable_button = false;
  const date2 = new Date();
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
  let eventName, startDate, endDate, invalidDate = false, invalidEventName = false, emptyName = true, emptyDate = true, bookedDate = false;
  const book = async () => {
    let tempBookingInfo = $crrBookingInfo;
    if ((invalidDate || invalidEventName || emptyName || emptyDate) === false) {
      await axios.post(`/api/hallsBook`, {
        eventName,
        startDate,
        endDate,
        id,
        userId: `${$userId}`,
        purpose: 0
      });
      temp.push({
        eventName,
        startDate,
        endDate,
        userId: $userId
      });
      tempBookingInfo.push({
        eventName,
        startDate: changeDateFormat(startDate.toString()),
        endDate: changeDateFormat(endDate.toString()),
        userId: $userId
      });
      crrBookingInfo.set(tempBookingInfo);
      bookings.set(temp);
    }
  };
  const checkValidDate = () => {
    let crrSec = new Date().getTime();
    let stSec = new Date(startDate).getTime();
    let edSec = new Date(endDate).getTime();
    if (stSec === void 0 || edSec === void 0) {
      $$invalidate(7, emptyDate = true);
    } else {
      $$invalidate(7, emptyDate = false);
      if (stSec > edSec || stSec < crrSec || edSec < crrSec) {
        $$invalidate(4, invalidDate = true);
      } else {
        $$invalidate(4, invalidDate = false);
      }
    }
  };
  const checkValidEventName = () => {
    if (eventName === "") {
      $$invalidate(6, emptyName = true);
    } else if (eventName[0] === " ") {
      $$invalidate(5, invalidEventName = true);
      $$invalidate(6, emptyName = false);
    } else {
      $$invalidate(5, invalidEventName = false);
      $$invalidate(6, emptyName = false);
    }
  };
  const changeDateFormat = (orgDate) => {
    let ind = orgDate.indexOf("-");
    let year2 = orgDate.slice(0, ind);
    let remainString = orgDate.slice(ind + 1, orgDate.length);
    ind = remainString.indexOf("-");
    let month22 = remainString.slice(0, ind);
    if (month22[0] == "0") {
      month22 = month22.slice(1, year2.length);
    }
    let date22 = remainString.slice(ind + 1, orgDate.length);
    if (date22[0] == "0") {
      date22 = date22.slice(1, year2.length);
    }
    const finalDate = month22 + "/" + date22 + "/" + year2;
    return finalDate;
  };
  const checkBookedDate = () => {
    let tempBookingInfo = $bookings;
    tempBookingInfo = convertSecToDate(tempBookingInfo);
    const inputDates = {
      startDate: changeDateFormat(`${startDate}`),
      endDate: changeDateFormat(`${endDate}`)
    };
    for (let i = 0; i < tempBookingInfo.length; i++) {
      const bookedStDate = tempBookingInfo[i]["startDate"];
      const bookedEdDate = tempBookingInfo[i]["endDate"];
      if (inputDates["startDate"] >= bookedStDate && inputDates["startDate"] <= bookedEdDate || inputDates["endDate"] >= bookedStDate && inputDates["endDate"] <= bookedEdDate) {
        $$invalidate(8, bookedDate = true);
        break;
      } else {
        $$invalidate(8, bookedDate = false);
      }
    }
  };
  const removeExtraSpaces = () => {
    while (eventName[eventName.length - 1] === " ") {
      $$invalidate(1, eventName = eventName.slice(0, eventName.length - 1));
    }
  };
  function input0_input_handler() {
    eventName = this.value;
    $$invalidate(1, eventName);
  }
  function input1_input_handler() {
    startDate = this.value;
    $$invalidate(2, startDate);
  }
  const change_handler = () => {
    checkValidDate();
    checkBookedDate();
  };
  function input2_input_handler() {
    endDate = this.value;
    $$invalidate(3, endDate);
  }
  const change_handler_1 = () => {
    checkValidDate();
    checkBookedDate();
  };
  const click_handler = () => {
    $$invalidate(0, disable_button = true);
    book();
    setTimeout(
      () => {
        window.location.reload();
      },
      1e3
    );
  };
  const click_handler_1 = () => {
    hideForm.set(true);
  };
  $$self.$$set = ($$props2) => {
    if ("id" in $$props2)
      $$invalidate(17, id = $$props2.id);
  };
  return [
    disable_button,
    eventName,
    startDate,
    endDate,
    invalidDate,
    invalidEventName,
    emptyName,
    emptyDate,
    bookedDate,
    $hideForm,
    today,
    lastDate,
    book,
    checkValidDate,
    checkValidEventName,
    checkBookedDate,
    removeExtraSpaces,
    id,
    input0_input_handler,
    input1_input_handler,
    change_handler,
    input2_input_handler,
    change_handler_1,
    click_handler,
    click_handler_1
  ];
}
class HallForm extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { id: 17 }, null, [-1, -1]);
  }
}
const bookingDate_svelte_svelte_type_style_lang = "";
function create_else_block$1(ctx) {
  let div0;
  let t0;
  let t1;
  let div1;
  let button0;
  let t2;
  let t3;
  let button1;
  let t4;
  let mounted;
  let dispose;
  return {
    c() {
      div0 = element("div");
      t0 = text("Are you sure you want to delete this booking ?");
      t1 = space();
      div1 = element("div");
      button0 = element("button");
      t2 = text("Yes");
      t3 = space();
      button1 = element("button");
      t4 = text("No");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Are you sure you want to delete this booking ?");
      div0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t2 = claim_text(button0_nodes, "Yes");
      button0_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t4 = claim_text(button1_nodes, "No");
      button1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button0, "class", "delete accept svelte-1jiffj8");
      attr(button1, "class", "delete cancel svelte-1jiffj8");
      attr(div1, "class", "options svelte-1jiffj8");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, button0);
      append_hydration(button0, t2);
      append_hydration(div1, t3);
      append_hydration(div1, button1);
      append_hydration(button1, t4);
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler_1*/
            ctx[8]
          ),
          listen(
            button1,
            "click",
            /*click_handler_2*/
            ctx[9]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$1(ctx) {
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  let t3;
  let div2;
  let t4;
  let t5;
  let div3;
  let t6;
  let t7;
  let div4;
  let t8;
  let t9;
  let div5;
  let button;
  let t10;
  let button_class_value;
  let button_disabled_value;
  let mounted;
  let dispose;
  return {
    c() {
      div0 = element("div");
      t0 = text(
        /*startDate*/
        ctx[0]
      );
      t1 = space();
      div1 = element("div");
      t2 = text("--");
      t3 = space();
      div2 = element("div");
      t4 = text(
        /*endDate*/
        ctx[2]
      );
      t5 = space();
      div3 = element("div");
      t6 = text(":");
      t7 = space();
      div4 = element("div");
      t8 = text(
        /*eventName*/
        ctx[1]
      );
      t9 = space();
      div5 = element("div");
      button = element("button");
      t10 = text("Delete");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(
        div0_nodes,
        /*startDate*/
        ctx[0]
      );
      div0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "--");
      div1_nodes.forEach(detach);
      t3 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {});
      var div2_nodes = children(div2);
      t4 = claim_text(
        div2_nodes,
        /*endDate*/
        ctx[2]
      );
      div2_nodes.forEach(detach);
      t5 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {});
      var div3_nodes = children(div3);
      t6 = claim_text(div3_nodes, ":");
      div3_nodes.forEach(detach);
      t7 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      t8 = claim_text(
        div4_nodes,
        /*eventName*/
        ctx[1]
      );
      div4_nodes.forEach(detach);
      t9 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {});
      var div5_nodes = children(div5);
      button = claim_element(div5_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t10 = claim_text(button_nodes, "Delete");
      button_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", button_class_value = null_to_empty(`delete ${/*$deleteDateId*/
      ctx[4] === /*startDate*/
      ctx[0] || /*$deleteDateId*/
      ctx[4] === "" ? "" : "disable"}`) + " svelte-1jiffj8");
      button.disabled = button_disabled_value = /*$deleteDateId*/
      ctx[4] === /*startDate*/
      ctx[0] || /*$deleteDateId*/
      ctx[4] === "" ? false : true;
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, t4);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, t6);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, div4, anchor);
      append_hydration(div4, t8);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, div5, anchor);
      append_hydration(div5, button);
      append_hydration(button, t10);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[7]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*startDate*/
      1)
        set_data(
          t0,
          /*startDate*/
          ctx2[0]
        );
      if (dirty & /*endDate*/
      4)
        set_data(
          t4,
          /*endDate*/
          ctx2[2]
        );
      if (dirty & /*eventName*/
      2)
        set_data(
          t8,
          /*eventName*/
          ctx2[1]
        );
      if (dirty & /*$deleteDateId, startDate*/
      17 && button_class_value !== (button_class_value = null_to_empty(`delete ${/*$deleteDateId*/
      ctx2[4] === /*startDate*/
      ctx2[0] || /*$deleteDateId*/
      ctx2[4] === "" ? "" : "disable"}`) + " svelte-1jiffj8")) {
        attr(button, "class", button_class_value);
      }
      if (dirty & /*$deleteDateId, startDate*/
      17 && button_disabled_value !== (button_disabled_value = /*$deleteDateId*/
      ctx2[4] === /*startDate*/
      ctx2[0] || /*$deleteDateId*/
      ctx2[4] === "" ? false : true)) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(div2);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(div3);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(div4);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(div5);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (
      /*deleteFlag*/
      ctx2[3] === false
    )
      return create_if_block$1;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "outer svelte-1jiffj8");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $crrBookingInfo;
  let $bookings;
  let $userId;
  let $deleteDateId;
  component_subscribe($$self, crrBookingInfo, ($$value) => $$invalidate(10, $crrBookingInfo = $$value));
  component_subscribe($$self, bookings, ($$value) => $$invalidate(11, $bookings = $$value));
  component_subscribe($$self, userId, ($$value) => $$invalidate(12, $userId = $$value));
  component_subscribe($$self, deleteDateId, ($$value) => $$invalidate(4, $deleteDateId = $$value));
  let { startDate, id, eventName, endDate } = $$props;
  let deleteFlag = false;
  const deleteBooking = async () => {
    setTimeout(
      () => {
        window.location.reload();
      },
      1e3
    );
    await axios.post(`/api/hallsBook`, {
      eventName,
      startDate,
      endDate,
      id,
      userId: `${$userId}`,
      purpose: 1,
      crrBookingInfo: $crrBookingInfo,
      bookings: $bookings
    });
    let tempBookingInfo = $crrBookingInfo;
    tempBookingInfo = tempBookingInfo.filter((el) => {
      return el["startDate"] !== startDate && el["endDate"] !== endDate;
    });
    crrBookingInfo.set(tempBookingInfo);
  };
  const click_handler = () => {
    $$invalidate(3, deleteFlag = true);
    deleteDateId.set(startDate);
  };
  const click_handler_1 = () => {
    deleteBooking();
    setTimeout(
      () => {
        $$invalidate(3, deleteFlag = false);
      },
      1e3
    );
    deleteDateId.set("");
  };
  const click_handler_2 = () => {
    $$invalidate(3, deleteFlag = false);
    deleteDateId.set("");
  };
  $$self.$$set = ($$props2) => {
    if ("startDate" in $$props2)
      $$invalidate(0, startDate = $$props2.startDate);
    if ("id" in $$props2)
      $$invalidate(6, id = $$props2.id);
    if ("eventName" in $$props2)
      $$invalidate(1, eventName = $$props2.eventName);
    if ("endDate" in $$props2)
      $$invalidate(2, endDate = $$props2.endDate);
  };
  return [
    startDate,
    eventName,
    endDate,
    deleteFlag,
    $deleteDateId,
    deleteBooking,
    id,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
class BookingDate extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      startDate: 0,
      id: 6,
      eventName: 1,
      endDate: 2
    });
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text("No Bookings");
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, "No Bookings");
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block(ctx) {
  let each_1_anchor;
  let current;
  let each_value = (
    /*$crrBookingInfo*/
    ctx[1]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*$crrBookingInfo, data*/
      3) {
        each_value = /*$crrBookingInfo*/
        ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block(ctx) {
  let bookingdate;
  let current;
  bookingdate = new BookingDate({
    props: {
      startDate: (
        /*info*/
        ctx[8]["startDate"]
      ),
      endDate: (
        /*info*/
        ctx[8]["endDate"]
      ),
      eventName: (
        /*info*/
        ctx[8]["eventName"]
      ),
      id: (
        /*data*/
        ctx[0]["id"]
      )
    }
  });
  return {
    c() {
      create_component(bookingdate.$$.fragment);
    },
    l(nodes) {
      claim_component(bookingdate.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(bookingdate, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const bookingdate_changes = {};
      if (dirty & /*$crrBookingInfo*/
      2)
        bookingdate_changes.startDate = /*info*/
        ctx2[8]["startDate"];
      if (dirty & /*$crrBookingInfo*/
      2)
        bookingdate_changes.endDate = /*info*/
        ctx2[8]["endDate"];
      if (dirty & /*$crrBookingInfo*/
      2)
        bookingdate_changes.eventName = /*info*/
        ctx2[8]["eventName"];
      if (dirty & /*data*/
      1)
        bookingdate_changes.id = /*data*/
        ctx2[0]["id"];
      bookingdate.$set(bookingdate_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(bookingdate.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(bookingdate.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(bookingdate, detaching);
    }
  };
}
function create_key_block(ctx) {
  let calendar;
  let current;
  calendar = new Calendar({});
  return {
    c() {
      create_component(calendar.$$.fragment);
    },
    l(nodes) {
      claim_component(calendar.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(calendar, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(calendar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(calendar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(calendar, detaching);
    }
  };
}
function create_fragment(ctx) {
  let div20;
  let div0;
  let t0;
  let t1;
  let div19;
  let div1;
  let t2_value = (
    /*data*/
    ctx[0]["name"] + ""
  );
  let t2;
  let t3;
  let div11;
  let div6;
  let div2;
  let t4;
  let t5;
  let div3;
  let t6_value = (
    /*data*/
    ctx[0]["incharge"] + ""
  );
  let t6;
  let t7;
  let div4;
  let t8;
  let t9;
  let div5;
  let t10_value = (
    /*data*/
    ctx[0]["contact"] + ""
  );
  let t10;
  let t11;
  let div10;
  let div9;
  let div7;
  let t12_value = (
    /*data*/
    ctx[0]["capacity"] + ""
  );
  let t12;
  let t13;
  let div8;
  let t14;
  let t15;
  let div12;
  let t16;
  let t17;
  let div13;
  let t18_value = (
    /*data*/
    ctx[0]["desc"] + ""
  );
  let t18;
  let t19;
  let div14;
  let t20;
  let t21;
  let div15;
  let t22_value = (
    /*data*/
    ctx[0]["location"] + ""
  );
  let t22;
  let t23;
  let div16;
  let t24;
  let t25;
  let div17;
  let current_block_type_index;
  let if_block;
  let t26;
  let div18;
  let t27;
  let t28;
  let previous_key = (
    /*$bookings*/
    ctx[2]
  );
  let t29;
  let button;
  let t30;
  let button_disabled_value;
  let t31;
  let hallform;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$crrBookingInfo*/
      ctx2[1].length > 0
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let key_block = create_key_block();
  hallform = new HallForm({ props: { id: (
    /*data*/
    ctx[0]["id"]
  ) } });
  return {
    c() {
      div20 = element("div");
      div0 = element("div");
      t0 = text("Details");
      t1 = space();
      div19 = element("div");
      div1 = element("div");
      t2 = text(t2_value);
      t3 = space();
      div11 = element("div");
      div6 = element("div");
      div2 = element("div");
      t4 = text("Incharge");
      t5 = space();
      div3 = element("div");
      t6 = text(t6_value);
      t7 = space();
      div4 = element("div");
      t8 = text("Contact");
      t9 = space();
      div5 = element("div");
      t10 = text(t10_value);
      t11 = space();
      div10 = element("div");
      div9 = element("div");
      div7 = element("div");
      t12 = text(t12_value);
      t13 = space();
      div8 = element("div");
      t14 = text("Capacity");
      t15 = space();
      div12 = element("div");
      t16 = text("Description");
      t17 = space();
      div13 = element("div");
      t18 = text(t18_value);
      t19 = space();
      div14 = element("div");
      t20 = text("Location");
      t21 = space();
      div15 = element("div");
      t22 = text(t22_value);
      t23 = space();
      div16 = element("div");
      t24 = text("Your Bookings (mm/dd/yyyy)");
      t25 = space();
      div17 = element("div");
      if_block.c();
      t26 = space();
      div18 = element("div");
      t27 = text("Calendar");
      t28 = space();
      key_block.c();
      t29 = space();
      button = element("button");
      t30 = text("Book");
      t31 = space();
      create_component(hallform.$$.fragment);
      this.h();
    },
    l(nodes) {
      div20 = claim_element(nodes, "DIV", { class: true });
      var div20_nodes = children(div20);
      div0 = claim_element(div20_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Details");
      div0_nodes.forEach(detach);
      t1 = claim_space(div20_nodes);
      div19 = claim_element(div20_nodes, "DIV", { class: true });
      var div19_nodes = children(div19);
      div1 = claim_element(div19_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, t2_value);
      div1_nodes.forEach(detach);
      t3 = claim_space(div19_nodes);
      div11 = claim_element(div19_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div6 = claim_element(div11_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      div2 = claim_element(div6_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t4 = claim_text(div2_nodes, "Incharge");
      div2_nodes.forEach(detach);
      t5 = claim_space(div6_nodes);
      div3 = claim_element(div6_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      t6 = claim_text(div3_nodes, t6_value);
      div3_nodes.forEach(detach);
      t7 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t8 = claim_text(div4_nodes, "Contact");
      div4_nodes.forEach(detach);
      t9 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      t10 = claim_text(div5_nodes, t10_value);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      t11 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div9 = claim_element(div10_nodes, "DIV", {});
      var div9_nodes = children(div9);
      div7 = claim_element(div9_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      t12 = claim_text(div7_nodes, t12_value);
      div7_nodes.forEach(detach);
      t13 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      t14 = claim_text(div8_nodes, "Capacity");
      div8_nodes.forEach(detach);
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      t15 = claim_space(div19_nodes);
      div12 = claim_element(div19_nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      t16 = claim_text(div12_nodes, "Description");
      div12_nodes.forEach(detach);
      t17 = claim_space(div19_nodes);
      div13 = claim_element(div19_nodes, "DIV", { class: true });
      var div13_nodes = children(div13);
      t18 = claim_text(div13_nodes, t18_value);
      div13_nodes.forEach(detach);
      t19 = claim_space(div19_nodes);
      div14 = claim_element(div19_nodes, "DIV", { class: true });
      var div14_nodes = children(div14);
      t20 = claim_text(div14_nodes, "Location");
      div14_nodes.forEach(detach);
      t21 = claim_space(div19_nodes);
      div15 = claim_element(div19_nodes, "DIV", { class: true });
      var div15_nodes = children(div15);
      t22 = claim_text(div15_nodes, t22_value);
      div15_nodes.forEach(detach);
      t23 = claim_space(div19_nodes);
      div16 = claim_element(div19_nodes, "DIV", { class: true });
      var div16_nodes = children(div16);
      t24 = claim_text(div16_nodes, "Your Bookings (mm/dd/yyyy)");
      div16_nodes.forEach(detach);
      t25 = claim_space(div19_nodes);
      div17 = claim_element(div19_nodes, "DIV", { class: true });
      var div17_nodes = children(div17);
      if_block.l(div17_nodes);
      div17_nodes.forEach(detach);
      t26 = claim_space(div19_nodes);
      div18 = claim_element(div19_nodes, "DIV", { class: true });
      var div18_nodes = children(div18);
      t27 = claim_text(div18_nodes, "Calendar");
      div18_nodes.forEach(detach);
      t28 = claim_space(div19_nodes);
      key_block.l(div19_nodes);
      t29 = claim_space(div19_nodes);
      button = claim_element(div19_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t30 = claim_text(button_nodes, "Book");
      button_nodes.forEach(detach);
      div19_nodes.forEach(detach);
      t31 = claim_space(div20_nodes);
      claim_component(hallform.$$.fragment, div20_nodes);
      div20_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "title svelte-aanqum");
      attr(div1, "class", "name svelte-aanqum");
      attr(div2, "class", "head svelte-aanqum");
      attr(div3, "class", "value svelte-aanqum");
      attr(div4, "class", "head svelte-aanqum");
      attr(div5, "class", "value svelte-aanqum");
      attr(div6, "class", "sub-grid");
      attr(div7, "class", "capacity svelte-aanqum");
      attr(div8, "class", "cap-head svelte-aanqum");
      attr(div10, "class", "cap-grid svelte-aanqum");
      attr(div11, "class", "grid svelte-aanqum");
      attr(div12, "class", "head svelte-aanqum");
      attr(div13, "class", "value svelte-aanqum");
      attr(div14, "class", "head svelte-aanqum");
      attr(div15, "class", "value svelte-aanqum");
      attr(div16, "class", "head svelte-aanqum");
      attr(div17, "class", "value svelte-aanqum");
      attr(div18, "class", "head svelte-aanqum");
      button.disabled = button_disabled_value = !/*$hideForm*/
      ctx[3];
      attr(button, "class", "book svelte-aanqum");
      attr(div19, "class", "inner svelte-aanqum");
      attr(div20, "class", "outer svelte-aanqum");
    },
    m(target, anchor) {
      insert_hydration(target, div20, anchor);
      append_hydration(div20, div0);
      append_hydration(div0, t0);
      append_hydration(div20, t1);
      append_hydration(div20, div19);
      append_hydration(div19, div1);
      append_hydration(div1, t2);
      append_hydration(div19, t3);
      append_hydration(div19, div11);
      append_hydration(div11, div6);
      append_hydration(div6, div2);
      append_hydration(div2, t4);
      append_hydration(div6, t5);
      append_hydration(div6, div3);
      append_hydration(div3, t6);
      append_hydration(div6, t7);
      append_hydration(div6, div4);
      append_hydration(div4, t8);
      append_hydration(div6, t9);
      append_hydration(div6, div5);
      append_hydration(div5, t10);
      append_hydration(div11, t11);
      append_hydration(div11, div10);
      append_hydration(div10, div9);
      append_hydration(div9, div7);
      append_hydration(div7, t12);
      append_hydration(div9, t13);
      append_hydration(div9, div8);
      append_hydration(div8, t14);
      append_hydration(div19, t15);
      append_hydration(div19, div12);
      append_hydration(div12, t16);
      append_hydration(div19, t17);
      append_hydration(div19, div13);
      append_hydration(div13, t18);
      append_hydration(div19, t19);
      append_hydration(div19, div14);
      append_hydration(div14, t20);
      append_hydration(div19, t21);
      append_hydration(div19, div15);
      append_hydration(div15, t22);
      append_hydration(div19, t23);
      append_hydration(div19, div16);
      append_hydration(div16, t24);
      append_hydration(div19, t25);
      append_hydration(div19, div17);
      if_blocks[current_block_type_index].m(div17, null);
      append_hydration(div19, t26);
      append_hydration(div19, div18);
      append_hydration(div18, t27);
      append_hydration(div19, t28);
      key_block.m(div19, null);
      append_hydration(div19, t29);
      append_hydration(div19, button);
      append_hydration(button, t30);
      append_hydration(div20, t31);
      mount_component(hallform, div20, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[4]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*data*/
      1) && t2_value !== (t2_value = /*data*/
      ctx2[0]["name"] + ""))
        set_data(t2, t2_value);
      if ((!current || dirty & /*data*/
      1) && t6_value !== (t6_value = /*data*/
      ctx2[0]["incharge"] + ""))
        set_data(t6, t6_value);
      if ((!current || dirty & /*data*/
      1) && t10_value !== (t10_value = /*data*/
      ctx2[0]["contact"] + ""))
        set_data(t10, t10_value);
      if ((!current || dirty & /*data*/
      1) && t12_value !== (t12_value = /*data*/
      ctx2[0]["capacity"] + ""))
        set_data(t12, t12_value);
      if ((!current || dirty & /*data*/
      1) && t18_value !== (t18_value = /*data*/
      ctx2[0]["desc"] + ""))
        set_data(t18, t18_value);
      if ((!current || dirty & /*data*/
      1) && t22_value !== (t22_value = /*data*/
      ctx2[0]["location"] + ""))
        set_data(t22, t22_value);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div17, null);
      }
      if (dirty & /*$bookings*/
      4 && safe_not_equal(previous_key, previous_key = /*$bookings*/
      ctx2[2])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block();
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(div19, t29);
      } else {
        key_block.p(ctx2, dirty);
      }
      if (!current || dirty & /*$hideForm*/
      8 && button_disabled_value !== (button_disabled_value = !/*$hideForm*/
      ctx2[3])) {
        button.disabled = button_disabled_value;
      }
      const hallform_changes = {};
      if (dirty & /*data*/
      1)
        hallform_changes.id = /*data*/
        ctx2[0]["id"];
      hallform.$set(hallform_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(key_block);
      transition_in(hallform.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(key_block);
      transition_out(hallform.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div20);
      if_blocks[current_block_type_index].d();
      key_block.d(detaching);
      destroy_component(hallform);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $userId;
  let $crrBookingInfo;
  let $bookings;
  let $hideForm;
  component_subscribe($$self, userId, ($$value) => $$invalidate(6, $userId = $$value));
  component_subscribe($$self, crrBookingInfo, ($$value) => $$invalidate(1, $crrBookingInfo = $$value));
  component_subscribe($$self, bookings, ($$value) => $$invalidate(2, $bookings = $$value));
  component_subscribe($$self, hideForm, ($$value) => $$invalidate(3, $hideForm = $$value));
  let { data } = $$props;
  data = data["halls"];
  const bookingsInfo = data["bookings"];
  bookings.set(bookingsInfo);
  let tempBookingInfo = bookingsInfo.filter((el) => {
    return el["userId"] === $userId;
  });
  tempBookingInfo = convertSecToDate(tempBookingInfo);
  crrBookingInfo.set(tempBookingInfo);
  const click_handler = () => {
    hideForm.set(!$hideForm);
  };
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
  };
  return [data, $crrBookingInfo, $bookings, $hideForm, click_handler];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Page as default
};
