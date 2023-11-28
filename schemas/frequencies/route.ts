import { createRoute } from "@hono/zod-openapi";
// import { FrequencyParams } from "./params.js";
import { FrequencySchema } from "./schema.js";

export const FrequencyRoute = createRoute({
  method: 'get',
  path: '/frequencies/{id}',
  // request: {
  //   params: FrequencyParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: FrequencySchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})

