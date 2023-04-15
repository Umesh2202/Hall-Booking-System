import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, x as create_component, l as claim_element, m as children, y as claim_component, h as detach, n as attr, b as insert_hydration, z as mount_component, C as noop, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-42505854.js";
import Page$1 from "./home/_page.svelte-9d69b43a.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let home;
  let current;
  home = new Page$1({});
  return {
    c() {
      div = element("div");
      create_component(home.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(home.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "svelte-zwg08z");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(home, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(home.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(home.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(home);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
