import { z } from "@hono/zod-openapi";

enum LocationType {
  stopOrPlatform = 0,
  station = 1,
  entranceOrExit = 2,
  genericNode = 3,
  boardingArea = 4
}

enum WheelchairBoarding {
  noInfo = 0,
  someSupport = 1,
  noSupport = 2
}

export const StopSchema = z
  .object({
    stop_id: z.string().openapi({
      example: '1001',
    }),
    stop_name: z.string().openapi({
      example: 'Main St Station',
    }),
    stop_lat: z.number().openapi({
      example: 40.7128,
    }),
    stop_lon: z.number().openapi({
      example: -74.0060,
    }),
    stop_code: z.string().optional().openapi({
      example: ''
    }),
    tts_stop_name: z.string().optional().openapi({
      example: ''
    }),
    stop_desc: z.string().optional().openapi({
      example: ''
    }),
    zone_id: z.string().optional().openapi({
      example: '3'
    }),
    stop_url: z.string().optional().openapi({
      example: 'https://www.citytransit.com/stops/123'
    }),
    location_type: z.nativeEnum(LocationType).optional().openapi({
      example: 0
    }),
    parent_station: z.string().optional().openapi({
      example: '123'
    }),
    stop_timezone: z.string().optional().openapi({
      example: 'America/New_York'
    }),
    wheelchair_boarding: z.nativeEnum(WheelchairBoarding).optional().openapi({
      example: 0
    }),
    level_id: z.string().optional().openapi({
      example: ''
    }),
    platform_code: z.string().optional().openapi({
      example: ''
    }),
  })
  .openapi('Stop')
