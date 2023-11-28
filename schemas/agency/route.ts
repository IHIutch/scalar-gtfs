import { createRoute } from "@hono/zod-openapi";
import { AgencyParams } from "./params.js";
import { AgencySchema } from "./schema.js";

export const AgencyRoute = createRoute({
  method: 'get',
  path: '/agency/{agency_id}',
  request: {
    params: AgencyParams,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: AgencySchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
