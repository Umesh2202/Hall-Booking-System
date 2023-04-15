import { c as create_ssr_component, b as subscribe, e as escape, d as null_to_empty, v as validate_component } from "../../chunks/index3.js";
import "firebase/auth";
import "../../chunks/firebase2.js";
import { v as validUser } from "../../chunks/store.js";
const app = "";
const navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".outer.svelte-qjzqi3{display:grid;grid-template-columns:repeat(2, 1fr);width:100%;background-color:var(--white);box-shadow:2px 2px 8px var(--shadow);height:var(--nav)}.inner.svelte-qjzqi3{display:flex;margin:auto;padding:1em}.nav-item.svelte-qjzqi3{font-size:1.5rem;display:flex;position:relative}.hidden.svelte-qjzqi3{visibility:hidden;cursor:none}.anchor.svelte-qjzqi3{margin:0 0.5em;font-size:1.5rem;font-weight:600;color:#000000;display:flex;justify-content:center;align-items:center;transition:all 0.3s;position:relative}.anchor.svelte-qjzqi3::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:5px;bottom:0;left:0;background-color:var(--blue);transform-origin:bottom right;transition:transform 0.25s ease-out}.anchor.svelte-qjzqi3:hover::after{transform:scaleX(1);transform-origin:bottom left}.confirmation.svelte-qjzqi3{position:absolute;top:100%;right:-50%;background-color:var(--white);padding:1em;width:200%;border-radius:0.3em;font-size:1.2rem;font-weight:500}.conf-buttons.svelte-qjzqi3{display:grid;grid-template-columns:repeat(2, 1fr);gap:0.5em;margin-top:0.5em}.decide.svelte-qjzqi3{padding:0.5em;color:var(--white);border-radius:0.3em}.yes.svelte-qjzqi3{background-color:var(--red)}.no.svelte-qjzqi3{background-color:var(--blue)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $validUser, $$unsubscribe_validUser;
  $$unsubscribe_validUser = subscribe(validUser, (value) => $validUser = value);
  validUser.set(JSON.parse($validUser));
  $$result.css.add(css$2);
  $$unsubscribe_validUser();
  return `<div class="${"outer svelte-qjzqi3"}"><div class="${"inner svelte-qjzqi3"}">
		<div class="${"nav-item svelte-qjzqi3"}"><a href="${"/"}" class="${"anchor svelte-qjzqi3"}">Home</a></div>
		<div class="${"nav-item svelte-qjzqi3"}"><a href="${"/about"}" class="${"anchor svelte-qjzqi3"}">About</a></div></div>
	<div class="${"inner svelte-qjzqi3"}">${$validUser === false ? `<a href="${"/userForm"}"><div class="${escape(null_to_empty(`nav-item ${$validUser === true ? "hidden" : ""}`), true) + " svelte-qjzqi3"}"><button class="${"anchor svelte-qjzqi3"}" ${($validUser === true ? true : false) ? "disabled" : ""}>User Login</button></div></a>
			<a href="${"/userForm"}"><div class="${escape(null_to_empty(`nav-item ${$validUser === true ? "hidden" : ""}`), true) + " svelte-qjzqi3"}"><button class="${"anchor svelte-qjzqi3"}" ${($validUser === true ? true : false) ? "disabled" : ""}>Admin Login</button></div></a>` : `<div class="${escape(null_to_empty(`nav-item ${$validUser === false ? "hidden" : ""}`), true) + " svelte-qjzqi3"}"><button class="${"anchor svelte-qjzqi3"}">Logout</button>
				${``}</div>`}</div>
</div>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".outer.svelte-bh61rd{background-color:var(--white);width:100%;padding:0.5em;font-size:1rem;text-align:center;height:var(--foot);display:grid;justify-content:center;align-items:center}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"outer svelte-bh61rd"}"><div class="${"rights"}">🄯 All Rights Reserved</div>
</div>`;
});
const loading_svelte_svelte_type_style_lang = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap');:root{--nav:8vh;--foot:6vh;--min-height:calc(100vh - (var(--nav) + var(--foot)));--blue:#0075fc;--white:#f5f5f5;--shadow:#0000004d;--yellow:#ffc400;--grey:#474747;--red:#ff002b;--font1:7rem;--font2:5rem;--font3:4rem;--font4:3rem;--font5:2rem;--font6:1.3rem}*{font-family:'Readex Pro', sans-serif;margin:0;padding:0;box-sizing:border-box}.bg.svelte-b7a15z{min-height:var(--min-height);background-color:var(--blue);padding-bottom:2em;padding-top:3em}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<div class="${"bg svelte-b7a15z"}">
	
	
	${slots.default ? slots.default({}) : ``}
	</div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
