import { createRoute } from "@hono/zod-openapi";
// import { CalendarDateParams } from "./params.js";
import { CalendarDateSchema } from "./schema.js";

export const CalendarDateRoute = createRoute({
  method: 'get',
  path: '/calendar_dates/{service_id}',
  // request: {
  //   params: CalendarDateParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: CalendarDateSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
