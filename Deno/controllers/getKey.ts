import { getKey } from "../service/keyService.ts";
import { KeyModel } from "../models/keyModel.ts";
import { Languages } from "../models/enum.ts";
export default async ({
  // @ts-ignore
  params,
  // @ts-ignore
  response,
}) => {
  const languageId = params.languageId;
  const key = params.key;

  if (!languageId || !Languages[languageId]) {
    response.status = 400;
    response.body = { msg: "Invalid Language ID" };
    return;
  }

  if (!key) {
    response.status = 400;
    response.body = { msg: "Invalid Key" };
    return;
  }

  let foundKey = await getKey(languageId, key);
  if (!foundKey) {
    foundKey = new KeyModel(key,"",Languages[languageId],`Key ${languageId}-${key} with LanguageID ${languageId} not value found`);
    response.status = 404;
    response.body = foundKey;
    return;
  }

  response.body = foundKey;
};
