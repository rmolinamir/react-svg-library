import { lazy } from 'react'

export default {
  'apple': lazy(() => import('./Files/apple')),
  'google': lazy(() => import('./Files/google')),
  'google-playstore': lazy(() => import('./Files/google-playstore')),
  'linkedin-one': lazy(() => import('./Files/linkedin-one')),
  'linkedin-two': lazy(() => import('./Files/linkedin-two'))
}
