import { useState } from "react"
import { useAuth } from "../hooks/AuthProvider"
import { Link, Navigate } from "react-router-dom"

export default function Login() {  
  const auth = useAuth()
  const [error, setError] = useState(null)
  const [onSubmitting, setOnSubmitting] = useState(false)

  if (auth.user) {
    return <Navigate to="/dashboard" />
  }

  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    setOnSubmitting(true)

    if (input.username !== "" && input.password !== "") {
      const login = await auth.loginAction(input)

      if (login.error) {
        setOnSubmitting(false)
        setError(login.message)
      }

      return
    }

    alert("please provide a valid input")
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </p>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={handleInput} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5" placeholder="name@company.com" required />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input onChange={handleInput} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border text-gray-950 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-950" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <Link to={'/'} className="text-sm font-medium text-black hover:underline dark:text-primary-500">Forgot password?</Link>
              </div>
              <button type="submit" disabled={onSubmitting} className={`w-full text-white bg-black hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${onSubmitting ? 'opacity-70 cursor-progress' : ''}`}>Sign in</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? <Link to={'/register'} className="font-medium text-black hover:underline dark:text-primary-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}