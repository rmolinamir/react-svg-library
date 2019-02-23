import { lazy } from 'react'

export default {
  'bed': lazy(() => import('./Files/bed')),
  'delivery-truck': lazy(() => import('./Files/delivery-truck')),
  'more-info': lazy(() => import('./Files/more-info')),
  'private': lazy(() => import('./Files/private')),
  'tools': lazy(() => import('./Files/tools')),
  'under-construction': lazy(() => import('./Files/under-construction')),
  'website': lazy(() => import('./Files/website'))
}
