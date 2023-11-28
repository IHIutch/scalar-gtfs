import { createRoute } from "@hono/zod-openapi";
// import { StopTimeParams } from "./params.js";
import { StopTimeSchema } from "./schema.js";

export const StopTimeRoute = createRoute({
  method: 'get',
  path: '/stop_times/{id}',
  // request: {
  //   params: StopTimeParams,
  // },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: StopTimeSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})
