import { Redis } from "ioredis";
const REDIS_URI = "redis://default:bTHcjlvtSPZ20cy1XE5vHtvJnhW2RMSt@redis-13241.c305.ap-south-1-1.ec2.cloud.redislabs.com:13241";
const redis = new Redis(REDIS_URI);
export {
  redis as r
};
