import { createRoute } from "@hono/zod-openapi";
// import { RouteParams } from "./params.js";
import { RouteSchema } from "./schema.js";

export const RouteRoute = createRoute({
  method: 'get',
  path: '/routes/{id}',
  // request: {
  //   params: RouteParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: RouteSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
