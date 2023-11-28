import { createRoute } from "@hono/zod-openapi";
// import { FareAttributeParams } from "./params.js";
import { FareAttributeSchema } from "./schema.js";

export const FareAttributeRoute = createRoute({
  method: 'get',
  path: '/fare_attributes/{id}',
  // request: {
  //   params: FareAttributeParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: FareAttributeSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
