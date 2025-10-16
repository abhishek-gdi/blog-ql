import Keyv from "keyv";
import KeyvRedis from "@keyv/redis";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";

let redisCacheAdapter: KeyvAdapter<any> = null;

export function initRedisCache() {
  const redisCache = new Keyv(new KeyvRedis("redis://localhost:6379"));
  redisCacheAdapter = new KeyvAdapter(redisCache);

  return redisCacheAdapter;
}

export function getRedisCache() {
  if (!redisCacheAdapter) {
    initRedisCache();
  }
  return redisCacheAdapter;
}


