import { w as writable } from "./index2.js";
const email = writable("");
const password = writable("");
const popup = writable("");
const hideForm = writable(true);
const datesList = writable([{}]);
const bookings = writable([]);
const validUser = writable(
  false
);
const formText = writable("SignUp");
const userId = writable("");
const crrBookingInfo = writable([]);
const deleteDateId = writable("");
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
});
validUser.subscribe((value) => {
});
formText.subscribe((value) => {
});
export {
  hallEdit as a,
  hallDelete as b,
  password as c,
  bookings as d,
  email as e,
  formText as f,
  datesList as g,
  hideForm as h,
  info as i,
  crrBookingInfo as j,
  deleteDateId as k,
  popup as p,
  userId as u,
  validUser as v
};
