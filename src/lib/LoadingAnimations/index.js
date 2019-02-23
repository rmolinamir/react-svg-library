import { lazy } from 'react'

export default {
  'loading-one': lazy(() => import('./Files/loading-one')),
  'loading-two': lazy(() => import('./Files/loading-two')),
  'loading-blocks': lazy(() => import('./Files/loading-blocks'))
}
