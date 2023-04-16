import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, y as claim_component, z as mount_component, C as noop, f as transition_in, t as transition_out, A as destroy_component } from "../../../chunks/index-42505854.js";
import { U as UserForm } from "../../../chunks/userForm-2c1195b8.js";
function create_fragment(ctx) {
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
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
