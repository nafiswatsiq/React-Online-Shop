import { useGoogleLogin } from '@react-oauth/google'
import googleLogo from '../assets/img/goole-logo.svg'
import { useAuth } from '../hooks/AuthProvider'

export default function SignInGoogleBtn({title}) {
  const auth = useAuth()

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => auth.loginGoogleAction(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  })

  return (
    <>
      <button  onClick={() => loginGoogle()} type='button' className="rounded-lg text-sm px-5 py-1 text-center border w-full font-medium text-gray-500 flex items-center">
        <img src={googleLogo} alt="" className='w-8 h-8' />
        <span className='text-center w-full'>{title}</span>
      </button>
    </>
  )
}