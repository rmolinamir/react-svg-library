import { lazy } from 'react'

export default {
  'cpp': lazy(() => import('./Files/cpp')),
  'css': lazy(() => import('./Files/css')),
  'github': lazy(() => import('./Files/github')),
  'java': lazy(() => import('./Files/java')),
  'javascript': lazy(() => import('./Files/javascript')),
  'mongodb': lazy(() => import('./Files/mongodb')),
  'node.js': lazy(() => import('./Files/node.js')),
  'react.js': lazy(() => import('./Files/react.js')),
  'unity-one': lazy(() => import('./Files/unity-one')),
  'unity-two': lazy(() => import('./Files/unity-two')),
  'unreal-engine': lazy(() => import('./Files/unreal-engine'))
}
