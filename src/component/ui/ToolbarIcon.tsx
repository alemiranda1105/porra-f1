import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteLabel } from '../../enums/AppRoutes'

interface ToolbarIconProps {
  route: string
}
export const ToolbarIcon = ({ route }: ToolbarIconProps) => {
  const [label, setLabel] = useState('')
  const [currrent, setCurrent] = useState(false)
  const location = useLocation()
  useEffect(() => {
    const { pathname } = location
    setCurrent(pathname.includes(route))
    setLabel(getRouteLabel(route))
  }, [location])

  if (currrent) {
    return <button>{label}</button>
  }
  return <button>{label}</button>
}
