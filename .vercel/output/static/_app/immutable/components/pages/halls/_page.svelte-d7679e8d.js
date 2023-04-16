import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, c as claim_space, h as detach, n as attr, b as insert_hydration, E as append_hydration, u as set_data, C as noop, x as create_component, y as claim_component, G as null_to_empty, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, Q as src_url_equal, R as set_input_value, H as listen, T as to_number, L as run_all, F as component_subscribe, g as group_outros, d as check_outros, e as empty, U as destroy_each } from "../../../chunks/index-42505854.js";
import { i as info, h as hideForm, a as hallEdit, f as formText, b as hallDelete, v as validUser } from "../../../chunks/store-44f3bbc0.js";
import { W as Warning, c as cancel } from "../../../chunks/cancel-cc8606d8.js";
import { a as axios } from "../../../chunks/axios-b3c02076.js";
import { U as UserForm } from "../../../chunks/userForm-2c1195b8.js";
import { a as add } from "../../../chunks/add-11ea7e63.js";
const hallCardField_svelte_svelte_type_style_lang = "";
function create_fragment$5(ctx) {
  let div1;
  let t0;
  let t1;
  let div0;
  let t2;
  return {
    c() {
      div1 = element("div");
      t0 = text(
        /*field*/
        ctx[0]
      );
      t1 = space();
      div0 = element("div");
      t2 = text(
        /*value*/
        ctx[1]
      );
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t0 = claim_text(
        div1_nodes,
        /*field*/
        ctx[0]
      );
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t2 = claim_text(
        div0_nodes,
        /*value*/
        ctx[1]
      );
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "value svelte-18helj");
      attr(div1, "class", "outer svelte-18helj");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, t0);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      append_hydration(div0, t2);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*field*/
      1)
        set_data(
          t0,
          /*field*/
          ctx2[0]
        );
      if (dirty & /*value*/
      2)
        set_data(
          t2,
          /*value*/
          ctx2[1]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { field, value } = $$props;
  $$self.$$set = ($$props2) => {
    if ("field" in $$props2)
      $$invalidate(0, field = $$props2.field);
    if ("value" in $$props2)
      $$invalidate(1, value = $$props2.value);
  };
  return [field, value];
}
class HallCardField extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { field: 0, value: 1 });
  }
}
const hallSubCard_svelte_svelte_type_style_lang = "";
function create_fragment$4(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let hallcardfield0;
  let t2;
  let hallcardfield1;
  let div1_class_value;
  let current;
  hallcardfield0 = new HallCardField({
    props: {
      field: "Capacity",
      value: `${/*capacity*/
      ctx[2]}`
    }
  });
  hallcardfield1 = new HallCardField({
    props: {
      field: "Incharge",
      value: `${/*incharge*/
      ctx[3]}`
    }
  });
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = text(
        /*name*/
        ctx[0]
      );
      t1 = space();
      create_component(hallcardfield0.$$.fragment);
      t2 = space();
      create_component(hallcardfield1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(
        div0_nodes,
        /*name*/
        ctx[0]
      );
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      claim_component(hallcardfield0.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(hallcardfield1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "name svelte-109nkno");
      attr(div1, "class", div1_class_value = null_to_empty(`outer ${/*deleteFlag*/
      ctx[1] === true ? "ondelete" : (
        /*deleteFlag*/
        ctx[1] === false ? "nodelete" : ""
      )}`) + " svelte-109nkno");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, t0);
      append_hydration(div1, t1);
      mount_component(hallcardfield0, div1, null);
      append_hydration(div1, t2);
      mount_component(hallcardfield1, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*name*/
      1)
        set_data(
          t0,
          /*name*/
          ctx2[0]
        );
      const hallcardfield0_changes = {};
      if (dirty & /*capacity*/
      4)
        hallcardfield0_changes.value = `${/*capacity*/
        ctx2[2]}`;
      hallcardfield0.$set(hallcardfield0_changes);
      const hallcardfield1_changes = {};
      if (dirty & /*incharge*/
      8)
        hallcardfield1_changes.value = `${/*incharge*/
        ctx2[3]}`;
      hallcardfield1.$set(hallcardfield1_changes);
      if (!current || dirty & /*deleteFlag*/
      2 && div1_class_value !== (div1_class_value = null_to_empty(`outer ${/*deleteFlag*/
      ctx2[1] === true ? "ondelete" : (
        /*deleteFlag*/
        ctx2[1] === false ? "nodelete" : ""
      )}`) + " svelte-109nkno")) {
        attr(div1, "class", div1_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(hallcardfield0.$$.fragment, local);
      transition_in(hallcardfield1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(hallcardfield0.$$.fragment, local);
      transition_out(hallcardfield1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(hallcardfield0);
      destroy_component(hallcardfield1);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { name, deleteFlag } = $$props;
  let { capacity } = $$props;
  let { incharge } = $$props;
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(0, name = $$props2.name);
    if ("deleteFlag" in $$props2)
      $$invalidate(1, deleteFlag = $$props2.deleteFlag);
    if ("capacity" in $$props2)
      $$invalidate(2, capacity = $$props2.capacity);
    if ("incharge" in $$props2)
      $$invalidate(3, incharge = $$props2.incharge);
  };
  return [name, deleteFlag, capacity, incharge];
}
class HallSubCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      name: 0,
      deleteFlag: 1,
      capacity: 2,
      incharge: 3
    });
  }
}
const dustbin = "" + new URL("../../../assets/dustbin-3f924203.svg", import.meta.url).href;
const pen = "" + new URL("../../../assets/pen-e5834bd4.svg", import.meta.url).href;
const addHallForm_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let div12;
  let div11;
  let div0;
  let t0_value = (
    /*$info*/
    ctx[14]["title"] + ""
  );
  let t0;
  let t1;
  let div3;
  let div1;
  let t2;
  let t3;
  let div2;
  let t4;
  let t5;
  let input0;
  let t6;
  let input1;
  let t7;
  let warning0;
  let t8;
  let warning1;
  let t9;
  let div5;
  let div4;
  let t10;
  let t11;
  let input2;
  let t12;
  let warning2;
  let t13;
  let div7;
  let div6;
  let t14;
  let t15;
  let input3;
  let t16;
  let warning3;
  let t17;
  let div10;
  let div8;
  let t18;
  let t19;
  let div9;
  let t20;
  let t21;
  let input4;
  let t22;
  let input5;
  let t23;
  let warning4;
  let t24;
  let warning5;
  let t25;
  let button0;
  let t26;
  let button0_class_value;
  let button0_disabled_value;
  let t27;
  let button1;
  let img;
  let img_src_value;
  let div11_class_value;
  let div12_class_value;
  let current;
  let mounted;
  let dispose;
  warning0 = new Warning({
    props: {
      flag: (
        /*invalidHallName*/
        ctx[8]
      ),
      label: "Enter valid hall name"
    }
  });
  warning1 = new Warning({
    props: {
      flag: (
        /*invalidInchargeName*/
        ctx[9]
      ),
      label: "Enter valid incharge name"
    }
  });
  warning2 = new Warning({
    props: {
      flag: (
        /*invalidDesc*/
        ctx[10]
      ),
      label: "Enter valid description"
    }
  });
  warning3 = new Warning({
    props: {
      flag: (
        /*invalidLoc*/
        ctx[11]
      ),
      label: "Enter valid hall location"
    }
  });
  warning4 = new Warning({
    props: {
      flag: (
        /*invalidCapacity*/
        ctx[6]
      ),
      label: "Enter valid hall capacity"
    }
  });
  warning5 = new Warning({
    props: {
      flag: (
        /*invalidContact*/
        ctx[7]
      ),
      label: "Enter valid contact"
    }
  });
  return {
    c() {
      div12 = element("div");
      div11 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div3 = element("div");
      div1 = element("div");
      t2 = text("Hall Name");
      t3 = space();
      div2 = element("div");
      t4 = text("Incharge Name");
      t5 = space();
      input0 = element("input");
      t6 = space();
      input1 = element("input");
      t7 = space();
      create_component(warning0.$$.fragment);
      t8 = space();
      create_component(warning1.$$.fragment);
      t9 = space();
      div5 = element("div");
      div4 = element("div");
      t10 = text("Description");
      t11 = space();
      input2 = element("input");
      t12 = space();
      create_component(warning2.$$.fragment);
      t13 = space();
      div7 = element("div");
      div6 = element("div");
      t14 = text("Location");
      t15 = space();
      input3 = element("input");
      t16 = space();
      create_component(warning3.$$.fragment);
      t17 = space();
      div10 = element("div");
      div8 = element("div");
      t18 = text("Capacity");
      t19 = space();
      div9 = element("div");
      t20 = text("Contact");
      t21 = space();
      input4 = element("input");
      t22 = space();
      input5 = element("input");
      t23 = space();
      create_component(warning4.$$.fragment);
      t24 = space();
      create_component(warning5.$$.fragment);
      t25 = space();
      button0 = element("button");
      t26 = text("Submit");
      t27 = space();
      button1 = element("button");
      img = element("img");
      this.h();
    },
    l(nodes) {
      div12 = claim_element(nodes, "DIV", { class: true });
      var div12_nodes = children(div12);
      div11 = claim_element(div12_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      div0 = claim_element(div11_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach);
      t1 = claim_space(div11_nodes);
      div3 = claim_element(div11_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "Hall Name");
      div1_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      t4 = claim_text(div2_nodes, "Incharge Name");
      div2_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      input0 = claim_element(div3_nodes, "INPUT", {
        type: true,
        class: true,
        placeholder: true
      });
      t6 = claim_space(div3_nodes);
      input1 = claim_element(div3_nodes, "INPUT", {
        type: true,
        class: true,
        placeholder: true
      });
      t7 = claim_space(div3_nodes);
      claim_component(warning0.$$.fragment, div3_nodes);
      t8 = claim_space(div3_nodes);
      claim_component(warning1.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      t9 = claim_space(div11_nodes);
      div5 = claim_element(div11_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      t10 = claim_text(div4_nodes, "Description");
      div4_nodes.forEach(detach);
      t11 = claim_space(div5_nodes);
      input2 = claim_element(div5_nodes, "INPUT", {
        type: true,
        class: true,
        placeholder: true
      });
      div5_nodes.forEach(detach);
      t12 = claim_space(div11_nodes);
      claim_component(warning2.$$.fragment, div11_nodes);
      t13 = claim_space(div11_nodes);
      div7 = claim_element(div11_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      t14 = claim_text(div6_nodes, "Location");
      div6_nodes.forEach(detach);
      t15 = claim_space(div7_nodes);
      input3 = claim_element(div7_nodes, "INPUT", {
        type: true,
        class: true,
        placeholder: true
      });
      div7_nodes.forEach(detach);
      t16 = claim_space(div11_nodes);
      claim_component(warning3.$$.fragment, div11_nodes);
      t17 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      div8 = claim_element(div10_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      t18 = claim_text(div8_nodes, "Capacity");
      div8_nodes.forEach(detach);
      t19 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      t20 = claim_text(div9_nodes, "Contact");
      div9_nodes.forEach(detach);
      t21 = claim_space(div10_nodes);
      input4 = claim_element(div10_nodes, "INPUT", {
        type: true,
        class: true,
        placeholder: true
      });
      t22 = claim_space(div10_nodes);
      input5 = claim_element(div10_nodes, "INPUT", {
        type: true,
        class: true,
        placeholder: true
      });
      t23 = claim_space(div10_nodes);
      claim_component(warning4.$$.fragment, div10_nodes);
      t24 = claim_space(div10_nodes);
      claim_component(warning5.$$.fragment, div10_nodes);
      div10_nodes.forEach(detach);
      t25 = claim_space(div11_nodes);
      button0 = claim_element(div11_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t26 = claim_text(button0_nodes, "Submit");
      button0_nodes.forEach(detach);
      t27 = claim_space(div11_nodes);
      button1 = claim_element(div11_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      img = claim_element(button1_nodes, "IMG", { src: true, alt: true });
      button1_nodes.forEach(detach);
      div11_nodes.forEach(detach);
      div12_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "title svelte-1x28y75");
      attr(div1, "class", "field svelte-1x28y75");
      attr(div2, "class", "field svelte-1x28y75");
      attr(input0, "type", "text");
      attr(input0, "class", "name svelte-1x28y75");
      attr(input0, "placeholder", "Enter hall name");
      attr(input1, "type", "text");
      attr(input1, "class", "name svelte-1x28y75");
      attr(input1, "placeholder", "Enter incharge name");
      attr(div3, "class", "grid svelte-1x28y75");
      attr(div4, "class", "field svelte-1x28y75");
      attr(input2, "type", "text");
      attr(input2, "class", "name svelte-1x28y75");
      attr(input2, "placeholder", "Enter hall description");
      attr(div5, "class", "closeflex svelte-1x28y75");
      attr(div6, "class", "field svelte-1x28y75");
      attr(input3, "type", "text");
      attr(input3, "class", "name svelte-1x28y75");
      attr(input3, "placeholder", "Enter hall location");
      attr(div7, "class", "closeflex svelte-1x28y75");
      attr(div8, "class", "field svelte-1x28y75");
      attr(div9, "class", "field svelte-1x28y75");
      attr(input4, "type", "number");
      attr(input4, "class", "date svelte-1x28y75");
      attr(input4, "placeholder", "Enter hall capacity");
      attr(input5, "type", "text");
      attr(input5, "class", "date svelte-1x28y75");
      attr(input5, "placeholder", "Enter incharge contact");
      attr(div10, "class", "grid svelte-1x28y75");
      attr(button0, "class", button0_class_value = null_to_empty(`submit ${/*invalidHallName*/
      (ctx[8] || /*invalidCapacity*/
      ctx[6] || /*invalidContact*/
      ctx[7] || /*invalidDesc*/
      ctx[10] || /*invalidLoc*/
      ctx[11] || /*notFullContact*/
      ctx[12] || /*emptyText*/
      ctx[13]) === true ? "disable" : ""}`) + " svelte-1x28y75");
      button0.disabled = button0_disabled_value = /*invalidHallName*/
      ctx[8] || /*invalidCapacity*/
      ctx[6] || /*invalidContact*/
      ctx[7] || /*invalidDesc*/
      ctx[10] || /*invalidLoc*/
      ctx[11] || /*notFullContact*/
      ctx[12] || /*emptyText*/
      ctx[13];
      if (!src_url_equal(img.src, img_src_value = cancel))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(button1, "class", "close svelte-1x28y75");
      attr(div11, "class", div11_class_value = null_to_empty(`outer ${/*$hideForm*/
      ctx[15] === false ? "" : "hide"}`) + " svelte-1x28y75");
      attr(div12, "class", div12_class_value = null_to_empty(`${/*$hideForm*/
      ctx[15] === false ? "cover" : ""}`) + " svelte-1x28y75");
    },
    m(target, anchor) {
      insert_hydration(target, div12, anchor);
      append_hydration(div12, div11);
      append_hydration(div11, div0);
      append_hydration(div0, t0);
      append_hydration(div11, t1);
      append_hydration(div11, div3);
      append_hydration(div3, div1);
      append_hydration(div1, t2);
      append_hydration(div3, t3);
      append_hydration(div3, div2);
      append_hydration(div2, t4);
      append_hydration(div3, t5);
      append_hydration(div3, input0);
      set_input_value(
        input0,
        /*hallName*/
        ctx[0]
      );
      append_hydration(div3, t6);
      append_hydration(div3, input1);
      set_input_value(
        input1,
        /*inchargeName*/
        ctx[1]
      );
      append_hydration(div3, t7);
      mount_component(warning0, div3, null);
      append_hydration(div3, t8);
      mount_component(warning1, div3, null);
      append_hydration(div11, t9);
      append_hydration(div11, div5);
      append_hydration(div5, div4);
      append_hydration(div4, t10);
      append_hydration(div5, t11);
      append_hydration(div5, input2);
      set_input_value(
        input2,
        /*desc*/
        ctx[2]
      );
      append_hydration(div11, t12);
      mount_component(warning2, div11, null);
      append_hydration(div11, t13);
      append_hydration(div11, div7);
      append_hydration(div7, div6);
      append_hydration(div6, t14);
      append_hydration(div7, t15);
      append_hydration(div7, input3);
      set_input_value(
        input3,
        /*location*/
        ctx[3]
      );
      append_hydration(div11, t16);
      mount_component(warning3, div11, null);
      append_hydration(div11, t17);
      append_hydration(div11, div10);
      append_hydration(div10, div8);
      append_hydration(div8, t18);
      append_hydration(div10, t19);
      append_hydration(div10, div9);
      append_hydration(div9, t20);
      append_hydration(div10, t21);
      append_hydration(div10, input4);
      set_input_value(
        input4,
        /*capacity*/
        ctx[4]
      );
      append_hydration(div10, t22);
      append_hydration(div10, input5);
      set_input_value(
        input5,
        /*contact*/
        ctx[5]
      );
      append_hydration(div10, t23);
      mount_component(warning4, div10, null);
      append_hydration(div10, t24);
      mount_component(warning5, div10, null);
      append_hydration(div11, t25);
      append_hydration(div11, button0);
      append_hydration(button0, t26);
      append_hydration(div11, t27);
      append_hydration(div11, button1);
      append_hydration(button1, img);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[27]
          ),
          listen(
            input0,
            "input",
            /*checkValidHallName*/
            ctx[19]
          ),
          listen(
            input0,
            "change",
            /*removeExtraSpaces*/
            ctx[25]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[28]
          ),
          listen(
            input1,
            "input",
            /*checkValidInchargeName*/
            ctx[21]
          ),
          listen(
            input1,
            "change",
            /*removeExtraSpaces*/
            ctx[25]
          ),
          listen(
            input2,
            "input",
            /*input2_input_handler*/
            ctx[29]
          ),
          listen(
            input2,
            "input",
            /*checkValidDesc*/
            ctx[22]
          ),
          listen(
            input2,
            "change",
            /*removeExtraSpaces*/
            ctx[25]
          ),
          listen(
            input3,
            "input",
            /*input3_input_handler*/
            ctx[30]
          ),
          listen(
            input3,
            "input",
            /*checkValidLoc*/
            ctx[20]
          ),
          listen(
            input3,
            "change",
            /*removeExtraSpaces*/
            ctx[25]
          ),
          listen(
            input4,
            "input",
            /*input4_input_handler*/
            ctx[31]
          ),
          listen(
            input4,
            "input",
            /*checkValidCapacity*/
            ctx[24]
          ),
          listen(
            input5,
            "input",
            /*input5_input_handler*/
            ctx[32]
          ),
          listen(
            input5,
            "input",
            /*input_handler*/
            ctx[33]
          ),
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[34]
          ),
          listen(
            button1,
            "click",
            /*click_handler_1*/
            ctx[35]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if ((!current || dirty[0] & /*$info*/
      16384) && t0_value !== (t0_value = /*$info*/
      ctx2[14]["title"] + ""))
        set_data(t0, t0_value);
      if (dirty[0] & /*hallName*/
      1 && input0.value !== /*hallName*/
      ctx2[0]) {
        set_input_value(
          input0,
          /*hallName*/
          ctx2[0]
        );
      }
      if (dirty[0] & /*inchargeName*/
      2 && input1.value !== /*inchargeName*/
      ctx2[1]) {
        set_input_value(
          input1,
          /*inchargeName*/
          ctx2[1]
        );
      }
      const warning0_changes = {};
      if (dirty[0] & /*invalidHallName*/
      256)
        warning0_changes.flag = /*invalidHallName*/
        ctx2[8];
      warning0.$set(warning0_changes);
      const warning1_changes = {};
      if (dirty[0] & /*invalidInchargeName*/
      512)
        warning1_changes.flag = /*invalidInchargeName*/
        ctx2[9];
      warning1.$set(warning1_changes);
      if (dirty[0] & /*desc*/
      4 && input2.value !== /*desc*/
      ctx2[2]) {
        set_input_value(
          input2,
          /*desc*/
          ctx2[2]
        );
      }
      const warning2_changes = {};
      if (dirty[0] & /*invalidDesc*/
      1024)
        warning2_changes.flag = /*invalidDesc*/
        ctx2[10];
      warning2.$set(warning2_changes);
      if (dirty[0] & /*location*/
      8 && input3.value !== /*location*/
      ctx2[3]) {
        set_input_value(
          input3,
          /*location*/
          ctx2[3]
        );
      }
      const warning3_changes = {};
      if (dirty[0] & /*invalidLoc*/
      2048)
        warning3_changes.flag = /*invalidLoc*/
        ctx2[11];
      warning3.$set(warning3_changes);
      if (dirty[0] & /*capacity*/
      16 && to_number(input4.value) !== /*capacity*/
      ctx2[4]) {
        set_input_value(
          input4,
          /*capacity*/
          ctx2[4]
        );
      }
      if (dirty[0] & /*contact*/
      32 && input5.value !== /*contact*/
      ctx2[5]) {
        set_input_value(
          input5,
          /*contact*/
          ctx2[5]
        );
      }
      const warning4_changes = {};
      if (dirty[0] & /*invalidCapacity*/
      64)
        warning4_changes.flag = /*invalidCapacity*/
        ctx2[6];
      warning4.$set(warning4_changes);
      const warning5_changes = {};
      if (dirty[0] & /*invalidContact*/
      128)
        warning5_changes.flag = /*invalidContact*/
        ctx2[7];
      warning5.$set(warning5_changes);
      if (!current || dirty[0] & /*invalidHallName, invalidCapacity, invalidContact, invalidDesc, invalidLoc, notFullContact, emptyText*/
      15808 && button0_class_value !== (button0_class_value = null_to_empty(`submit ${/*invalidHallName*/
      (ctx2[8] || /*invalidCapacity*/
      ctx2[6] || /*invalidContact*/
      ctx2[7] || /*invalidDesc*/
      ctx2[10] || /*invalidLoc*/
      ctx2[11] || /*notFullContact*/
      ctx2[12] || /*emptyText*/
      ctx2[13]) === true ? "disable" : ""}`) + " svelte-1x28y75")) {
        attr(button0, "class", button0_class_value);
      }
      if (!current || dirty[0] & /*invalidHallName, invalidCapacity, invalidContact, invalidDesc, invalidLoc, notFullContact, emptyText*/
      15808 && button0_disabled_value !== (button0_disabled_value = /*invalidHallName*/
      ctx2[8] || /*invalidCapacity*/
      ctx2[6] || /*invalidContact*/
      ctx2[7] || /*invalidDesc*/
      ctx2[10] || /*invalidLoc*/
      ctx2[11] || /*notFullContact*/
      ctx2[12] || /*emptyText*/
      ctx2[13])) {
        button0.disabled = button0_disabled_value;
      }
      if (!current || dirty[0] & /*$hideForm*/
      32768 && div11_class_value !== (div11_class_value = null_to_empty(`outer ${/*$hideForm*/
      ctx2[15] === false ? "" : "hide"}`) + " svelte-1x28y75")) {
        attr(div11, "class", div11_class_value);
      }
      if (!current || dirty[0] & /*$hideForm*/
      32768 && div12_class_value !== (div12_class_value = null_to_empty(`${/*$hideForm*/
      ctx2[15] === false ? "cover" : ""}`) + " svelte-1x28y75")) {
        attr(div12, "class", div12_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(warning0.$$.fragment, local);
      transition_in(warning1.$$.fragment, local);
      transition_in(warning2.$$.fragment, local);
      transition_in(warning3.$$.fragment, local);
      transition_in(warning4.$$.fragment, local);
      transition_in(warning5.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(warning0.$$.fragment, local);
      transition_out(warning1.$$.fragment, local);
      transition_out(warning2.$$.fragment, local);
      transition_out(warning3.$$.fragment, local);
      transition_out(warning4.$$.fragment, local);
      transition_out(warning5.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div12);
      destroy_component(warning0);
      destroy_component(warning1);
      destroy_component(warning2);
      destroy_component(warning3);
      destroy_component(warning4);
      destroy_component(warning5);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let $info;
  let $hideForm;
  let $hallEdit;
  component_subscribe($$self, info, ($$value) => $$invalidate(14, $info = $$value));
  component_subscribe($$self, hideForm, ($$value) => $$invalidate(15, $hideForm = $$value));
  component_subscribe($$self, hallEdit, ($$value) => $$invalidate(16, $hallEdit = $$value));
  let hallName = $info["hallName"], inchargeName = $info["inchargeName"], desc = $info["desc"], location = $info["location"], capacity = $info["capacity"], contact = $info["contact"], invalidCapacity = false, invalidContact = false, invalidHallName = false, invalidInchargeName = false, invalidDesc = false, invalidLoc = false, notFullContact = false, emptyText = true;
  const addHall = async () => {
    await axios.post(`/api/halls`, {
      name: hallName,
      incharge: inchargeName,
      desc,
      location,
      capacity,
      contact,
      bookings: []
    });
  };
  const editHall = async () => {
    await axios.patch(`/api/halls`, {
      name: hallName,
      incharge: inchargeName,
      desc,
      location,
      capacity,
      contact,
      bookings: [],
      id: $info["id"]
    });
  };
  const checkEmptyText = () => {
    $$invalidate(13, emptyText = hallName === "" || inchargeName === "" || desc === "" || location === "" || contact === "");
  };
  const checkValidText = (text2) => {
    checkEmptyText();
    if (text2 === "") {
      return false;
    } else if (text2[0] === " ") {
      return true;
    } else {
      return false;
    }
  };
  const checkValidHallName = () => {
    $$invalidate(8, invalidHallName = checkValidText(hallName));
  };
  const checkValidLoc = () => {
    $$invalidate(11, invalidLoc = checkValidText(location));
  };
  const checkValidInchargeName = () => {
    $$invalidate(9, invalidInchargeName = checkValidText(inchargeName));
  };
  const checkValidDesc = () => {
    $$invalidate(10, invalidDesc = checkValidText(desc));
  };
  const checkZero = (text2) => {
    if (text2[0] <= "0") {
      return true;
    } else {
      return false;
    }
  };
  const sliceAlphabets = (text2) => {
    if (text2[text2.length - 1].charCodeAt(0) >= 48 && text2[text2.length - 1].charCodeAt(0) <= 57) {
      return text2;
    }
    return text2.slice(0, text2.length - 1);
  };
  const checkContact = () => {
    $$invalidate(5, contact = sliceAlphabets(contact));
    $$invalidate(7, invalidContact = checkZero(contact) || checkValidText(contact));
    if (contact.length < 10) {
      $$invalidate(12, notFullContact = true);
    } else {
      $$invalidate(12, notFullContact = false);
    }
  };
  const checkValidCapacity = () => {
    $$invalidate(6, invalidCapacity = checkZero(capacity.toString()));
  };
  const removeExtraSpaces = () => {
    while (hallName[hallName.length - 1] === " ") {
      $$invalidate(0, hallName = hallName.slice(0, hallName.length - 1));
    }
  };
  const editPhoneNum = () => {
    if (contact.length > 10) {
      $$invalidate(5, contact = contact.slice(0, 10));
    }
  };
  function input0_input_handler() {
    hallName = this.value;
    $$invalidate(0, hallName);
  }
  function input1_input_handler() {
    inchargeName = this.value;
    $$invalidate(1, inchargeName);
  }
  function input2_input_handler() {
    desc = this.value;
    $$invalidate(2, desc);
  }
  function input3_input_handler() {
    location = this.value;
    $$invalidate(3, location);
  }
  function input4_input_handler() {
    capacity = to_number(this.value);
    $$invalidate(4, capacity);
  }
  function input5_input_handler() {
    contact = this.value;
    $$invalidate(5, contact);
  }
  const input_handler = () => {
    checkContact();
    editPhoneNum();
  };
  const click_handler = () => {
    if (!$hallEdit) {
      addHall();
    } else {
      editHall();
    }
    setTimeout(
      () => {
        window.location.reload();
      },
      1e3
    );
  };
  const click_handler_1 = () => {
    hideForm.set(true);
    hallEdit.set(false);
  };
  return [
    hallName,
    inchargeName,
    desc,
    location,
    capacity,
    contact,
    invalidCapacity,
    invalidContact,
    invalidHallName,
    invalidInchargeName,
    invalidDesc,
    invalidLoc,
    notFullContact,
    emptyText,
    $info,
    $hideForm,
    $hallEdit,
    addHall,
    editHall,
    checkValidHallName,
    checkValidLoc,
    checkValidInchargeName,
    checkValidDesc,
    checkContact,
    checkValidCapacity,
    removeExtraSpaces,
    editPhoneNum,
    input0_input_handler,
    input1_input_handler,
    input2_input_handler,
    input3_input_handler,
    input4_input_handler,
    input5_input_handler,
    input_handler,
    click_handler,
    click_handler_1
  ];
}
class AddHallForm extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {}, null, [-1, -1]);
  }
}
const deleteHall = async (id) => {
  await axios.delete("/api/halls", {
    data: {
      id
    }
  });
};
const hallCard_svelte_svelte_type_style_lang = "";
function create_else_block$1(ctx) {
  let div3;
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  let t3;
  let div2;
  let button0;
  let t4;
  let t5;
  let button1;
  let t6;
  let mounted;
  let dispose;
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      t0 = text("Are you sure you want to delete this hall?");
      t1 = space();
      div1 = element("div");
      t2 = text("NOTE: All the bookings related to this hall will be deleted");
      t3 = space();
      div2 = element("div");
      button0 = element("button");
      t4 = text("Yes");
      t5 = space();
      button1 = element("button");
      t6 = text("No");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Are you sure you want to delete this hall?");
      div0_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "NOTE: All the bookings related to this hall will be deleted");
      div1_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      button0 = claim_element(div2_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t4 = claim_text(button0_nodes, "Yes");
      button0_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      button1 = claim_element(div2_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t6 = claim_text(button1_nodes, "No");
      button1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "title svelte-1ps36dx");
      attr(div1, "class", "warning svelte-1ps36dx");
      attr(button0, "class", "decide yes svelte-1ps36dx");
      attr(button1, "class", "decide no svelte-1ps36dx");
      attr(div2, "class", "buttons svelte-1ps36dx");
      attr(div3, "class", "outer svelte-1ps36dx");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, t0);
      append_hydration(div3, t1);
      append_hydration(div3, div1);
      append_hydration(div1, t2);
      append_hydration(div3, t3);
      append_hydration(div3, div2);
      append_hydration(div2, button0);
      append_hydration(button0, t4);
      append_hydration(div2, t5);
      append_hydration(div2, button1);
      append_hydration(button1, t6);
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler_2*/
            ctx[13]
          ),
          listen(
            button1,
            "click",
            /*click_handler_3*/
            ctx[14]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div3);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$1(ctx) {
  let a;
  let hallsubcard;
  let t;
  let if_block_anchor;
  let current;
  hallsubcard = new HallSubCard({
    props: {
      name: (
        /*name*/
        ctx[6]
      ),
      capacity: (
        /*capacity*/
        ctx[7]
      ),
      incharge: (
        /*incharge*/
        ctx[8]
      ),
      deleteFlag: (
        /*deleteFlag*/
        ctx[0]
      )
    }
  });
  let if_block = (
    /*$formText*/
    ctx[2] === "Admin Login" && create_if_block_1$1(ctx)
  );
  return {
    c() {
      a = element("a");
      create_component(hallsubcard.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      claim_component(hallsubcard.$$.fragment, a_nodes);
      a_nodes.forEach(detach);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(a, "href", `/halls/${/*id*/
      ctx[5]}`);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      mount_component(hallsubcard, a, null);
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const hallsubcard_changes = {};
      if (dirty & /*deleteFlag*/
      1)
        hallsubcard_changes.deleteFlag = /*deleteFlag*/
        ctx2[0];
      hallsubcard.$set(hallsubcard_changes);
      if (
        /*$formText*/
        ctx2[2] === "Admin Login"
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1$1(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(hallsubcard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(hallsubcard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      destroy_component(hallsubcard);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1$1(ctx) {
  let button0;
  let img0;
  let img0_src_value;
  let button0_class_value;
  let t;
  let button1;
  let img1;
  let img1_src_value;
  let button1_class_value;
  let button1_disabled_value;
  let mounted;
  let dispose;
  return {
    c() {
      button0 = element("button");
      img0 = element("img");
      t = space();
      button1 = element("button");
      img1 = element("img");
      this.h();
    },
    l(nodes) {
      button0 = claim_element(nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      img0 = claim_element(button0_nodes, "IMG", { src: true, alt: true, class: true });
      button0_nodes.forEach(detach);
      t = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      img1 = claim_element(button1_nodes, "IMG", { src: true, alt: true, class: true });
      button1_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = dustbin))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "");
      attr(img0, "class", "icon svelte-1ps36dx");
      attr(button0, "class", button0_class_value = null_to_empty(`delete dustbin ${/*$hallDelete*/
      ctx[3] || /*$hallEdit*/
      ctx[4] === true ? "disable" : ""}`) + " svelte-1ps36dx");
      button0.disabled = /*$hallDelete*/
      ctx[3];
      if (!src_url_equal(img1.src, img1_src_value = pen))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "");
      attr(img1, "class", "icon svelte-1ps36dx");
      attr(button1, "class", button1_class_value = null_to_empty(`delete pen ${/*$hallEdit*/
      ctx[4] || /*$hallDelete*/
      ctx[3] === true ? "disable" : ""}`) + " svelte-1ps36dx");
      button1.disabled = button1_disabled_value = /*$hallEdit*/
      ctx[4] || /*$hallDelete*/
      ctx[3];
    },
    m(target, anchor) {
      insert_hydration(target, button0, anchor);
      append_hydration(button0, img0);
      insert_hydration(target, t, anchor);
      insert_hydration(target, button1, anchor);
      append_hydration(button1, img1);
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[11]
          ),
          listen(
            button1,
            "click",
            /*click_handler_1*/
            ctx[12]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*$hallDelete, $hallEdit*/
      24 && button0_class_value !== (button0_class_value = null_to_empty(`delete dustbin ${/*$hallDelete*/
      ctx2[3] || /*$hallEdit*/
      ctx2[4] === true ? "disable" : ""}`) + " svelte-1ps36dx")) {
        attr(button0, "class", button0_class_value);
      }
      if (dirty & /*$hallDelete*/
      8) {
        button0.disabled = /*$hallDelete*/
        ctx2[3];
      }
      if (dirty & /*$hallEdit, $hallDelete*/
      24 && button1_class_value !== (button1_class_value = null_to_empty(`delete pen ${/*$hallEdit*/
      ctx2[4] || /*$hallDelete*/
      ctx2[3] === true ? "disable" : ""}`) + " svelte-1ps36dx")) {
        attr(button1, "class", button1_class_value);
      }
      if (dirty & /*$hallEdit, $hallDelete*/
      24 && button1_disabled_value !== (button1_disabled_value = /*$hallEdit*/
      ctx2[4] || /*$hallDelete*/
      ctx2[3])) {
        button1.disabled = button1_disabled_value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(button0);
      if (detaching)
        detach(t);
      if (detaching)
        detach(button1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$1, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*deleteFlag*/
      ctx2[0] === false
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
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
      attr(div, "class", null_to_empty(`card-outer `) + " svelte-1ps36dx");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
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
        if_block.m(div, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $formText;
  let $hallDelete;
  let $hallEdit;
  component_subscribe($$self, formText, ($$value) => $$invalidate(2, $formText = $$value));
  component_subscribe($$self, hallDelete, ($$value) => $$invalidate(3, $hallDelete = $$value));
  component_subscribe($$self, hallEdit, ($$value) => $$invalidate(4, $hallEdit = $$value));
  let deleteFlag = false, editFlag = false;
  let { info1 } = $$props;
  let id = info1["id"], name = info1["name"], capacity = info1["capacity"], incharge = info1["incharge"], desc = info1["desc"], location = info1["location"], contact = info1["contact"];
  const setCrrValues = () => {
    info.set({
      hallName: name,
      inchargeName: incharge,
      desc,
      location,
      capacity,
      contact,
      title: "Edit this hall",
      id
    });
  };
  const click_handler = () => {
    $$invalidate(0, deleteFlag = true);
    hallDelete.set(true);
  };
  const click_handler_1 = () => {
    setCrrValues();
    $$invalidate(1, editFlag = true);
    hallEdit.set(true);
    hideForm.set(false);
  };
  const click_handler_2 = () => {
    window.location.reload();
    deleteHall(id);
  };
  const click_handler_3 = () => {
    $$invalidate(0, deleteFlag = false);
    hallDelete.set(false);
  };
  $$self.$$set = ($$props2) => {
    if ("info1" in $$props2)
      $$invalidate(10, info1 = $$props2.info1);
  };
  return [
    deleteFlag,
    editFlag,
    $formText,
    $hallDelete,
    $hallEdit,
    id,
    name,
    capacity,
    incharge,
    setCrrValues,
    info1,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3
  ];
}
class HallCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { info1: 10 });
  }
}
const addHallCard_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div;
  let button;
  let img;
  let img_src_value;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      button = element("button");
      img = element("img");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", { class: true, src: true, alt: true });
      button_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "plus svelte-xigcs");
      if (!src_url_equal(img.src, img_src_value = add))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(button, "class", "addBtn svelte-xigcs");
      attr(div, "class", "outer svelte-xigcs");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, img);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self) {
  let capacity;
  const setValues = () => {
    info.set({
      hallName: "",
      inchargeName: "",
      desc: "",
      location: "",
      capacity,
      contact: "",
      title: "Add new hall",
      id: ""
    });
  };
  const click_handler = () => {
    setValues();
    hideForm.set(false);
  };
  return [setValues, click_handler];
}
class AddHallCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
  let userform;
  let current;
  userform = new UserForm({});
  return {
    c() {
      create_component(userform.$$.fragment);
    },
    l(nodes) {
      claim_component(userform.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(userform, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(userform.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(userform.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(userform, detaching);
    }
  };
}
function create_if_block(ctx) {
  let div3;
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  let t3;
  let div2;
  let t4;
  let current;
  let each_value = (
    /*halls*/
    ctx[3]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  let if_block = (
    /*$formText*/
    ctx[1] === "Admin Login" && create_if_block_1(ctx)
  );
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      t0 = text("Available Halls");
      t1 = space();
      div1 = element("div");
      t2 = text("Click to get more details");
      t3 = space();
      div2 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t4 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Available Halls");
      div0_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "Click to get more details");
      div1_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div2_nodes);
      }
      t4 = claim_space(div2_nodes);
      if (if_block)
        if_block.l(div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "heading svelte-1ewl7nd");
      attr(div1, "class", "sub-heading svelte-1ewl7nd");
      attr(div2, "class", "halls svelte-1ewl7nd");
      attr(div3, "class", "outer");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, t0);
      append_hydration(div3, t1);
      append_hydration(div3, div1);
      append_hydration(div1, t2);
      append_hydration(div3, t3);
      append_hydration(div3, div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div2, null);
      }
      append_hydration(div2, t4);
      if (if_block)
        if_block.m(div2, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*halls, undefined*/
      8) {
        each_value = /*halls*/
        ctx2[3];
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
            each_blocks[i].m(div2, t4);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      if (
        /*$formText*/
        ctx2[1] === "Admin Login"
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$formText*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div2, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      transition_in(if_block);
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_each(each_blocks, detaching);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_2(ctx) {
  let hallcard;
  let current;
  hallcard = new HallCard({ props: { info1: (
    /*hall*/
    ctx[5]
  ) } });
  return {
    c() {
      create_component(hallcard.$$.fragment);
    },
    l(nodes) {
      claim_component(hallcard.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(hallcard, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(hallcard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(hallcard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(hallcard, detaching);
    }
  };
}
function create_each_block(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*hall*/
    ctx[5]["name"] !== void 0 && create_if_block_2(ctx)
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*hall*/
        ctx2[5]["name"] !== void 0
      )
        if_block.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1(ctx) {
  let addhallcard;
  let t;
  let previous_key = (
    /*$info*/
    ctx[2]
  );
  let key_block_anchor;
  let current;
  addhallcard = new AddHallCard({});
  let key_block = create_key_block();
  return {
    c() {
      create_component(addhallcard.$$.fragment);
      t = space();
      key_block.c();
      key_block_anchor = empty();
    },
    l(nodes) {
      claim_component(addhallcard.$$.fragment, nodes);
      t = claim_space(nodes);
      key_block.l(nodes);
      key_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(addhallcard, target, anchor);
      insert_hydration(target, t, anchor);
      key_block.m(target, anchor);
      insert_hydration(target, key_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*$info*/
      4 && safe_not_equal(previous_key, previous_key = /*$info*/
      ctx2[2])) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block();
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(addhallcard.$$.fragment, local);
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(addhallcard.$$.fragment, local);
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      destroy_component(addhallcard, detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
    }
  };
}
function create_key_block(ctx) {
  let addhallform;
  let current;
  addhallform = new AddHallForm({});
  return {
    c() {
      create_component(addhallform.$$.fragment);
    },
    l(nodes) {
      claim_component(addhallform.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(addhallform, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(addhallform.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(addhallform.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(addhallform, detaching);
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$validUser*/
      ctx2[0] === true
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
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
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $validUser;
  let $formText;
  let $info;
  component_subscribe($$self, validUser, ($$value) => $$invalidate(0, $validUser = $$value));
  component_subscribe($$self, formText, ($$value) => $$invalidate(1, $formText = $$value));
  component_subscribe($$self, info, ($$value) => $$invalidate(2, $info = $$value));
  let { data } = $$props;
  const halls = data["halls"];
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(4, data = $$props2.data);
  };
  return [$validUser, $formText, $info, halls, data];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 4 });
  }
}
export {
  Page as default
};
