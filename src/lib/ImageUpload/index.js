import { lazy } from 'react'

export default {
  'single-image': lazy(() => import('./Files/single-image')),
  'multi-image': lazy(() => import('./Files/multi-image'))
}
