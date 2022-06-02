import { lazy } from 'react'

const ExibitiorsRoutes = [
  // Dashboards
  {
    path: '/exibitiors/basic',
    component: lazy(() => import('../../views/exibitiors/basic'))
  },
  {
    path: '/exibitiors/addexibitiors',
    component: lazy(() => import('../../views/exibitiors/Addexibitiors'))
  }
  
]

export default ExibitiorsRoutes