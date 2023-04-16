import { c as create_ssr_component, v as validate_component } from "../../chunks/index3.js";
import Page$1 from "./home/_page.svelte.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-zwg08z{display:grid;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-zwg08z">${validate_component(Page$1, "Home").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
