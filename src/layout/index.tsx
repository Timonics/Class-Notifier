import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="mx-auto min-h-screen max-w-lg max-sm:w-full">
      <Outlet />
    </div>
  )
}
