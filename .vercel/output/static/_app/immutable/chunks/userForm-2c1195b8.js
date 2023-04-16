import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, u as set_data, C as noop, R as set_input_value, H as listen, L as run_all, e as empty, F as component_subscribe, G as null_to_empty, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "./index-42505854.js";
import { a as axios } from "./axios-b3c02076.js";
import { c as createUserWithEmailAndPassword, b as signInWithEmailAndPassword, a as auth, g as goto } from "./navigation-87bca023.js";
import { e as email, p as password, c as popup, d as adminInfo, f as formText, u as userId, v as validUser } from "./store-44f3bbc0.js";
const formInput_svelte_svelte_type_style_lang = "";
function create_if_block_1(ctx) {
  let input;
  let input_placeholder_value;
  let input_autocomplete_value;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", {
        type: true,
        name: true,
        id: true,
        placeholder: true,
        autocomplete: true,
        class: true
      });
      this.h();
    },
    h() {
      attr(input, "type", "email");
      attr(input, "name", "email");
      attr(input, "id", "email");
      attr(input, "placeholder", input_placeholder_value = `Type your ${/*field*/
      ctx[0]}`);
      attr(input, "autocomplete", input_autocomplete_value = `${/*field*/
      ctx[0]}`);
      attr(input, "class", "sm:text-sm text-input svelte-12re45x");
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      set_input_value(
        input,
        /*value*/
        ctx[1]
      );
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler_1*/
            ctx[4]
          ),
          listen(
            input,
            "change",
            /*update*/
            ctx[2]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*field*/
      1 && input_placeholder_value !== (input_placeholder_value = `Type your ${/*field*/
      ctx2[0]}`)) {
        attr(input, "placeholder", input_placeholder_value);
      }
      if (dirty & /*field*/
      1 && input_autocomplete_value !== (input_autocomplete_value = `${/*field*/
      ctx2[0]}`)) {
        attr(input, "autocomplete", input_autocomplete_value);
      }
      if (dirty & /*value*/
      2 && input.value !== /*value*/
      ctx2[1]) {
        set_input_value(
          input,
          /*value*/
          ctx2[1]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$2(ctx) {
  let input;
  let input_placeholder_value;
  let input_autocomplete_value;
  let mounted;
  let dispose;
  return {
    c() {
      input = element("input");
      this.h();
    },
    l(nodes) {
      input = claim_element(nodes, "INPUT", {
        type: true,
        name: true,
        id: true,
        placeholder: true,
        autocomplete: true,
        class: true
      });
      this.h();
    },
    h() {
      attr(input, "type", "password");
      attr(input, "name", "pwd");
      attr(input, "id", "pwd");
      attr(input, "placeholder", input_placeholder_value = `Type your ${/*field*/
      ctx[0]}`);
      attr(input, "autocomplete", input_autocomplete_value = `${/*field*/
      ctx[0]}`);
      attr(input, "class", "sm:text-sm text-input svelte-12re45x");
    },
    m(target, anchor) {
      insert_hydration(target, input, anchor);
      set_input_value(
        input,
        /*value*/
        ctx[1]
      );
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[3]
          ),
          listen(
            input,
            "change",
            /*update*/
            ctx[2]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*field*/
      1 && input_placeholder_value !== (input_placeholder_value = `Type your ${/*field*/
      ctx2[0]}`)) {
        attr(input, "placeholder", input_placeholder_value);
      }
      if (dirty & /*field*/
      1 && input_autocomplete_value !== (input_autocomplete_value = `${/*field*/
      ctx2[0]}`)) {
        attr(input, "autocomplete", input_autocomplete_value);
      }
      if (dirty & /*value*/
      2 && input.value !== /*value*/
      ctx2[1]) {
        set_input_value(
          input,
          /*value*/
          ctx2[1]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(input);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$3(ctx) {
  let div;
  let label;
  let t0;
  let label_for_value;
  let t1;
  function select_block_type(ctx2, dirty) {
    if (
      /*field*/
      ctx2[0] === "Password"
    )
      return create_if_block$2;
    if (
      /*field*/
      ctx2[0] === "Email"
    )
      return create_if_block_1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type && current_block_type(ctx);
  return {
    c() {
      div = element("div");
      label = element("label");
      t0 = text(
        /*field*/
        ctx[0]
      );
      t1 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      label = claim_element(div_nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      t0 = claim_text(
        label_nodes,
        /*field*/
        ctx[0]
      );
      label_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label, "for", label_for_value = `${/*field*/
      ctx[0]}`);
      attr(label, "class", " svelte-12re45x");
      attr(div, "class", "container svelte-12re45x");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, label);
      append_hydration(label, t0);
      append_hydration(div, t1);
      if (if_block)
        if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*field*/
      1)
        set_data(
          t0,
          /*field*/
          ctx2[0]
        );
      if (dirty & /*field*/
      1 && label_for_value !== (label_for_value = `${/*field*/
      ctx2[0]}`)) {
        attr(label, "for", label_for_value);
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if (if_block)
          if_block.d(1);
        if_block = current_block_type && current_block_type(ctx2);
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
      if (if_block) {
        if_block.d();
      }
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { field } = $$props;
  let value;
  const update = () => {
    field === "Email" ? email.set(value) : password.set(value);
  };
  function input_input_handler() {
    value = this.value;
    $$invalidate(1, value);
  }
  function input_input_handler_1() {
    value = this.value;
    $$invalidate(1, value);
  }
  $$self.$$set = ($$props2) => {
    if ("field" in $$props2)
      $$invalidate(0, field = $$props2.field);
  };
  return [field, value, update, input_input_handler, input_input_handler_1];
}
class FormInput extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { field: 0 });
  }
}
const popup_svelte_svelte_type_style_lang = "";
function create_if_block$1(ctx) {
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let div1_class_value;
  let div2_class_value;
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(
        /*message*/
        ctx[0]
      );
      t1 = space();
      div1 = element("div");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(
        div0_nodes,
        /*message*/
        ctx[0]
      );
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      children(div1).forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "message svelte-1arhpoc");
      attr(div1, "class", div1_class_value = null_to_empty(`progress-bar ${/*$popup*/
      ctx[1] === "true" ? "progress" : "complete"}`) + " svelte-1arhpoc");
      attr(div2, "class", div2_class_value = null_to_empty(`container ${/*$popup*/
      ctx[1] === "true" ? "open-popup" : "close-popup"}`) + " svelte-1arhpoc");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
    },
    p(ctx2, dirty) {
      if (dirty & /*message*/
      1)
        set_data(
          t0,
          /*message*/
          ctx2[0]
        );
      if (dirty & /*$popup*/
      2 && div1_class_value !== (div1_class_value = null_to_empty(`progress-bar ${/*$popup*/
      ctx2[1] === "true" ? "progress" : "complete"}`) + " svelte-1arhpoc")) {
        attr(div1, "class", div1_class_value);
      }
      if (dirty & /*$popup*/
      2 && div2_class_value !== (div2_class_value = null_to_empty(`container ${/*$popup*/
      ctx2[1] === "true" ? "open-popup" : "close-popup"}`) + " svelte-1arhpoc")) {
        attr(div2, "class", div2_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(div2);
    }
  };
}
function create_fragment$2(ctx) {
  let if_block_anchor;
  let if_block = (
    /*$popup*/
    ctx[1] !== "" && create_if_block$1(ctx)
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
    },
    p(ctx2, [dirty]) {
      if (
        /*$popup*/
        ctx2[1] !== ""
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$1(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let $popup;
  component_subscribe($$self, popup, ($$value) => $$invalidate(1, $popup = $$value));
  let { message } = $$props;
  $$self.$$set = ($$props2) => {
    if ("message" in $$props2)
      $$invalidate(0, message = $$props2.message);
  };
  return [message, $popup];
}
class Popup extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { message: 0 });
  }
}
const formAction = async (formText2, email2, password2) => {
  let user;
  if (formText2 === "SignUp") {
    user = await createUserWithEmailAndPassword(auth, email2, password2);
  } else if (formText2 === "User Login") {
    user = await signInWithEmailAndPassword(auth, email2, password2);
  } else if (formText2 === "Admin Login") {
    if (!(adminInfo["email"] === email2 && adminInfo["password"] === password2)) {
      throw new Error("Invalid email or password");
    }
  }
  return user;
};
const noAccount_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let div;
  let t0;
  let t1;
  let button;
  let t2;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      t0 = text("Already have an account?");
      t1 = space();
      button = element("button");
      t2 = text("Login");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "Already have an account?");
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t2 = claim_text(button_nodes, "Login");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "signup svelte-quz334");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, t2);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler_1*/
          ctx[3]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block(ctx) {
  let div;
  let t0;
  let t1;
  let button;
  let t2;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      t0 = text("Don't have an account?");
      t1 = space();
      button = element("button");
      t2 = text("SignUp");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, "Don't have an account?");
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t2 = claim_text(button_nodes, "SignUp");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "signup svelte-quz334");
      button.disabled = /*disable_button*/
      ctx[0];
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, t2);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*disable_button*/
      1) {
        button.disabled = /*disable_button*/
        ctx2[0];
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  let div_class_value;
  function select_block_type(ctx2, dirty) {
    if (
      /*$formText*/
      ctx2[1] !== "SignUp"
    )
      return create_if_block;
    return create_else_block;
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
      attr(div, "class", div_class_value = null_to_empty(`noaccount ${/*$formText*/
      ctx[1] === "SignUp" ? "hidden" : ""}`) + " svelte-quz334");
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
      if (dirty & /*$formText*/
      2 && div_class_value !== (div_class_value = null_to_empty(`noaccount ${/*$formText*/
      ctx2[1] === "SignUp" ? "hidden" : ""}`) + " svelte-quz334")) {
        attr(div, "class", div_class_value);
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
  let $formText;
  component_subscribe($$self, formText, ($$value) => $$invalidate(1, $formText = $$value));
  let { disable_button } = $$props;
  const click_handler = () => {
    formText.set("SignUp");
    window.location.reload();
  };
  const click_handler_1 = () => {
    formText.set("User Login");
    window.location.reload();
  };
  $$self.$$set = ($$props2) => {
    if ("disable_button" in $$props2)
      $$invalidate(0, disable_button = $$props2.disable_button);
  };
  return [disable_button, $formText, click_handler, click_handler_1];
}
class NoAccount extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { disable_button: 0 });
  }
}
const userForm_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div3;
  let popup_1;
  let t0;
  let div2;
  let div0;
  let t1;
  let t2;
  let div1;
  let forminput0;
  let t3;
  let forminput1;
  let t4;
  let button;
  let t5;
  let button_class_value;
  let t6;
  let noaccount;
  let current;
  let mounted;
  let dispose;
  popup_1 = new Popup({ props: { message: (
    /*message*/
    ctx[0]
  ) } });
  forminput0 = new FormInput({ props: { field: "Email" } });
  forminput1 = new FormInput({ props: { field: "Password" } });
  noaccount = new NoAccount({
    props: {
      disable_button: (
        /*disable_button*/
        ctx[1]
      )
    }
  });
  return {
    c() {
      div3 = element("div");
      create_component(popup_1.$$.fragment);
      t0 = space();
      div2 = element("div");
      div0 = element("div");
      t1 = text(
        /*$formText*/
        ctx[2]
      );
      t2 = space();
      div1 = element("div");
      create_component(forminput0.$$.fragment);
      t3 = space();
      create_component(forminput1.$$.fragment);
      t4 = space();
      button = element("button");
      t5 = text("Next");
      t6 = space();
      create_component(noaccount.$$.fragment);
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(popup_1.$$.fragment, div3_nodes);
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t1 = claim_text(
        div0_nodes,
        /*$formText*/
        ctx[2]
      );
      div0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(forminput0.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      claim_component(forminput1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      button = claim_element(div2_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t5 = claim_text(button_nodes, "Next");
      button_nodes.forEach(detach);
      t6 = claim_space(div2_nodes);
      claim_component(noaccount.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "login svelte-xhq2ph");
      attr(div1, "class", "inner svelte-xhq2ph");
      attr(button, "class", button_class_value = null_to_empty(`next ${/*disable_button*/
      ctx[1] === true ? "disable" : ""}`) + " svelte-xhq2ph");
      button.disabled = /*disable_button*/
      ctx[1];
      attr(div2, "class", "container svelte-xhq2ph");
      attr(div3, "class", "form svelte-xhq2ph");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      mount_component(popup_1, div3, null);
      append_hydration(div3, t0);
      append_hydration(div3, div2);
      append_hydration(div2, div0);
      append_hydration(div0, t1);
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      mount_component(forminput0, div1, null);
      append_hydration(div1, t3);
      mount_component(forminput1, div1, null);
      append_hydration(div2, t4);
      append_hydration(div2, button);
      append_hydration(button, t5);
      append_hydration(div2, t6);
      mount_component(noaccount, div2, null);
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
      const popup_1_changes = {};
      if (dirty & /*message*/
      1)
        popup_1_changes.message = /*message*/
        ctx2[0];
      popup_1.$set(popup_1_changes);
      if (!current || dirty & /*$formText*/
      4)
        set_data(
          t1,
          /*$formText*/
          ctx2[2]
        );
      if (!current || dirty & /*disable_button*/
      2 && button_class_value !== (button_class_value = null_to_empty(`next ${/*disable_button*/
      ctx2[1] === true ? "disable" : ""}`) + " svelte-xhq2ph")) {
        attr(button, "class", button_class_value);
      }
      if (!current || dirty & /*disable_button*/
      2) {
        button.disabled = /*disable_button*/
        ctx2[1];
      }
      const noaccount_changes = {};
      if (dirty & /*disable_button*/
      2)
        noaccount_changes.disable_button = /*disable_button*/
        ctx2[1];
      noaccount.$set(noaccount_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(popup_1.$$.fragment, local);
      transition_in(forminput0.$$.fragment, local);
      transition_in(forminput1.$$.fragment, local);
      transition_in(noaccount.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(popup_1.$$.fragment, local);
      transition_out(forminput0.$$.fragment, local);
      transition_out(forminput1.$$.fragment, local);
      transition_out(noaccount.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(popup_1);
      destroy_component(forminput0);
      destroy_component(forminput1);
      destroy_component(noaccount);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $password;
  let $email;
  let $formText;
  component_subscribe($$self, password, ($$value) => $$invalidate(6, $password = $$value));
  component_subscribe($$self, email, ($$value) => $$invalidate(7, $email = $$value));
  component_subscribe($$self, formText, ($$value) => $$invalidate(2, $formText = $$value));
  let message = "";
  let login_flag = false;
  let disable_button = false;
  const addUser = async () => {
    try {
      $$invalidate(0, message = "Please wait");
      popup.set("true");
      const user = await formAction($formText, $email, $password);
      if ($formText !== "Admin Login" && user !== void 0) {
        userId.set(user["user"]["uid"]);
        axios.post("/api/users", { email: $email, password: $password });
      }
      email.set("");
      password.set("");
      login_flag = true;
    } catch (err) {
      $$invalidate(0, message = `${err.code}`);
      const error_text = message.slice(5, message.length);
      $$invalidate(0, message = error_text.toUpperCase());
      popup.set("true");
    }
    setTimeout(
      () => {
        popup.set("false");
        if (login_flag === true) {
          login_flag = false;
          goto("/halls");
          validUser.set(true);
        }
      },
      4e3
    );
  };
  const click_handler = () => {
    $$invalidate(1, disable_button = true);
    addUser();
    setTimeout(
      () => {
        $$invalidate(1, disable_button = false);
      },
      5e3
    );
  };
  return [message, disable_button, $formText, addUser, click_handler];
}
class UserForm extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  UserForm as U
};
