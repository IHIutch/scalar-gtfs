import { createRoute } from "@hono/zod-openapi";
// import { TripParams } from "./params.js";
import { TripSchema } from "./schema.js";

export const TripRoute = createRoute({
  method: 'get',
  path: '/routes/{id}',
  // request: {
  //   params: TripParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: TripSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
