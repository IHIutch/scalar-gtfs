import { z } from "@hono/zod-openapi";

enum ExceptionTypeType {
  serviceAdded = 1,
  serviceRemoved = 2,
}

export const CalendarDateSchema = z
  .object({
    service_id: z.string().openapi({
      example: '10001',
    }),
    date: z.string().openapi({
      example: '20230102',
    }),
    exception_type: z.nativeEnum(ExceptionTypeType).openapi({
      example: 1,
    }),
  })
  .openapi('CalendarDate')
