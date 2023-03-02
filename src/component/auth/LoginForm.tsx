export const LoginForm = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <form className='flex flex-col gap-3 items-center p-2 w-2/3 max-w-[540px] border-2 border-red-500 rounded-xl'>
        <div className='flex flex-col gap-2 w-full p-2'>
          <label htmlFor='email-txt' className='font-bold'>
            Email
          </label>
          <input
            placeholder='Email'
            type='email'
            name='email-txt'
            id='email-txt'
            className='bg-white text-black rounded-lg p-1'
          />
        </div>
        <div className='flex flex-col gap-2 w-full p-2'>
          <label htmlFor='password-txt' className='font-bold'>
            Password
          </label>
          <input
            placeholder='Password'
            type='password'
            name='password-txt'
            id='password-txt'
            className='bg-white text-black rounded-lg p-1'
          />
        </div>
        <button type='submit' className='bg-red-800 w-full p-3 rounded-full'>
          Login
        </button>
      </form>
    </div>
  )
}
