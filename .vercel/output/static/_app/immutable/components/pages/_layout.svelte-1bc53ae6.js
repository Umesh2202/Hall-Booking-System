import { D as identity, S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, g as group_outros, t as transition_out, d as check_outros, f as transition_in, F as component_subscribe, G as null_to_empty, H as listen, I as add_render_callback, J as create_in_transition, K as create_out_transition, L as run_all, C as noop, M as create_slot, x as create_component, y as claim_component, z as mount_component, N as update_slot_base, O as get_all_dirty_from_scope, P as get_slot_changes, A as destroy_component } from "../../chunks/index-42505854.js";
import { s as signOut, g as goto, a as auth } from "../../chunks/navigation-87bca023.js";
import { v as validUser, f as formText } from "../../chunks/store-44f3bbc0.js";
const app = "";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u) => `
			transform: ${transform} scale(${1 - sd * u});
			opacity: ${target_opacity - od * u}
		`
  };
}
const navbar_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let div;
  let button;
  let t0;
  let t1;
  let div_class_value;
  let div_intro;
  let div_outro;
  let current;
  let mounted;
  let dispose;
  let if_block = !/*hideLoginConf*/
  ctx[0] && create_if_block_1(ctx);
  return {
    c() {
      div = element("div");
      button = element("button");
      t0 = text("Logout");
      t1 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t0 = claim_text(button_nodes, "Logout");
      button_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "anchor svelte-qjzqi3");
      attr(div, "class", div_class_value = null_to_empty(`nav-item ${/*$validUser*/
      ctx[1] === false ? "hidden" : ""}`) + " svelte-qjzqi3");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, t0);
      append_hydration(div, t1);
      if (if_block)
        if_block.m(div, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_2*/
          ctx[5]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!/*hideLoginConf*/
      ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*hideLoginConf*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & /*$validUser*/
      2 && div_class_value !== (div_class_value = null_to_empty(`nav-item ${/*$validUser*/
      ctx2[1] === false ? "hidden" : ""}`) + " svelte-qjzqi3")) {
        attr(div, "class", div_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      add_render_callback(() => {
        if (div_outro)
          div_outro.end(1);
        div_intro = create_in_transition(div, fade, { delay: 1e3 });
        div_intro.start();
      });
      current = true;
    },
    o(local) {
      transition_out(if_block);
      if (div_intro)
        div_intro.invalidate();
      div_outro = create_out_transition(div, fade, { duration: 0 });
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      if (detaching && div_outro)
        div_outro.end();
      mounted = false;
      dispose();
    }
  };
}
function create_if_block(ctx) {
  let a0;
  let div0;
  let button0;
  let t0;
  let button0_disabled_value;
  let div0_class_value;
  let a0_intro;
  let a0_outro;
  let t1;
  let a1;
  let div1;
  let button1;
  let t2;
  let button1_disabled_value;
  let div1_class_value;
  let a1_intro;
  let a1_outro;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      a0 = element("a");
      div0 = element("div");
      button0 = element("button");
      t0 = text("User Login");
      t1 = space();
      a1 = element("a");
      div1 = element("div");
      button1 = element("button");
      t2 = text("Admin Login");
      this.h();
    },
    l(nodes) {
      a0 = claim_element(nodes, "A", { href: true });
      var a0_nodes = children(a0);
      div0 = claim_element(a0_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button0 = claim_element(div0_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t0 = claim_text(button0_nodes, "User Login");
      button0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      a0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      a1 = claim_element(nodes, "A", { href: true });
      var a1_nodes = children(a1);
      div1 = claim_element(a1_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t2 = claim_text(button1_nodes, "Admin Login");
      button1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      a1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button0, "class", "anchor svelte-qjzqi3");
      button0.disabled = button0_disabled_value = /*$validUser*/
      ctx[1] === true ? true : false;
      attr(div0, "class", div0_class_value = null_to_empty(`nav-item ${/*$validUser*/
      ctx[1] === true ? "hidden" : ""}`) + " svelte-qjzqi3");
      attr(a0, "href", "/userForm");
      attr(button1, "class", "anchor svelte-qjzqi3");
      button1.disabled = button1_disabled_value = /*$validUser*/
      ctx[1] === true ? true : false;
      attr(div1, "class", div1_class_value = null_to_empty(`nav-item ${/*$validUser*/
      ctx[1] === true ? "hidden" : ""}`) + " svelte-qjzqi3");
      attr(a1, "href", "/userForm");
    },
    m(target, anchor) {
      insert_hydration(target, a0, anchor);
      append_hydration(a0, div0);
      append_hydration(div0, button0);
      append_hydration(button0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, a1, anchor);
      append_hydration(a1, div1);
      append_hydration(div1, button1);
      append_hydration(button1, t2);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[3]
          ),
          listen(
            button1,
            "click",
            /*click_handler_1*/
            ctx[4]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*$validUser*/
      2 && button0_disabled_value !== (button0_disabled_value = /*$validUser*/
      ctx2[1] === true ? true : false)) {
        button0.disabled = button0_disabled_value;
      }
      if (!current || dirty & /*$validUser*/
      2 && div0_class_value !== (div0_class_value = null_to_empty(`nav-item ${/*$validUser*/
      ctx2[1] === true ? "hidden" : ""}`) + " svelte-qjzqi3")) {
        attr(div0, "class", div0_class_value);
      }
      if (!current || dirty & /*$validUser*/
      2 && button1_disabled_value !== (button1_disabled_value = /*$validUser*/
      ctx2[1] === true ? true : false)) {
        button1.disabled = button1_disabled_value;
      }
      if (!current || dirty & /*$validUser*/
      2 && div1_class_value !== (div1_class_value = null_to_empty(`nav-item ${/*$validUser*/
      ctx2[1] === true ? "hidden" : ""}`) + " svelte-qjzqi3")) {
        attr(div1, "class", div1_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (a0_outro)
          a0_outro.end(1);
        a0_intro = create_in_transition(a0, fade, { delay: 1e3 });
        a0_intro.start();
      });
      add_render_callback(() => {
        if (a1_outro)
          a1_outro.end(1);
        a1_intro = create_in_transition(a1, fade, { delay: 1e3 });
        a1_intro.start();
      });
      current = true;
    },
    o(local) {
      if (a0_intro)
        a0_intro.invalidate();
      a0_outro = create_out_transition(a0, fade, { duration: 500 });
      if (a1_intro)
        a1_intro.invalidate();
      a1_outro = create_out_transition(a1, fade, { duration: 500 });
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a0);
      if (detaching && a0_outro)
        a0_outro.end();
      if (detaching)
        detach(t1);
      if (detaching)
        detach(a1);
      if (detaching && a1_outro)
        a1_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1(ctx) {
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let button0;
  let t2;
  let t3;
  let button1;
  let t4;
  let div2_intro;
  let div2_outro;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("Are you sure you want to Logout?");
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
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Are you sure you want to Logout?");
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
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
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button0, "class", "decide yes svelte-qjzqi3");
      attr(button1, "class", "decide no svelte-qjzqi3");
      attr(div1, "class", "conf-buttons svelte-qjzqi3");
      attr(div2, "class", "confirmation svelte-qjzqi3");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, button0);
      append_hydration(button0, t2);
      append_hydration(div1, t3);
      append_hydration(div1, button1);
      append_hydration(button1, t4);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler_3*/
            ctx[6]
          ),
          listen(
            button1,
            "click",
            /*click_handler_4*/
            ctx[7]
          )
        ];
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (div2_outro)
          div2_outro.end(1);
        div2_intro = create_in_transition(div2, scale, {});
        div2_intro.start();
      });
      current = true;
    },
    o(local) {
      if (div2_intro)
        div2_intro.invalidate();
      div2_outro = create_out_transition(div2, scale, {});
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (detaching && div2_outro)
        div2_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$2(ctx) {
  let div4;
  let div2;
  let div0;
  let a0;
  let t0;
  let t1;
  let div1;
  let a1;
  let t2;
  let t3;
  let div3;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$validUser*/
      ctx2[1] === false
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div4 = element("div");
      div2 = element("div");
      div0 = element("div");
      a0 = element("a");
      t0 = text("Home");
      t1 = space();
      div1 = element("div");
      a1 = element("a");
      t2 = text("About");
      t3 = space();
      div3 = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "Home");
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      a1 = claim_element(div1_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "About");
      a1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t3 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      if_block.l(div3_nodes);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/");
      attr(a0, "class", "anchor svelte-qjzqi3");
      attr(div0, "class", "nav-item svelte-qjzqi3");
      attr(a1, "href", "/about");
      attr(a1, "class", "anchor svelte-qjzqi3");
      attr(div1, "class", "nav-item svelte-qjzqi3");
      attr(div2, "class", "inner svelte-qjzqi3");
      attr(div3, "class", "inner svelte-qjzqi3");
      attr(div4, "class", "outer svelte-qjzqi3");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div2);
      append_hydration(div2, div0);
      append_hydration(div0, a0);
      append_hydration(a0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, a1);
      append_hydration(a1, t2);
      append_hydration(div4, t3);
      append_hydration(div4, div3);
      if_blocks[current_block_type_index].m(div3, null);
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
        if_block.m(div3, null);
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
        detach(div4);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $validUser;
  component_subscribe($$self, validUser, ($$value) => $$invalidate(1, $validUser = $$value));
  validUser.set(JSON.parse($validUser));
  let hideLoginConf = true;
  const logOut = () => {
    signOut(auth);
    validUser.set(false);
    goto("/");
  };
  const click_handler = () => {
    formText.set("User Login");
  };
  const click_handler_1 = () => formText.set("Admin Login");
  const click_handler_2 = () => {
    $$invalidate(0, hideLoginConf = !hideLoginConf);
  };
  const click_handler_3 = () => {
    $$invalidate(0, hideLoginConf = true);
    formText.set("");
    logOut();
  };
  const click_handler_4 = () => {
    $$invalidate(0, hideLoginConf = true);
  };
  return [
    hideLoginConf,
    $validUser,
    logOut,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4
  ];
}
class Navbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$2, safe_not_equal, {});
  }
}
const footer_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div1;
  let div0;
  let t;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t = text("🄯 All Rights Reserved");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t = claim_text(div0_nodes, "🄯 All Rights Reserved");
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "rights");
      attr(div1, "class", "outer svelte-bh61rd");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
    }
  };
}
class Footer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const loading_svelte_svelte_type_style_lang = "";
const _layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let navbar;
  let t0;
  let div;
  let t1;
  let footer;
  let current;
  navbar = new Navbar({});
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  footer = new Footer({});
  return {
    c() {
      create_component(navbar.$$.fragment);
      t0 = space();
      div = element("div");
      if (default_slot)
        default_slot.c();
      t1 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(navbar.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(div, "class", "bg svelte-b7a15z");
    },
    m(target, anchor) {
      mount_component(navbar, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      insert_hydration(target, t1, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(navbar.$$.fragment, local);
      transition_in(default_slot, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(navbar.$$.fragment, local);
      transition_out(default_slot, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navbar, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      destroy_component(footer, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
