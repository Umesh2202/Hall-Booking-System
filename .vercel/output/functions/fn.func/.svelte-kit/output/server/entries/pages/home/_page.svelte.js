import { c as create_ssr_component, a as subscribe, e as escape, n as null_to_empty, b as add_attribute, v as validate_component } from "../../../chunks/index3.js";
import { v as validUser, f as formText } from "../../../chunks/store.js";
import { a as add } from "../../../chunks/add.js";
const top_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".heading.svelte-1mifo9q{font-size:var(--font2);color:var(--white);font-weight:600;letter-spacing:-2px}.info.svelte-1mifo9q{font-size:2rem;word-wrap:break-word;color:var(--yellow);width:50%;font-weight:500;position:relative;padding-bottom:1em}.info.svelte-1mifo9q:after{position:absolute;content:'';border:2px solid var(--white);width:100%;bottom:-5%;left:0}",
  map: null
};
const Top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="heading svelte-1mifo9q">Hall Booking System</div>
<div class="info svelte-1mifo9q">A comprehensive hall booking system meant to simplify managing halls</div>`;
});
const option_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".container.svelte-m0nz3d{box-sizing:border-box;padding-bottom:4em;margin-top:2em}.options.svelte-m0nz3d{display:grid;grid-template-columns:repeat(2, 15vw);gap:1.5em}button.svelte-m0nz3d{padding:0.8em 0.5em;color:var(--blue);background-color:var(--white);font-size:1.5rem;border-radius:0.3em;font-weight:500;width:100%;box-shadow:2px 2px 8px var(--shadow);transition:all 0.3s}button.svelte-m0nz3d:hover{box-shadow:10px 10px 10px var(--shadow)}.hidden.svelte-m0nz3d{display:none}",
  map: null
};
const Option = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $validUser, $$unsubscribe_validUser;
  let $$unsubscribe_formText;
  $$unsubscribe_validUser = subscribe(validUser, (value) => $validUser = value);
  $$unsubscribe_formText = subscribe(formText, (value) => value);
  $$result.css.add(css$3);
  $$unsubscribe_validUser();
  $$unsubscribe_formText();
  return `<div class="container svelte-m0nz3d"><div class="${escape(null_to_empty(`options `), true) + " svelte-m0nz3d"}"><a${add_attribute("href", `${$validUser === true ? "/halls" : "/userForm"}`, 0)}><button class="svelte-m0nz3d">${escape(`${$validUser === true ? "Book a hall" : "SignUp"}`)}</button></a></div>
</div>`;
});
const tick = "/_app/immutable/assets/tick.d05000a3.svg";
const cross = "/_app/immutable/assets/cross.679ffe62.svg";
const featureCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".feature.svelte-1hfk3yc{padding:2em;border-radius:1em;background-color:#f8f9fa;box-shadow:2px 2px 8px var(--shadow);display:grid;justify-items:center}.title.svelte-1hfk3yc{font-size:2.5rem;margin-top:1em;font-weight:500}.desc.svelte-1hfk3yc{line-height:1.3em;width:80%;margin-top:3em;font-size:1.3rem;font-weight:500}",
  map: null
};
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { svg } = $$props;
  let { feature } = $$props;
  let { desc } = $$props;
  if ($$props.svg === void 0 && $$bindings.svg && svg !== void 0)
    $$bindings.svg(svg);
  if ($$props.feature === void 0 && $$bindings.feature && feature !== void 0)
    $$bindings.feature(feature);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  $$result.css.add(css$2);
  return `<div class="feature svelte-1hfk3yc"><img${add_attribute("src", svg, 0)} alt="">
	<div class="title svelte-1hfk3yc">${escape(feature)}</div>
	<div class="desc svelte-1hfk3yc">${escape(desc)}</div>
</div>`;
});
const info_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-12j85pr{background-color:var(--white);border-radius:1em;display:grid;justify-content:center;color:var(--grey);width:65vw;padding:4em;line-height:3.3em;text-align:center;box-shadow:5px 5px 72px #1e2e3280}.feature-head.svelte-12j85pr{font-size:3rem;font-weight:500;margin-bottom:2em}.features.svelte-12j85pr{display:grid;grid-template-columns:repeat(3, 1fr);gap:2em}",
  map: null
};
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container svelte-12j85pr"><div class="feature-head svelte-12j85pr">Supported features that you <br> can rely safely on</div>
	<div class="features svelte-12j85pr">${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      svg: tick,
      feature: "Book",
      desc: "Book a hall from the given options. Set date and time of the booking "
    },
    {},
    {}
  )}
		${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      svg: cross,
      feature: "Cancel",
      desc: "Book a hall from the given options. Set date and time of the booking "
    },
    {},
    {}
  )}
		${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      svg: add,
      feature: "Add",
      desc: "Book a hall from the given options. Set date and time of the booking "
    },
    {},
    {}
  )}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".home.svelte-exj9jz{padding-bottom:3em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="home svelte-exj9jz">${validate_component(Top, "Top").$$render($$result, {}, {}, {})}
	${validate_component(Option, "Option").$$render($$result, {}, {}, {})}
	${validate_component(Info, "Info").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
