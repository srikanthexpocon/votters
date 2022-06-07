import { lazy } from 'react'

const FromsRoutes = [
  // Dashboards
  {
    path: '/form/AllForms',
    component: lazy(() => import('../../views/form/AllForms'))
  },
  {
    path: '/form/BuildForm',
    component: lazy(() => import('../../views/form/BuildForm'))
  },
  {
    path: '/form/Reports',
    component: lazy(() => import('../../views/form/Reports'))
  },
  {
    path: '/form/Settings',
    component: lazy(() => import('../../views/form/SettingsForm'))
  }
  
]

export default FromsRoutes