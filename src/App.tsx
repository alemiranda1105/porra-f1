import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Toolbar } from './component/ui/Toolbar'
import { AuthContext } from './context/AuthContext'
import { firebaseAuth } from './Firebase'

function App() {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsuscribe = () => {
      firebaseAuth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          setUser(firebaseUser)
          navigate('/home')
        } else {
          navigate('/welcome')
        }
      })
    }

    return unsuscribe
  }, [])

  return (
    <AuthContext.Provider value={user}>
      <div className='flex flex-col justify-between w-full h-screen'>
        {user !== null && <Outlet />}
        <Toolbar />
      </div>
    </AuthContext.Provider>
  )
}

export default App
