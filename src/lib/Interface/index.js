import { lazy } from 'react'

export default {
  'hide': lazy(() => import('./Files/hide')),
  'show': lazy(() => import('./Files/show')),
  'verification-checkmark': lazy(() => import('./Files/verification-checkmark')),
  'warning-checkmark': lazy(() => import('./Files/warning-checkmark'))
}
