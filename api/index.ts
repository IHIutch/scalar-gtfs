import { handle } from '@hono/node-server/vercel'
import { OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { AgencyRoute } from '../schemas/agency/route.js'
import { CalendarRoute } from '../schemas/calendar/route.js'
import { CalendarDateRoute } from '../schemas/calendar-dates/route.js'
import { FareAttributeRoute } from '../schemas/fare-attributes/route.js'
import { FareRulesRoute } from '../schemas/fare-rules/route.js'
import { FrequencyRoute } from '../schemas/frequencies/route.js'
import { RouteRoute } from '../schemas/routes/route.js'
import { ShapeRoute } from '../schemas/shapes/route.js'
import { StopTimeRoute } from '../schemas/stop-times/route.js'
import { StopRoute } from '../schemas/stops/route.js'
import { TransferRoute } from '../schemas/transfers/route.js'
import { TripRoute } from '../schemas/trips/route.js'

const app = new OpenAPIHono().basePath('/api')

app.openapi(AgencyRoute, (c) => {
  const { agency_id } = c.req.valid('param')
  return c.jsonT({
    agency_id,
    agency_url: 'https://exmample.com',
    agency_name: 'Ultra-man',
    agency_timezone: 'America/New_York'
  })
})

app.openapi(CalendarRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    service_id: '10001',
    monday: 1,
    tuesday: 1,
    wednesday: 1,
    thursday: 1,
    friday: 1,
    saturday: 1,
    sunday: 1,
    start_date: '20230101',
    end_date: '20231231',
  })
})

app.openapi(CalendarDateRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    service_id: '10001',
    date: '20230101',
    exception_type: 1,
  })
})

app.openapi(FareAttributeRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    fare_id: '10001',
    price: 5.00,
    currency_type: 'USD',
    payment_method: 0,
    transfers: 1,
    agency_id: '1',
    transfer_duration: 0
  })
})

app.openapi(FareRulesRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    fare_id: '10001',
    route_id: '10001',
    origin_id: '3',
    destination_id: '5',
    contains_id: '6',
  })
})

app.openapi(FrequencyRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    trip_id: '10001',
    start_time: '08:00:00',
    end_time: '10:00:00',
    headway_secs: 300,
    exact_times: 0
  })
})

app.openapi(RouteRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    route_id: '101',
    agency_id: '1',
    route_short_name: 'A',
    route_long_name: 'Downtown Express',
    route_type: 3,
    route_desc: '"A" trains operate between Inwood-207 St, Manhattan and Far Rockaway-Mott Avenue, Queens at all times. Also from about 6AM until about midnight, additional "A" trains operate between Inwood-207 St and Lefferts Boulevard (trains typically alternate between Lefferts Blvd and Far Rockaway).',
    route_url: 'https://www.citytransit.com/routes/1234',
    route_color: 'FFFFFF',
    route_text_color: '000000',
    route_sort_order: 1,
    continuous_pickup: 0,
    continuous_drop_off: 0,
    network_id: '10001'
  })
})

app.openapi(ShapeRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    shape_id: 'shape101',
    shape_pt_lat: 40.7128,
    shape_pt_lon: -74.0060,
    shape_pt_sequence: 1,
    shape_dist_traveled: 1,
  })
})

app.openapi(StopTimeRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    trip_id: '10001',
    stop_sequence: 1,
    stop_id: '1001',
    arrival_time: '08:00:00',
    departure_time: '08:02:00',
    stop_headsign: 'Main & Chestnut',
    shape_dist_traveled: 5.25,
    pickup_type: 0,
    drop_off_type: 0,
    continuous_pickup: 0,
    continuous_drop_off: 0,
    timepoint: 0,
  })
})

app.openapi(StopRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    stop_id: '1001',
    stop_name: 'Main St Station',
    stop_lat: 40.7128,
    stop_lon: -74.0060,
    stop_code: '',
    tts_stop_name: '',
    stop_desc: '',
    zone_id: '3',
    stop_url: 'https://www.citytransit.com/stops/123',
    location_type: 0,
    parent_station: '123',
    stop_timezone: 'America/New_York',
    wheelchair_boarding: 0,
    level_id: '',
    platform_code: '',
  })
})

app.openapi(TransferRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    from_stop_id: '1001',
    to_stop_id: '1002',
    transfer_type: 0,
    min_transfer_time: 300,
    from_route_id: '1234',
    to_route_id: '4321',
  })
})

app.openapi(TripRoute, (c) => {
  // const { service_id } = c.req.valid('param')
  return c.jsonT({
    trip_id: '10001',
    route_id: '101',
    service_id: 'weekday',
    trip_headsign: 'Downtown',
    trip_short_name: 'Dwntwn',
    direction_id: 0,
    block_id: '1234',
    shape_id: '1234',
    wheelchair_accessible: 0,
    bikes_allowed: 0,
  })
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
      // content: app.getOpenAPIDocument({
      //   openapi: '3.1.0',
      //   info: {
      //     version: '1.0.0',
      //     title: 'My API',
      //   }
      // }),
    },
  }),
)


export default handle(app)

