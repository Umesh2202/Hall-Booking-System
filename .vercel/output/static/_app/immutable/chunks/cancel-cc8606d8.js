import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, n as attr, G as null_to_empty, b as insert_hydration, E as append_hydration, u as set_data, C as noop } from "./index-42505854.js";
const warning_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let t;
  let div_class_value;
  return {
    c() {
      div = element("div");
      t = text(
        /*label*/
        ctx[1]
      );
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*label*/
        ctx[1]
      );
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = null_to_empty(`warning ${/*flag*/
      ctx[0] === true ? "invalidDate" : ""}`) + " svelte-1rogiu8");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*label*/
      2)
        set_data(
          t,
          /*label*/
          ctx2[1]
        );
      if (dirty & /*flag*/
      1 && div_class_value !== (div_class_value = null_to_empty(`warning ${/*flag*/
      ctx2[0] === true ? "invalidDate" : ""}`) + " svelte-1rogiu8")) {
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
function instance($$self, $$props, $$invalidate) {
  let { flag, label } = $$props;
  $$self.$$set = ($$props2) => {
    if ("flag" in $$props2)
      $$invalidate(0, flag = $$props2.flag);
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
  };
  return [flag, label];
}
class Warning extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { flag: 0, label: 1 });
  }
}
const cancel = "" + new URL("../assets/cancel-a343a51a.svg", import.meta.url).href;
export {
  Warning as W,
  cancel as c
};
