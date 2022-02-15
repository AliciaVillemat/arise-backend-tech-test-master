import { Context } from "koa";

// GET availabilities
// Fields required :
// hotel_id: string[] *
// check_in: Date *
// check_out: Date *
// adults: number *
// children: number[]
export default function getAvailabilities(ctx: Context) {
  ctx.status = 500;
  ctx.body = {
    error: "Not implemented",
  };

  // Implement GMAH formatted inventory
  // Implement GMAH formatted error
}
