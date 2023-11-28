import { z } from "@hono/zod-openapi";

enum RouteType {
  lightRail = 0,
  subway = 1,
  rail = 2,
  bus = 3,
  ferry = 4,
  cableTram = 5,
  aerialLift = 6,
  funicular = 7,
  trolleyBus = 11,
  monorail = 12
}

enum ContinuousPickup {
  continuous = 0,
  nonContinuous = 1,
  mustPhoneAgency = 2,
  mustCoordinateWithDriver = 3
}

enum ContinuousDropoff {
  continuous = 0,
  nonContinuous = 1,
  mustPhoneAgency = 2,
  mustCoordinateWithDriver = 3
}

export const RouteSchema = z.object({
  route_id: z.string().openapi({
    example: '101',
  }),
  agency_id: z.string().openapi({
    example: '1',
  }),
  route_short_name: z.string().openapi({
    example: 'A',
  }),
  route_long_name: z.string().openapi({
    example: 'Downtown Express',
  }),
  route_type: z.nativeEnum(RouteType).openapi({
    example: 3,
  }),
  route_desc: z.string().optional().openapi({
    example: '"A" trains operate between Inwood-207 St, Manhattan and Far Rockaway-Mott Avenue, Queens at all times. Also from about 6AM until about midnight, additional "A" trains operate between Inwood-207 St and Lefferts Boulevard (trains typically alternate between Lefferts Blvd and Far Rockaway).'
  }),
  route_url: z.string().url().optional().openapi({
    example: 'https://www.citytransit.com/routes/1234',
  }),
  route_color: z.string().optional().openapi({
    example: 'FFFFFF'
  }),
  route_text_color: z.string().optional().openapi({
    example: '000000'
  }),
  route_sort_order: z.number().nonnegative().optional().openapi({
    example: 1
  }),
  continuous_pickup: z.nativeEnum(ContinuousPickup).optional().openapi({
    example: 0,
  }),
  continuous_drop_off: z.nativeEnum(ContinuousDropoff).optional().openapi({
    example: 0,
  }),
  network_id: z.string().optional().openapi({
    example: '10001'
  }),
});
