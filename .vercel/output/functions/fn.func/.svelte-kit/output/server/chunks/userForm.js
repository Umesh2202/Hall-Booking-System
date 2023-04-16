import { c as create_ssr_component, b as add_attribute, e as escape, a as subscribe, n as null_to_empty, v as validate_component } from "./index3.js";
import { p as popup, f as formText, j as password, k as email } from "./store.js";
import "firebase/auth";
import "./firebase2.js";
const formInput_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".container.svelte-12re45x{display:flex;flex-direction:column}label.svelte-12re45x{font-size:1.5rem;font-weight:400;margin-bottom:0.3em;color:#000000}.text-input.svelte-12re45x{width:100%;border-bottom:1px solid #000000;background-color:var(--white);padding:0.3em;font-size:1.6rem;margin-bottom:0.5em}.text-input.svelte-12re45x:focus{outline:3px solid var(--white)}",
  map: null
};
const FormInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field } = $$props;
  let value;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  $$result.css.add(css$3);
  return `<div class="container svelte-12re45x"><label${add_attribute("for", `${field}`, 0)} class=" svelte-12re45x">${escape(field)}</label>
	${field === "Password" ? `<input type="password" name="pwd" id="pwd"${add_attribute("placeholder", `Type your ${field}`, 0)}${add_attribute("autocomplete", `${field}`, 0)} class="sm:text-sm text-input svelte-12re45x"${add_attribute("value", value, 0)}>` : `${field === "Email" ? `<input type="email" name="email" id="email"${add_attribute("placeholder", `Type your ${field}`, 0)}${add_attribute("autocomplete", `${field}`, 0)} class="sm:text-sm text-input svelte-12re45x"${add_attribute("value", value, 0)}>` : ``}`}
</div>`;
});
const popup_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-1arhpoc{background-color:var(--yellow);width:max-content;padding:2em;position:absolute;top:-50%;left:0;right:0;margin-left:auto;margin-right:auto}.message.svelte-1arhpoc{font-size:clamp(0.5rem, 3vw, 1.2rem);font-weight:600}.progress-bar.svelte-1arhpoc{position:absolute;bottom:0;border:2px solid black;left:0}.progress.svelte-1arhpoc{animation:svelte-1arhpoc-progress 2s 1s 1 forwards}.complete.svelte-1arhpoc{width:100%}.open-popup.svelte-1arhpoc{animation:svelte-1arhpoc-slidedown 1s 1 forwards}.close-popup.svelte-1arhpoc{animation:svelte-1arhpoc-slideup 1s 1 forwards}@keyframes svelte-1arhpoc-progress{from{width:0%}to{width:100%}}@keyframes svelte-1arhpoc-slidedown{from{top:-50%}to{top:5%}}@keyframes svelte-1arhpoc-slideup{from{top:5%}to{top:-50%}}",
  map: null
};
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $popup, $$unsubscribe_popup;
  $$unsubscribe_popup = subscribe(popup, (value) => $popup = value);
  let { message } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  $$result.css.add(css$2);
  $$unsubscribe_popup();
  return `${$popup !== "" ? `<div class="${escape(null_to_empty(`container ${$popup === "true" ? "open-popup" : "close-popup"}`), true) + " svelte-1arhpoc"}"><div class="message svelte-1arhpoc">${escape(message)}</div>
		<div class="${escape(null_to_empty(`progress-bar ${$popup === "true" ? "progress" : "complete"}`), true) + " svelte-1arhpoc"}"></div></div>` : ``}`;
});
const noAccount_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".noaccount.svelte-quz334{display:flex;flex-direction:column;align-items:center;margin-top:5em}.signup.svelte-quz334{background-color:#000000;color:var(--white);padding:1em;border-radius:0.5em;margin-top:1em}",
  map: null
};
const NoAccount = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $formText, $$unsubscribe_formText;
  $$unsubscribe_formText = subscribe(formText, (value) => $formText = value);
  let { disable_button } = $$props;
  if ($$props.disable_button === void 0 && $$bindings.disable_button && disable_button !== void 0)
    $$bindings.disable_button(disable_button);
  $$result.css.add(css$1);
  $$unsubscribe_formText();
  return `<div class="${escape(null_to_empty(`noaccount ${$formText === "SignUp" ? "hidden" : ""}`), true) + " svelte-quz334"}">${$formText !== "SignUp" ? `<div>Don&#39;t have an account?</div>
		<button class="signup svelte-quz334" ${disable_button ? "disabled" : ""}>SignUp</button>` : `<div>Already have an account?</div>
		<button class="signup svelte-quz334">Login</button>`}
</div>`;
});
const userForm_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form.svelte-xhq2ph{width:100%;display:grid;justify-items:center;background-color:var(--blue)}.container.svelte-xhq2ph{background-color:var(--white);padding:3.5em;width:30%;border-radius:1em}.login.svelte-xhq2ph{font-size:3rem;font-weight:600;color:#000000;text-align:center}.inner.svelte-xhq2ph{display:grid;grid-template-rows:repeat(2, 1fr);gap:1em;margin-top:2.5em}.next.svelte-xhq2ph{padding:0.3em;width:100%;color:#000000;margin-top:1em;font-size:1.5rem;background-color:var(--yellow);border-radius:0.3em;font-weight:400}.next.svelte-xhq2ph:hover{outline:3px solid #000000}.disable.svelte-xhq2ph{background-color:var(--grey)}",
  map: null
};
const UserForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_password;
  let $$unsubscribe_email;
  let $formText, $$unsubscribe_formText;
  $$unsubscribe_password = subscribe(password, (value) => value);
  $$unsubscribe_email = subscribe(email, (value) => value);
  $$unsubscribe_formText = subscribe(formText, (value) => $formText = value);
  let message = "";
  let disable_button = false;
  $$result.css.add(css);
  $$unsubscribe_password();
  $$unsubscribe_email();
  $$unsubscribe_formText();
  return `<div class="form svelte-xhq2ph">${validate_component(Popup, "Popup").$$render($$result, { message }, {}, {})}
	<div class="container svelte-xhq2ph"><div class="login svelte-xhq2ph">${escape($formText)}</div>
		<div class="inner svelte-xhq2ph">${validate_component(FormInput, "FormInput").$$render($$result, { field: "Email" }, {}, {})}
			${validate_component(FormInput, "FormInput").$$render($$result, { field: "Password" }, {}, {})}</div>
		<button class="${escape(null_to_empty(`next ${""}`), true) + " svelte-xhq2ph"}" ${""}>Next</button>
		${validate_component(NoAccount, "NoAccount").$$render($$result, { disable_button }, {}, {})}</div>
</div>`;
});
export {
  UserForm as U
};
