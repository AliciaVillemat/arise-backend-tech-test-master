import { Context } from "koa";

// POST createReservation
export default function createReservation(ctx: Context) {
  ctx.status = 500;
  ctx.body = {
    error: "Not implemented",
  };

  // Implement GMAH formatted confirmation
  // Implement GMAH formatted validation error (ValidationError)
  // Implement GMAH formatted error (UnexpectedError)
}
