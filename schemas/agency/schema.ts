import { z } from "@hono/zod-openapi";

export const AgencySchema = z
  .object({
    agency_id: z.string().openapi({
      example: '1',
    }),
    agency_name: z.string().openapi({
      example: 'City Transit',
    }),
    agency_url: z.string().url().openapi({
      example: 'https://www.citytransit.com',
    }),
    agency_timezone: z.string().openapi({
      example: 'America/New_York',
    }),
    agency_lang: z.string().optional().openapi({
      example: 'en'
    }),
    agency_phone: z.string().optional().openapi({
      example: '123-456-7890'
    }),
    agency_fare_url: z.string().url().optional().openapi({
      example: 'https://www.citytransit.com/fares'
    }),
    agency_email: z.string().email().optional().openapi({
      example: 'help@citytransit.com'
    }),
  })
  .openapi('Agency')
