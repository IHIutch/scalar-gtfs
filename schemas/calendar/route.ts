import { createRoute } from "@hono/zod-openapi";
// import { CalendarParams } from "./params.js";
import { CalendarSchema } from "./schema.js";

export const CalendarRoute = createRoute({
  method: 'get',
  path: '/calendar/{service_id}',
  // request: {
  //   params: CalendarParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: CalendarSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
