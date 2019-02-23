import { lazy } from 'react'

export default {
  'flag': lazy(() => import('./Files/flag')),
  'location-pin': lazy(() => import('./Files/location-pin'))
}
