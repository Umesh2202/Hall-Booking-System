import { w as writable } from "./index-159fcc0c.js";
const email = writable("");
const password = writable("");
const popup = writable("");
const hideForm = writable(true);
const datesList = writable([{}]);
const bookings = writable([]);
const validUser = writable(
  localStorage.getItem("validUser") || false
);
const formText = writable(localStorage.getItem("formText") || "SignUp");
const userId = writable(localStorage.getItem("userId") || "");
const crrBookingInfo = writable([]);
const deleteDateId = writable("");
const adminInfo = { email: "admin@admin.com", password: "admin" };
const hallDelete = writable(false);
const hallEdit = writable(false);
const info = writable({
  hallName: "",
  inchargeName: "",
  desc: "",
  location: "",
  capacity: 0,
  contact: "",
  title: "",
  id: ""
});
userId.subscribe((value) => {
  localStorage.setItem("userId", value);
});
validUser.subscribe((value) => {
  localStorage.setItem("validUser", value.toString());
});
formText.subscribe((value) => {
  localStorage.setItem("formText", value);
});
export {
  hallEdit as a,
  hallDelete as b,
  popup as c,
  adminInfo as d,
  email as e,
  formText as f,
  bookings as g,
  hideForm as h,
  info as i,
  datesList as j,
  crrBookingInfo as k,
  deleteDateId as l,
  password as p,
  userId as u,
  validUser as v
};
