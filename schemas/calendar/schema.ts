import { z } from "@hono/zod-openapi";

enum ServiceAvailabilityType {
  false = 0,
  true = 1,
}

export const CalendarSchema = z
  .object({
    service_id: z.string().openapi({
      example: '12345',
    }),
    monday: z.nativeEnum(ServiceAvailabilityType).openapi({
      example: 1,
    }),
    tuesday: z.nativeEnum(ServiceAvailabilityType).openapi({
      example: 1,
    }),
    wednesday: z.nativeEnum(ServiceAvailabilityType).openapi({
      example: 1,
    }),
    thursday: z.nativeEnum(ServiceAvailabilityType).openapi({
      example: 1,
    }),
    friday: z.nativeEnum(ServiceAvailabilityType).openapi({
      example: 1,
    }),
    saturday: z.nativeEnum(ServiceAvailabilityType).openapi({
      example: 0,
    }),
    sunday: z.nativeEnum(ServiceAvailabilityType).openapi({
      example: 0,
    }),
    start_date: z.string().openapi({
      example: '20230101',
    }),
    end_date: z.string().openapi({
      example: '20231231',
    }),
  })
  .openapi('Calendar')
