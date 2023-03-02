import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import { firebaseAuth } from './Firebase'

function App() {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const unsuscribe = () => {
      firebaseAuth.onAuthStateChanged((firebaseUser) => {
        setUser(firebaseUser)
      })
    }

    return unsuscribe
  }, [])

  useEffect(() => {
    if (user === null) {
      navigate('/login')
    } else {
      navigate('/home')
    }
  }, [user])

  return (
    <div>
      <AuthContext.Provider value={user}>{user !== null && <Outlet />}</AuthContext.Provider>
    </div>
  )
}

export default App
