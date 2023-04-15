import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { U as UserForm } from "../../../chunks/userForm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(UserForm, "UserForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
