import { c as colRef } from "../../../../chunks/firebase2.js";
import { addDoc } from "firebase/firestore";
const GET = async () => {
  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
};
const POST = async ({ request }) => {
  const { email, password } = await request.json();
  await addDoc(colRef, { email, password });
  return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
};
export {
  GET,
  POST
};
