import { lazy } from 'react'

const ExibitiorsRoutes = [
  // Dashboards
  {
    path: '/exibitiors/basic',
    component: lazy(() => import('../../views/exibitiors/basic'))
  },
  {
    path: '/exibitiors/addexibitiors',
    component: lazy(() => import('../../views/exibitiors/AddExibitiors'))
  },
  {
    path: '/exibitiors/user/list',
    component: lazy(() => import('../../views/exibitiors/user/list'))
  }
  
]

export default ExibitiorsRoutes