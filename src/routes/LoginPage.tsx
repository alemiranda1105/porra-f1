import { LoginForm } from '../component/auth/LoginForm'

export function LoginPage() {
  return (
    <div className='flex flex-col gap-3 items-center m-2'>
      <h1 className='text-4xl font-bold'>Login</h1>
      <LoginForm />
    </div>
  )
}
