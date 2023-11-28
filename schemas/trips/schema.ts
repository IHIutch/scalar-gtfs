import { z } from "@hono/zod-openapi";

enum DirectionId {
  directionA = 0,
  directionB = 1
}

enum WheelchairAccessible {
  noInfo = 0,
  someSupport = 1,
  noSupport = 2
}

enum BikesAllowed {
  noInfo = 0,
  someSupport = 1,
  noSupport = 2
}

export const TripSchema = z
  .object({
    trip_id: z.string().openapi({
      example: '10001',
    }),
    route_id: z.string().openapi({
      example: '101',
    }),
    service_id: z.string().openapi({
      example: 'weekday',
    }),
    trip_headsign: z.string().optional().openapi({
      example: 'Downtown',
    }),
    trip_short_name: z.string().optional().openapi({
      example: 'Dwntwn'
    }),
    direction_id: z.nativeEnum(DirectionId).optional().openapi({
      example: 0
    }),
    block_id: z.string().optional().openapi({
      example: '1234'
    }),
    shape_id: z.string().optional().openapi({
      example: '1234'
    }),
    wheelchair_accessible: z.nativeEnum(WheelchairAccessible).optional().openapi({
      example: 0
    }),
    bikes_allowed: z.nativeEnum(BikesAllowed).optional().openapi({
      example: 0
    }),
  })
  .openapi('Trip')
