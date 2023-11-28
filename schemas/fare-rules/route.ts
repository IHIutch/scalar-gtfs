import { createRoute } from "@hono/zod-openapi";
// import { FareRulesParams } from "./params.js";
import { FareRulesSchema } from "./schema.js";

export const FareRulesRoute = createRoute({
  method: 'get',
  path: '/fare_rules/{id}',
  // request: {
  //   params: FareRulesParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: FareRulesSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
