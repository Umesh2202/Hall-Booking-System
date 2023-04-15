import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, l as claim_element, m as children, r as claim_text, h as detach, b as insert_hydration, E as append_hydration, C as noop } from "../../../chunks/index-42505854.js";
function create_fragment(ctx) {
  let h1;
  let t;
  return {
    c() {
      h1 = element("h1");
      t = text("This is about page");
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t = claim_text(h1_nodes, "This is about page");
      h1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
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
