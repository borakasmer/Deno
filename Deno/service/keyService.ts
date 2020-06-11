import { Languages } from "../models/enum.ts";
import { redis } from "./redis.ts";
import { KeyModel } from "../models/keyModel.ts";
import { ColumnDefs } from "../models/columnDef.ts";

export const getKey = async (languageId: number, key: string) => {
  //const ok = await redis.set("hoge", "fuga");
  const resultKey = await redis.get(`${languageId}-${key}`);

  if (resultKey) {
    const value = resultKey;
    var model = new KeyModel(key, value, Languages[languageId]);
    return model;
  } else {
    return null;
  }
};

export const getGridKey = async (languageId: number, key: string) => {
  const resultKey = await redis.hgetall(`${languageId}-${key}`);

  if (resultKey) {
    let modelList = Array<ColumnDefs>();
    var oldkey: string = "";
    resultKey.forEach((item) => {
      if (oldkey != "") {
        var model = new ColumnDefs(item, oldkey);
        modelList.push(model);
        oldkey = "";
      } else {
        oldkey = item;
      }
    });

    return modelList;
  } else {
    return null;
  }
};
