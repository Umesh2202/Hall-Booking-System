import axios from "axios";
import { r as redis } from "../../../chunks/redis.js";
const load = async () => {
  let data;
  const cached = await redis.get("data");
  if (cached) {
    data = JSON.parse(cached);
  } else {
    const res = await axios.get("/api/halls");
    data = res.data;
    redis.set("data", JSON.stringify(data), "EX", 600);
  }
  console.log("hi");
  return {
    halls: data
  };
};
export {
  load
};
