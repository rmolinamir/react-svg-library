import { lazy } from 'react'

export default {
  'cancel': lazy(() => import('./Files/cancel')),
  'delete': lazy(() => import('./Files/delete')),
  'like': lazy(() => import('./Files/like')),
  'question-mark': lazy(() => import('./Files/question-mark'))
}
