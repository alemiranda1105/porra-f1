import { Link } from 'react-router-dom'

export function WelcomePage() {
  return (
    <div className='flex flex-col h-screen justify-between items-center p-4'>
      <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-5xl font-bold'>Bienvenido</h1>
        <p>
          En esta aplicación, podrás crear porras y competir con tus amigos durante la Temporada
          2023 de Formula 1
        </p>
      </div>
      <div className='flex flex-col gap-3 items-center w-full'>
        <Link
          className='bg-red-500 font-bold rounded-lg p-4 w-full items-center hover:text-red-500 hover:bg-black hover:border-2 hover:border-red-500 transition duration-300'
          to='/login'
        >
          Iniciar sesión
        </Link>
        <Link
          className='text-red-500 font-bold rounded-lg p-4 w-full border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300'
          to='/create-account'
        >
          Crear cuenta
        </Link>
      </div>
    </div>
  )
}
