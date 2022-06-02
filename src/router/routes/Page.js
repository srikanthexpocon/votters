import { lazy } from 'react'

const PageRoutes = [
  // Dashboards
  {
    path: '/page/AllPages',
    component: lazy(() => import('../../views/page/AllPages'))
  },
  {
    path: '/page/AddPage',
    component: lazy(() => import('../../views/page/AddPage'))
  },
  {
    path: '/page/Categories',
    component: lazy(() => import('../../views/page/Categories'))
  }
  
]

export default PageRoutes