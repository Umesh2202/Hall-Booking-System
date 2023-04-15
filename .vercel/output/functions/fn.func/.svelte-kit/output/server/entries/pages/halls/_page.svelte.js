import { c as create_ssr_component, e as escape, d as null_to_empty, v as validate_component, b as subscribe, f as add_attribute, h as each } from "../../../chunks/index3.js";
import { i as info, h as hideForm, a as hallEdit, f as formText, b as hallDelete, v as validUser } from "../../../chunks/store.js";
import { W as Warning, c as cancel } from "../../../chunks/cancel.js";
import { U as UserForm } from "../../../chunks/userForm.js";
import { a as add } from "../../../chunks/add.js";
const hallCardField_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".outer.svelte-18helj{font-size:2rem;margin-top:0.5em}.value.svelte-18helj{font-size:1.5rem;color:var(--blue)}",
  map: null
};
const HallCardField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { field, value } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$5);
  return `<div class="${"outer svelte-18helj"}">${escape(field)}
	<div class="${"value svelte-18helj"}">${escape(value)}</div>
</div>`;
});
const hallSubCard_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".outer.svelte-109nkno{background-color:var(--white);padding:2em;max-height:fit-content;border-radius:1em;box-shadow:2px 2px 8px var(--shadow);transition:all 0.3s}.outer.svelte-109nkno:hover{box-shadow:15px 15px 10px var(--shadow)}.name.svelte-109nkno{font-size:3.5rem;font-weight:600;color:var(--blue)}",
  map: null
};
const HallSubCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name, deleteFlag } = $$props;
  let { capacity } = $$props;
  let { incharge } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.deleteFlag === void 0 && $$bindings.deleteFlag && deleteFlag !== void 0)
    $$bindings.deleteFlag(deleteFlag);
  if ($$props.capacity === void 0 && $$bindings.capacity && capacity !== void 0)
    $$bindings.capacity(capacity);
  if ($$props.incharge === void 0 && $$bindings.incharge && incharge !== void 0)
    $$bindings.incharge(incharge);
  $$result.css.add(css$4);
  return `<div class="${escape(
    null_to_empty(`outer ${deleteFlag === true ? "ondelete" : deleteFlag === false ? "nodelete" : ""}`),
    true
  ) + " svelte-109nkno"}"><div class="${"name svelte-109nkno"}">${escape(name)}</div>
	${validate_component(HallCardField, "HallCardField").$$render($$result, { field: "Capacity", value: `${capacity}` }, {}, {})}
	${validate_component(HallCardField, "HallCardField").$$render($$result, { field: "Incharge", value: `${incharge}` }, {}, {})}
</div>`;
});
const dustbin = "/_app/immutable/assets/dustbin-3f924203.svg";
const pen = "/_app/immutable/assets/pen-e5834bd4.svg";
const addHallForm_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".outer.svelte-1x28y75{background-color:var(--white);width:50%;border-radius:0.3em;padding:1em;position:relative;border:2px solid var(--grey);z-index:10}.title.svelte-1x28y75{font-size:3rem;font-weight:500;text-align:center;margin-bottom:1em;position:relative}.title.svelte-1x28y75::after{content:'';position:absolute;width:100%;bottom:-10%;left:0;border:1px solid var(--grey)}.field.svelte-1x28y75{color:#000000;font-size:1.5rem;font-weight:400}.grid.svelte-1x28y75{display:grid;grid-template-columns:repeat(2, 1fr);gap:0 1em}.name.svelte-1x28y75{width:100%}input.svelte-1x28y75{font-size:1.7rem;background-color:var(--white);border-bottom:1px solid var(--grey);margin-top:0.5em}input.svelte-1x28y75:focus{outline:3px solid var(--white)}.submit.svelte-1x28y75{width:100%;border-radius:0.3em;font-size:1.5rem;background-color:var(--blue);color:var(--white);padding:0.3em;font-weight:500}.disable.svelte-1x28y75{background-color:var(--grey);cursor:auto}.close.svelte-1x28y75{position:absolute;top:0%;right:0%;width:60px}.hide.svelte-1x28y75{display:none;position:absolute}.warning.svelte-1x28y75{font-size:2rem;color:#ff0000;text-align:center;display:block;visibility:hidden}.invalidEventName.svelte-1x28y75{visibility:visible}.invalidDate.svelte-1x28y75{visibility:visible}.cover.svelte-1x28y75{font-size:var(--font3);position:fixed;width:100%;height:100%;top:0;left:0;background-color:#47474770;display:grid;justify-items:center;align-items:center;z-index:2}.closeflex.svelte-1x28y75{display:flex;flex-direction:column}",
  map: null
};
const AddHallForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $info, $$unsubscribe_info;
  let $hideForm, $$unsubscribe_hideForm;
  let $$unsubscribe_hallEdit;
  $$unsubscribe_info = subscribe(info, (value) => $info = value);
  $$unsubscribe_hideForm = subscribe(hideForm, (value) => $hideForm = value);
  $$unsubscribe_hallEdit = subscribe(hallEdit, (value) => value);
  let hallName = $info["hallName"], inchargeName = $info["inchargeName"], desc = $info["desc"], location = $info["location"], capacity = $info["capacity"], contact = $info["contact"], invalidCapacity = false, invalidContact = false, invalidHallName = false, invalidInchargeName = false, invalidDesc = false, invalidLoc = false;
  $$result.css.add(css$3);
  $$unsubscribe_info();
  $$unsubscribe_hideForm();
  $$unsubscribe_hallEdit();
  return `<div class="${escape(null_to_empty(`${$hideForm === false ? "cover" : ""}`), true) + " svelte-1x28y75"}"><div class="${escape(null_to_empty(`outer ${$hideForm === false ? "" : "hide"}`), true) + " svelte-1x28y75"}"><div class="${"title svelte-1x28y75"}">${escape($info["title"])}</div>
		<div class="${"grid svelte-1x28y75"}"><div class="${"field svelte-1x28y75"}">Hall Name</div>
			<div class="${"field svelte-1x28y75"}">Incharge Name</div>
			<input type="${"text"}" class="${"name svelte-1x28y75"}" placeholder="${"Enter hall name"}"${add_attribute("value", hallName, 0)}>

			<input type="${"text"}" class="${"name svelte-1x28y75"}" placeholder="${"Enter incharge name"}"${add_attribute("value", inchargeName, 0)}>

			${validate_component(Warning, "Warning").$$render(
    $$result,
    {
      flag: invalidHallName,
      label: "Enter valid hall name"
    },
    {},
    {}
  )}
			${validate_component(Warning, "Warning").$$render(
    $$result,
    {
      flag: invalidInchargeName,
      label: "Enter valid incharge name"
    },
    {},
    {}
  )}</div>

		<div class="${"closeflex svelte-1x28y75"}"><div class="${"field svelte-1x28y75"}">Description</div>
			<input type="${"text"}" class="${"name svelte-1x28y75"}" placeholder="${"Enter hall description"}"${add_attribute("value", desc, 0)}></div>

		${validate_component(Warning, "Warning").$$render(
    $$result,
    {
      flag: invalidDesc,
      label: "Enter valid description"
    },
    {},
    {}
  )}

		<div class="${"closeflex svelte-1x28y75"}"><div class="${"field svelte-1x28y75"}">Location</div>
			<input type="${"text"}" class="${"name svelte-1x28y75"}" placeholder="${"Enter hall location"}"${add_attribute("value", location, 0)}></div>

		${validate_component(Warning, "Warning").$$render(
    $$result,
    {
      flag: invalidLoc,
      label: "Enter valid hall location"
    },
    {},
    {}
  )}

		<div class="${"grid svelte-1x28y75"}"><div class="${"field svelte-1x28y75"}">Capacity</div>
			<div class="${"field svelte-1x28y75"}">Contact</div>

			<input type="${"number"}" class="${"date svelte-1x28y75"}" placeholder="${"Enter hall capacity"}"${add_attribute("value", capacity, 0)}>

			<input type="${"text"}" class="${"date svelte-1x28y75"}" placeholder="${"Enter incharge contact"}"${add_attribute("value", contact, 0)}>

			${validate_component(Warning, "Warning").$$render(
    $$result,
    {
      flag: invalidCapacity,
      label: "Enter valid hall capacity"
    },
    {},
    {}
  )}
			${validate_component(Warning, "Warning").$$render(
    $$result,
    {
      flag: invalidContact,
      label: "Enter valid contact"
    },
    {},
    {}
  )}</div>

		<button class="${escape(
    null_to_empty(`submit ${"disable"}`),
    true
  ) + " svelte-1x28y75"}" ${"disabled"}>Submit</button>
		<button class="${"close svelte-1x28y75"}"><img${add_attribute("src", cancel, 0)} alt="${""}"></button></div>
</div>`;
});
const hallCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".card-outer.svelte-1ps36dx{position:relative}.delete.svelte-1ps36dx{position:absolute;top:25%;right:5%;background-color:var(--blue);padding:1em;border-radius:50%;z-index:2;transition:all 0.3s}.dustbin.svelte-1ps36dx{top:5%;right:5%;background-color:var(--red)}.delete.svelte-1ps36dx:hover{transform:scale(1.2)}.disable.svelte-1ps36dx{background-color:var(--grey)}.icon.svelte-1ps36dx{width:20px}.outer.svelte-1ps36dx{background-color:var(--white);padding:2em;max-height:fit-content;border-radius:1em;box-shadow:2px 2px 8px var(--shadow);height:100%;display:grid;justify-content:space-evenly}.title.svelte-1ps36dx{font-size:2rem;line-height:2.5rem}.warning.svelte-1ps36dx{font-size:1.5rem;line-height:2rem;color:var(--red);font-weight:600}.buttons.svelte-1ps36dx{display:grid;grid-template-columns:repeat(2, 1fr);gap:2em}.decide.svelte-1ps36dx{color:var(--white);font-weight:500;font-size:1.5rem;border-radius:0.3rem;transition:all 0.3s}.decide.svelte-1ps36dx:hover{box-shadow:5px 5px 10px var(--shadow)}.yes.svelte-1ps36dx{background-color:var(--red)}.no.svelte-1ps36dx{background-color:var(--blue)}",
  map: null
};
const HallCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $formText, $$unsubscribe_formText;
  let $hallDelete, $$unsubscribe_hallDelete;
  let $hallEdit, $$unsubscribe_hallEdit;
  $$unsubscribe_formText = subscribe(formText, (value) => $formText = value);
  $$unsubscribe_hallDelete = subscribe(hallDelete, (value) => $hallDelete = value);
  $$unsubscribe_hallEdit = subscribe(hallEdit, (value) => $hallEdit = value);
  let deleteFlag = false;
  let { info1 } = $$props;
  let id = info1["id"], name = info1["name"], capacity = info1["capacity"], incharge = info1["incharge"];
  info1["desc"];
  info1["location"];
  info1["contact"];
  if ($$props.info1 === void 0 && $$bindings.info1 && info1 !== void 0)
    $$bindings.info1(info1);
  $$result.css.add(css$2);
  $$unsubscribe_formText();
  $$unsubscribe_hallDelete();
  $$unsubscribe_hallEdit();
  return `<div class="${escape(null_to_empty(`card-outer `), true) + " svelte-1ps36dx"}">${`<a${add_attribute("href", `/halls/${id}`, 0)}>${validate_component(HallSubCard, "HallSubCard").$$render($$result, { name, capacity, incharge, deleteFlag }, {}, {})}</a>
		${$formText === "Admin Login" ? `<button class="${escape(null_to_empty(`delete dustbin ${$hallDelete || $hallEdit === true ? "disable" : ""}`), true) + " svelte-1ps36dx"}" ${$hallDelete ? "disabled" : ""}><img${add_attribute("src", dustbin, 0)} alt="${""}" class="${"icon svelte-1ps36dx"}"></button>

			<button class="${escape(null_to_empty(`delete pen ${$hallEdit || $hallDelete === true ? "disable" : ""}`), true) + " svelte-1ps36dx"}" ${$hallEdit || $hallDelete ? "disabled" : ""}><img${add_attribute("src", pen, 0)} alt="${""}" class="${"icon svelte-1ps36dx"}"></button>` : ``}`}
</div>`;
});
const addHallCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".outer.svelte-xigcs{background-color:var(--white);padding:2em;max-height:fit-content;border-radius:1em;box-shadow:2px 2px 8px var(--shadow);display:grid;justify-content:center;align-items:center;position:relative;transition:all 0.3s}.outer.svelte-xigcs:hover{box-shadow:15px 15px 10px var(--shadow)}.plus.svelte-xigcs{transform:scale(1)}.addBtn.svelte-xigcs{transition:all 0.3s}.addBtn.svelte-xigcs:hover{transform:scale(1.2)}",
  map: null
};
const AddHallCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"outer svelte-xigcs"}"><button class="${"addBtn svelte-xigcs"}"><img class="${"plus svelte-xigcs"}"${add_attribute("src", add, 0)} alt="${""}"></button>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".heading.svelte-1ewl7nd{font-size:var(--font3);margin-left:auto;margin-right:auto;width:fit-content;color:var(--white);font-weight:700}.sub-heading.svelte-1ewl7nd{font-size:var(--font5);margin-left:auto;margin-right:auto;width:fit-content;margin-bottom:1em;color:var(--yellow)}.halls.svelte-1ewl7nd{display:grid;grid-template-columns:repeat(3, 1fr);justify-content:center;grid-auto-rows:1fr;gap:2em;width:70%;margin-left:auto;margin-right:auto;margin-bottom:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $validUser, $$unsubscribe_validUser;
  let $formText, $$unsubscribe_formText;
  let $$unsubscribe_info;
  $$unsubscribe_validUser = subscribe(validUser, (value) => $validUser = value);
  $$unsubscribe_formText = subscribe(formText, (value) => $formText = value);
  $$unsubscribe_info = subscribe(info, (value) => value);
  let { data } = $$props;
  const halls = data["halls"];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_validUser();
  $$unsubscribe_formText();
  $$unsubscribe_info();
  return `${$validUser === true ? `<div class="${"outer"}"><div class="${"heading svelte-1ewl7nd"}">Available Halls</div>
		<div class="${"sub-heading svelte-1ewl7nd"}">Click to get more details</div>

		<div class="${"halls svelte-1ewl7nd"}">${each(halls, (hall) => {
    return `${hall["name"] !== void 0 ? `${validate_component(HallCard, "HallCard").$$render($$result, { info1: hall }, {}, {})}` : ``}`;
  })}

			${$formText === "Admin Login" ? `${validate_component(AddHallCard, "AddHallCard").$$render($$result, {}, {}, {})}
				${validate_component(AddHallForm, "AddHallForm").$$render($$result, {}, {}, {})}` : ``}</div></div>` : `${validate_component(UserForm, "UserForm").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
