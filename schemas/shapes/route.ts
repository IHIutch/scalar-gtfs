import { createRoute } from "@hono/zod-openapi";
// import { ShapeParams } from "./params.js";
import { ShapeSchema } from "./schema.js";

export const ShapeRoute = createRoute({
  method: 'get',
  path: '/shapes/{id}',
  // request: {
  //   params: ShapeParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: ShapeSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
