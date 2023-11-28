import { z } from "@hono/zod-openapi";

enum PickupType {
  regular = 0,
  unavailable = 1,
  mustPhoneAgency = 2,
  mustCoordinateWithDriver = 3
}

enum DropoffType {
  regular = 0,
  unavailable = 1,
  mustPhoneAgency = 2,
  mustCoordinateWithDriver = 3
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

enum Timepoint {
  approximate = 0,
  exact = 1
}

export const StopTimeSchema = z
  .object({
    trip_id: z.string().openapi({
      example: '10001',
    }),
    stop_sequence: z.number().nonnegative().openapi({
      example: 1,
    }),
    stop_id: z.string().openapi({
      example: '1001',
    }),
    arrival_time: z.string().openapi({
      example: '08:00:00',
    }),
    departure_time: z.string().openapi({
      example: '08:02:00',
    }),
    stop_headsign: z.string().openapi({
      example: 'Main & Chestnut'
    }),
    shape_dist_traveled: z.number().nonnegative().optional().openapi({
      example: 5.25
    }),
    pickup_type: z.nativeEnum(PickupType).optional().openapi({
      example: 0
    }),
    drop_off_type: z.nativeEnum(DropoffType).optional().openapi({
      example: 0
    }),
    continuous_pickup: z.nativeEnum(ContinuousPickup).optional().openapi({
      example: 0
    }),
    continuous_drop_off: z.nativeEnum(ContinuousDropoff).optional().openapi({
      example: 0
    }),
    timepoint: z.nativeEnum(Timepoint).optional().openapi({
      example: 0
    }),
  })
  .openapi('StopTime')
