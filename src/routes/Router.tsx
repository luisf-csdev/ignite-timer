import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '../pages/Home'
import { History } from '../pages/History'
import { DefaultLayout } from '../layouts/DefaultLayout'

const router = createBrowserRouter([
  {
    Component: DefaultLayout,
    children: [
      { path: '/', Component: Home },
      { path: '/history', Component: History },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
