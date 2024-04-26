import { useState } from "react"
import { useAuth } from "../hooks/AuthProvider"
import { Link, Navigate } from "react-router-dom"

export default function Register() {  
  const auth = useAuth()
  const [error, setError] = useState(null)

  if (auth.user) {
    return <Navigate to="/dashboard" />
  }

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (input.username !== "" && input.password !== "" && input.email !== "") {
      const register = await auth.registerAction(input)
      setError(JSON.parse(register))
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
  console.log(error)
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </p>
            {error && 
              <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Danger</span>
                <div>
                  <span className="font-medium">Ensure that these requirements are met:</span>
                  {Object.keys(error).map((err, index) => (
                    <ul key={index} className="mt-1.5 list-disc list-inside">
                        {error[err].map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                    </ul>
                  ))}
                </div>
              </div>
            }
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input onChange={handleInput} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
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
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">I accept the Terms and Conditions</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full text-white bg-black hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an Account</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account? <Link to={'/login'} className="font-medium text-black hover:underline dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}