import { lazy } from 'react'

export default {
  'calendar': lazy(() => import('./Files/calendar')),
  'calendar-gradient': lazy(() => import('./Files/calendar-gradient'))
}
