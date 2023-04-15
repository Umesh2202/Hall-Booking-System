import { j as json } from "../../../../chunks/index.js";
import { c as colRef } from "../../../../chunks/firebase.js";
import { getDocs, doc, Timestamp, updateDoc, arrayUnion } from "firebase/firestore";
import { c as convertSecToDate } from "../../../../chunks/bookingInfo.js";
const GET = async () => {
  const ss = await getDocs(colRef);
  const infos = [{}];
  infos.pop();
  ss.docs.forEach((doc2) => {
    infos.push({ ...doc2.data(), id: doc2.id });
  });
  return json(infos);
};
const POST = async ({ request }) => {
  const body = await request.json();
  let startDate = body["startDate"];
  let endDate = body["endDate"];
  const eventName = body["eventName"];
  const userId = body["userId"];
  const purpose = body["purpose"];
  const docRef = doc(colRef, body["id"]);
  if (purpose === 0) {
    startDate = Timestamp.fromDate(new Date(startDate)).toDate();
    endDate = Timestamp.fromDate(new Date(endDate)).toDate();
    await updateDoc(docRef, {
      bookings: arrayUnion({
        eventName,
        startDate,
        endDate,
        userId: `${userId}`
      })
    });
  } else if (purpose === 1) {
    let crrBookingInfo = body["bookings"];
    crrBookingInfo = convertSecToDate(crrBookingInfo);
    crrBookingInfo = crrBookingInfo.filter((el) => {
      return el["startDate"] !== startDate && el["endDate"] !== endDate;
    });
    crrBookingInfo = crrBookingInfo.map((el) => {
      el["startDate"] = new Date(el["startDate"]);
      el["startDate"].setDate(el["startDate"].getDate() + 1);
      el["startDate"] = Timestamp.fromDate(new Date(el["startDate"])).toDate();
      el["endDate"] = new Date(el["endDate"]);
      el["endDate"].setDate(el["endDate"].getDate() + 1);
      el["endDate"] = Timestamp.fromDate(new Date(el["endDate"])).toDate();
      return el;
    });
    await updateDoc(docRef, {
      bookings: [...crrBookingInfo]
    });
  }
  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
};
export {
  GET,
  POST
};
