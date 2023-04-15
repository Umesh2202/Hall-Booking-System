import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, E as append_hydration, C as noop, G as null_to_empty, H as listen, u as set_data, F as component_subscribe, Q as src_url_equal, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../../chunks/index-42505854.js";
import { v as validUser, f as formText } from "../../../chunks/store-44f3bbc0.js";
import { a as add } from "../../../chunks/add-11ea7e63.js";
const top_svelte_svelte_type_style_lang = "";
function create_fragment$4(ctx) {
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  return {
    c() {
      div0 = element("div");
      t0 = text("Hall Booking System");
      t1 = space();
      div1 = element("div");
      t2 = text("A comprehensive hall booking system meant to simplify managing halls");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Hall Booking System");
      div0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "A comprehensive hall booking system meant to simplify managing halls");
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "heading svelte-1mifo9q");
      attr(div1, "class", "info svelte-1mifo9q");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
    }
  };
}
class Top extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$4, safe_not_equal, {});
  }
}
const option_svelte_svelte_type_style_lang = "";
function create_fragment$3(ctx) {
  let div1;
  let div0;
  let a;
  let button;
  let t_value = `${/*$validUser*/
  ctx[0] === true ? "Book a hall" : "SignUp"}`;
  let t;
  let a_href_value;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      a = element("a");
      button = element("button");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { href: true });
      var a_nodes = children(a);
      button = claim_element(a_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, t_value);
      button_nodes.forEach(detach);
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "svelte-m0nz3d");
      attr(a, "href", a_href_value = `${/*$validUser*/
      ctx[0] === true ? "/halls" : "/userForm"}`);
      attr(div0, "class", null_to_empty(`options `) + " svelte-m0nz3d");
      attr(div1, "class", "container svelte-m0nz3d");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, a);
      append_hydration(a, button);
      append_hydration(button, t);
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
    p(ctx2, [dirty]) {
      if (dirty & /*$validUser*/
      1 && t_value !== (t_value = `${/*$validUser*/
      ctx2[0] === true ? "Book a hall" : "SignUp"}`))
        set_data(t, t_value);
      if (dirty & /*$validUser*/
      1 && a_href_value !== (a_href_value = `${/*$validUser*/
      ctx2[0] === true ? "/halls" : "/userForm"}`)) {
        attr(a, "href", a_href_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $validUser;
  let $formText;
  component_subscribe($$self, validUser, ($$value) => $$invalidate(0, $validUser = $$value));
  component_subscribe($$self, formText, ($$value) => $$invalidate(1, $formText = $$value));
  const click_handler = () => {
    if ($formText === "SignUp" || $formText === "") {
      formText.set("SignUp");
    }
  };
  return [$validUser, $formText, click_handler];
}
class Option extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$3, safe_not_equal, {});
  }
}
const tick = "" + new URL("../../../assets/tick-d05000a3.svg", import.meta.url).href;
const cross = "" + new URL("../../../assets/cross-679ffe62.svg", import.meta.url).href;
const featureCard_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div2;
  let img;
  let img_src_value;
  let t0;
  let div0;
  let t1;
  let t2;
  let div1;
  let t3;
  return {
    c() {
      div2 = element("div");
      img = element("img");
      t0 = space();
      div0 = element("div");
      t1 = text(
        /*feature*/
        ctx[1]
      );
      t2 = space();
      div1 = element("div");
      t3 = text(
        /*desc*/
        ctx[2]
      );
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      img = claim_element(div2_nodes, "IMG", { src: true, alt: true });
      t0 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t1 = claim_text(
        div0_nodes,
        /*feature*/
        ctx[1]
      );
      div0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t3 = claim_text(
        div1_nodes,
        /*desc*/
        ctx[2]
      );
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*svg*/
      ctx[0]))
        attr(img, "src", img_src_value);
      attr(img, "alt", "");
      attr(div0, "class", "title svelte-1hfk3yc");
      attr(div1, "class", "desc svelte-1hfk3yc");
      attr(div2, "class", "feature svelte-1hfk3yc");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, img);
      append_hydration(div2, t0);
      append_hydration(div2, div0);
      append_hydration(div0, t1);
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      append_hydration(div1, t3);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*svg*/
      1 && !src_url_equal(img.src, img_src_value = /*svg*/
      ctx2[0])) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*feature*/
      2)
        set_data(
          t1,
          /*feature*/
          ctx2[1]
        );
      if (dirty & /*desc*/
      4)
        set_data(
          t3,
          /*desc*/
          ctx2[2]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { svg } = $$props;
  let { feature } = $$props;
  let { desc } = $$props;
  $$self.$$set = ($$props2) => {
    if ("svg" in $$props2)
      $$invalidate(0, svg = $$props2.svg);
    if ("feature" in $$props2)
      $$invalidate(1, feature = $$props2.feature);
    if ("desc" in $$props2)
      $$invalidate(2, desc = $$props2.desc);
  };
  return [svg, feature, desc];
}
class FeatureCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$2, safe_not_equal, { svg: 0, feature: 1, desc: 2 });
  }
}
const info_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div2;
  let div0;
  let t0;
  let br;
  let t1;
  let t2;
  let div1;
  let featurecard0;
  let t3;
  let featurecard1;
  let t4;
  let featurecard2;
  let current;
  featurecard0 = new FeatureCard({
    props: {
      svg: tick,
      feature: "Book",
      desc: "Book a hall from the given options. Set date and time of the booking "
    }
  });
  featurecard1 = new FeatureCard({
    props: {
      svg: cross,
      feature: "Cancel",
      desc: "Book a hall from the given options. Set date and time of the booking "
    }
  });
  featurecard2 = new FeatureCard({
    props: {
      svg: add,
      feature: "Add",
      desc: "Book a hall from the given options. Set date and time of the booking "
    }
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("Supported features that you ");
      br = element("br");
      t1 = text(" can rely safely on");
      t2 = space();
      div1 = element("div");
      create_component(featurecard0.$$.fragment);
      t3 = space();
      create_component(featurecard1.$$.fragment);
      t4 = space();
      create_component(featurecard2.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Supported features that you ");
      br = claim_element(div0_nodes, "BR", {});
      t1 = claim_text(div0_nodes, " can rely safely on");
      div0_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(featurecard0.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      claim_component(featurecard1.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(featurecard2.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "feature-head svelte-12j85pr");
      attr(div1, "class", "features svelte-12j85pr");
      attr(div2, "class", "container svelte-12j85pr");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div0, br);
      append_hydration(div0, t1);
      append_hydration(div2, t2);
      append_hydration(div2, div1);
      mount_component(featurecard0, div1, null);
      append_hydration(div1, t3);
      mount_component(featurecard1, div1, null);
      append_hydration(div1, t4);
      mount_component(featurecard2, div1, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(featurecard0.$$.fragment, local);
      transition_in(featurecard1.$$.fragment, local);
      transition_in(featurecard2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(featurecard0.$$.fragment, local);
      transition_out(featurecard1.$$.fragment, local);
      transition_out(featurecard2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(featurecard0);
      destroy_component(featurecard1);
      destroy_component(featurecard2);
    }
  };
}
class Info extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div;
  let top;
  let t0;
  let option;
  let t1;
  let info;
  let current;
  top = new Top({});
  option = new Option({});
  info = new Info({});
  return {
    c() {
      div = element("div");
      create_component(top.$$.fragment);
      t0 = space();
      create_component(option.$$.fragment);
      t1 = space();
      create_component(info.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(top.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(option.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(info.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "home svelte-exj9jz");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(top, div, null);
      append_hydration(div, t0);
      mount_component(option, div, null);
      append_hydration(div, t1);
      mount_component(info, div, null);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(top.$$.fragment, local);
      transition_in(option.$$.fragment, local);
      transition_in(info.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(top.$$.fragment, local);
      transition_out(option.$$.fragment, local);
      transition_out(info.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(top);
      destroy_component(option);
      destroy_component(info);
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
