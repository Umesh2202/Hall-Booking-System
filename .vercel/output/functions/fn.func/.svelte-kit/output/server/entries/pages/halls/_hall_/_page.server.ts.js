import axios from "axios";
import { r as redis } from "../../../../chunks/redis.js";
const load = async ({ params }) => {
  let data;
  const cached = await redis.get("data");
  if (cached) {
    data = JSON.parse(cached);
  } else {
    const res = await axios.get("http://localhost:5174/api/halls");
    data = res.data;
  }
  data = data.filter((el) => {
    return el["id"] === params.hall;
  });
  return {
    halls: data[0]
  };
};
export {
  load
};
