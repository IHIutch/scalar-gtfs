import { z } from "@hono/zod-openapi";

export const AgencyParams = z.object({
  agency_id: z
    .string()
    .openapi({
      param: {
        name: 'agency_id',
        in: 'path',
      },
      example: '1212121',
    }),
})
