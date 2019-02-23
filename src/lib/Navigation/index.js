import { lazy } from 'react'

export default {
  'arrow-down': lazy(() => import('./Files/arrow-down')),
  'arrow-right': lazy(() => import('./Files/arrow-right')),
  'menu': lazy(() => import('./Files/menu'))
}
