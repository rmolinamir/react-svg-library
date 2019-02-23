import { lazy } from 'react'

export default {
  'bullet-checkmark-no-bg': lazy(() => import('./Files/bullet-checkmark-no-bg')),
  'bullet-checkmark': lazy(() => import('./Files/bullet-checkmark')),
  'bullet-star': lazy(() => import('./Files/bullet-star'))
}
