import { Router } from "https://deno.land/x/oak/mod.ts";

import getKey from "./controllers/getKey.ts";
import fillRedis from "./controllers/fillRedis.ts";
import getGrid from "./controllers/getGrid.ts";

const router = new Router();

router
  .get("/api/getkey/:languageId?/:key?", getKey)
  .get("/api/fillRedis", fillRedis)
  .get("/api/getGridKeys/:languageId?/:key?", getGrid)

export default router;