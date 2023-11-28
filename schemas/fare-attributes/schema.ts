import { z } from "@hono/zod-openapi";

enum PaymentMethod {
  paidOnboard = 0,
  paidPreboard = 1,
}

enum PaymentTransfers {
  noTransfer = 0,
  oneTransfer = 1,
  twoTransfer = 2,
}

export const FareAttributeSchema = z
  .object({
    fare_id: z.string().openapi({
      example: '10001',
    }),
    price: z.number().nonnegative().openapi({
      example: 5.00,
    }),
    currency_type: z.string().openapi({
      example: 'USD',
    }),
    payment_method: z.nativeEnum(PaymentMethod).openapi({
      example: 0
    }),
    transfers: z.nativeEnum(PaymentTransfers).optional().openapi({
      example: 1
    }),
    agency_id: z.string().openapi({
      example: '1',
    }),
    transfer_duration: z.number().nonnegative().openapi({
      example: 0
    })
  })
  .openapi('FareAttribute')
