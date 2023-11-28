import { createRoute } from "@hono/zod-openapi";
// import { TransferParams } from "./params.js";
import { TransferSchema } from "./schema.js";

export const TransferRoute = createRoute({
  method: 'get',
  path: '/transfers/{id}',
  // request: {
  //   params: TransferParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: TransferSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
