import { j as json } from "../../../../chunks/index.js";
import { c as colRef } from "../../../../chunks/firebase.js";
import { getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
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
  await addDoc(colRef, {
    name: body["name"],
    incharge: body["incharge"],
    desc: body["desc"],
    location: body["location"],
    capacity: body["capacity"],
    contact: body["contact"],
    bookings: []
  });
  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
};
const DELETE = async ({ request }) => {
  const body = await request.json();
  const docRef = doc(colRef, body["id"]);
  await deleteDoc(docRef);
  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
};
const PATCH = async ({ request }) => {
  const body = await request.json();
  const docRef = doc(colRef, body["id"]);
  const data = {
    name: body["name"],
    incharge: body["incharge"],
    desc: body["desc"],
    location: body["location"],
    capacity: body["capacity"],
    contact: body["contact"]
  };
  updateDoc(docRef, data);
  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
};
export {
  DELETE,
  GET,
  PATCH,
  POST
};
