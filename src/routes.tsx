import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'
import { Home, NotFound } from '~containers'

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </ReactRouterRoutes>
  )
}
