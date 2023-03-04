import { AppRoutes } from '../../enums/AppRoutes'
import { ToolbarIcon } from './ToolbarIcon'

export const Toolbar = () => {
  return (
    <div className='flex justify-evenly h-16 bg-slate-600/50'>
      <ToolbarIcon route={AppRoutes.HOME} />
    </div>
  )
}
