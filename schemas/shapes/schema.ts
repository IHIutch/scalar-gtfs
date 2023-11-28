import { z } from "@hono/zod-openapi";

export const ShapeSchema = z
  .object({
    shape_id: z.string().openapi({
      example: 'shape101',
    }),
    shape_pt_lat: z.number().openapi({
      example: 40.7128,
    }),
    shape_pt_lon: z.number().openapi({
      example: -74.0060,
    }),
    shape_pt_sequence: z.number().nonnegative().openapi({
      example: 1,
    }),
    shape_dist_traveled: z.number().nonnegative().optional().openapi({
      example: 1,
    }),
  })
  .openapi('Shape')
