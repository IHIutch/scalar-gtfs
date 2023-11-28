import { createRoute } from "@hono/zod-openapi";
// import { StopParams } from "./params.js";
import { StopSchema } from "./schema.js";

export const StopRoute = createRoute({
  method: 'get',
  path: '/stops/{id}',
  // request: {
  //   params: StopParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: StopSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
