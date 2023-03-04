import { AuthError } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseLoginError, LoginError } from '../../enums/LoginError'
import { AuthService } from '../../service/AuthService'
import { UserLogin } from '../../types/UserLogin'

interface LoginFormProps {
  isCreatingAccount?: boolean
}

export const LoginForm = ({ isCreatingAccount = false }: LoginFormProps) => {
  const authService = new AuthService()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [userLogin, setUserLogin] = useState<UserLogin>({
    email: '',
    password: '',
    username: '',
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setUserLogin({ ...userLogin, [name]: value })
    setError('')
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isCreatingAccount) {
      if (userLogin.email && userLogin.password && userLogin.username) {
        authService
          .createAccount(userLogin)
          .then(() => {
            navigate('/')
          })
          .catch((error: AuthError) => {
            const firebaseError = error.code as keyof typeof FirebaseLoginError
            setError(FirebaseLoginError[firebaseError] ?? LoginError.UNKOWN_ERROR)
          })
      } else {
        setError(LoginError.NO_DATA)
      }
    } else {
      if (userLogin.email && userLogin.password) {
        authService
          .logInWithPasswordAndEmail(userLogin)
          .then(() => {
            navigate('/')
          })
          .catch((error: AuthError) => {
            const firebaseError = error.code as keyof typeof FirebaseLoginError
            setError(FirebaseLoginError[firebaseError] ?? LoginError.UNKOWN_ERROR)
          })
      } else {
        setError(LoginError.NO_DATA)
      }
    }
  }

  return (
    <div className='flex flex-col items-center w-full'>
      <form
        onSubmit={onSubmit}
        className='flex flex-col gap-3 items-center p-4 w-11/12 md:w-2/3 max-w-[540px] border-2 border-red-500 rounded-xl'
      >
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='email-txt' className='font-bold'>
            Email
          </label>
          <input
            onChange={handleFormChange}
            placeholder='Email'
            type='email'
            name='email'
            id='email-txt'
            className='bg-white text-black rounded-lg p-1.5'
            required
          />
        </div>
        {isCreatingAccount && (
          <div className='flex flex-col gap-2 w-full'>
            <label htmlFor='username-txt' className='font-bold'>
              Nombre de usuario
            </label>
            <input
              onChange={handleFormChange}
              placeholder='Nombre de usuario'
              type='text'
              name='username'
              id='username-txt'
              className='bg-white text-black rounded-lg p-1.5'
              required
            />
          </div>
        )}
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor='password-txt' className='font-bold'>
            Contraseña
          </label>
          <input
            onChange={handleFormChange}
            placeholder='Contraseña'
            type='password'
            name='password'
            id='password-txt'
            className='bg-white text-black rounded-lg p-1.5'
            required
          />
        </div>
        <button type='submit' className='bg-red-800 w-full p-3 rounded-lg m-2'>
          {isCreatingAccount ? 'Crear cuenta' : 'Iniciar sesión'}
        </button>
        {error && <p className='font-light'>{error}</p>}
      </form>
    </div>
  )
}
