import Router from "koa-router";
import { koaSwagger } from "koa2-swagger-ui";
import path from "path";
import yamljs from "yamljs";
import getAvailabilities from "./handlers/availabilities";
import createReservation from "./handlers/booking";

const router = new Router();

router.get("/availabilities", getAvailabilities);

// Client make a reservation through GMAH
router.post("/booking", createReservation);

router.get(
  "/docs",
  koaSwagger({
    routePrefix: false,
    swaggerOptions: {
      spec: yamljs.load(path.join(__dirname, "../../../openapi.yaml")),
    },
  })
);

export default router;
