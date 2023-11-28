import { z } from "@hono/zod-openapi";

export const FareRulesSchema = z
  .object({
    fare_id: z.string().openapi({
      example: '10001',
    }),
    route_id: z.string().openapi({
      example: '10001',
    }),
    origin_id: z.string().openapi({
      example: '3',
    }),
    destination_id: z.string().openapi({
      example: '5',
    }),
    contains_id: z.string().openapi({
      example: '6',
    }),
  })
  .openapi('CalendarDate')
