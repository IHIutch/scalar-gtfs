import { handle } from '@hono/node-server/vercel'
import { z, createRoute, OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'

const app = new OpenAPIHono().basePath('/api')

const ParamsSchema = z.object({
  id: z
    .string()
    .min(3)
    .openapi({
      param: {
        name: 'id',
        in: 'path',
      },
      example: '1212121',
    }),
})

const UserSchema = z
  .object({
    id: z.string().openapi({
      example: '123',
    }),
    name: z.string().openapi({
      example: 'John Doe',
    }),
    age: z.number().openapi({
      example: 42,
    }),
  })
  .openapi('User')

const route = createRoute({
  method: 'get',
  path: '/users/{id}',
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
})

app.openapi(route, (c) => {
  const { id } = c.req.valid('param')
  return c.jsonT({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})

const content = app.getOpenAPIDocument({
  openapi: '3.1.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  }
})

app.doc('/swagger.json', {
  openapi: '3.1.0',
  info: {
    title: 'Example',
    description:
      'The `@scalar/hono-api-reference` middleware renders a beautiful API reference based on your OpenAPI specification.',
    version: 'v1',
  },
})

app.get(
  '/reference',
  apiReference({
    spec: {
      url: './swagger.json',
      // content,
    },
  }),
)


export default handle(app)

