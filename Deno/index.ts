import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./router.ts";
import _404 from "./controllers/404.ts";
import errorHandler from "./controllers/errorHandler.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const app = new Application();

app.use(errorHandler);
app.use(oakCors(
  {
    origin: /^.+localhost:(1234|3000|4200)$/,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  },
)); // Enable CORS for localhost:1234,localhost:3000,localhost:4200 Routes
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port:${APP_PORT}...`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
