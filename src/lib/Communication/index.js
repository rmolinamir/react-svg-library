import { lazy } from 'react'

export default {
  'chat': lazy(() => import('./Files/chat')),
  'envelope': lazy(() => import('./Files/envelope')),
  'phone': lazy(() => import('./Files/phone')),
  'sent-envelope': lazy(() => import('./Files/sent-envelope'))
}
