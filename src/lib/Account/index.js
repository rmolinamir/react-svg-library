import { lazy } from 'react'

export default {
  'account-delivery': lazy(() => import('./Files/account-delivery')),
  'account-other': lazy(() => import('./Files/account-other')),
  'account-security': lazy(() => import('./Files/account-security')),
  'account-user': lazy(() => import('./Files/account-user')),
  'account-user-two': lazy(() => import('./Files/account-user-two')),
  'account-user-three': lazy(() => import('./Files/account-user-three'))
}
