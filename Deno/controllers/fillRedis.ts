import { setRedis } from "../service/redisService.ts";

export default async ({
  // @ts-ignore
  params,
  // @ts-ignore
  response,
}) => {
  let result = await setRedis();
  response.body = result;
};
