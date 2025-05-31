import { Outlet } from 'react-router-dom'
import classes from './index.module.css'

export default function OnboardingLayout() {
  return (
    <div className={`${classes.container} max-w-lg mx-auto  max-sm:w-full`}>
      <Outlet />
    </div>
  )
}
