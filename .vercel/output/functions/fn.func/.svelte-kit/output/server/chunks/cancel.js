import { c as create_ssr_component, e as escape, d as null_to_empty } from "./index3.js";
const warning_svelte_svelte_type_style_lang = "";
const css = {
  code: ".warning.svelte-1rogiu8{font-size:1.3rem;color:#ff0000;text-align:center;display:block;visibility:hidden}.invalidDate.svelte-1rogiu8{visibility:visible}",
  map: null
};
const Warning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flag, label } = $$props;
  if ($$props.flag === void 0 && $$bindings.flag && flag !== void 0)
    $$bindings.flag(flag);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`warning ${flag === true ? "invalidDate" : ""}`), true) + " svelte-1rogiu8"}">${escape(label)}</div>`;
});
const cancel = "/_app/immutable/assets/cancel-a343a51a.svg";
export {
  Warning as W,
  cancel as c
};
