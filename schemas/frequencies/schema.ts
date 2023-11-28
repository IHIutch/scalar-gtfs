import { z } from "@hono/zod-openapi";

enum ExactTimes {
  frequencyBasedTrips = 0,
  scheduleBasedTrips = 1
}

export const FrequencySchema = z
  .object({
    trip_id: z.string().openapi({
      example: '10001',
    }),
    start_time: z.string().openapi({
      example: '08:00:00',
    }),
    end_time: z.string().openapi({
      example: '10:00:00',
    }),
    headway_secs: z.number().openapi({
      example: 300,
    }),
    exact_times: z.nativeEnum(ExactTimes).openapi({
      example: 0
    })
  }).openapi('Frequency')
