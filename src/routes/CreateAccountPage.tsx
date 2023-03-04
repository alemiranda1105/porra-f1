import { LoginForm } from '../component/auth/LoginForm'

export function CreateAccountPage() {
  return (
    <div className='flex flex-col gap-3 items-center m-2'>
      <h1 className='text-4xl font-bold'>Crear cuenta</h1>
      <LoginForm isCreatingAccount />
    </div>
  )
}
