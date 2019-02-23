import { lazy } from 'react'

export default {
  'facebook-no-bg': lazy(() => import('./Files/facebook-no-bg')),
  'facebook': lazy(() => import('./Files/facebook')),
  'gmail': lazy(() => import('./Files/gmail')),
  'instagram': lazy(() => import('./Files/instagram')),
  'share-one': lazy(() => import('./Files/share-one')),
  'share-two': lazy(() => import('./Files/share-two'))
}
