import { z } from "@hono/zod-openapi";

enum TransferType {
  recommended = 0,
  timed = 1,
  minimumTime = 2,
  notPossible = 3,
  inseat = 4,
  inseatNotAllowed = 5
}

export const TransferSchema = z
  .object({
    from_stop_id: z.string().openapi({
      example: '1001',
    }),
    to_stop_id: z.string().openapi({
      example: '1002',
    }),
    transfer_type: z.nativeEnum(TransferType).openapi({
      example: 0,
    }),
    min_transfer_time: z.number().nonnegative().optional().openapi({
      example: 300,
    }),
    from_route_id: z.string().optional().openapi({
      example: '1234'
    }),
    to_route_id: z.string().optional().openapi({
      example: '4321'
    }),
  })
  .openapi('Transfer')
