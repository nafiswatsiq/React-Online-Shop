import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUser, login, loginGoogle, logout, register } from "../api/Authenticate"
import cartStore from "./CartStore"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
  const [token, setToken] = useState(localStorage.getItem("site") || "")
  const fetchCart = cartStore(state => state.fetchCart)
  const resetCart = cartStore(state => state.resetCart)
  const navigate = useNavigate()

  const loginAction = async (data) => {
    try {
      const expirationDate = new Date().getTime() + (3 * 60 * 60 * 1000)
      const res = await login(data.email, data.password)

      if (res.error == false) {
        const user = res.user
        user.expiresAt = expirationDate

        setUser(user)
        setToken(res.token)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("site", res.token)

        fetchCart(res.token)

        navigate("/")
        
        return {
          error: false
        }
      }

      throw new Error(res.message)
    } catch (err) {
      return {
        error: true,
        message: err.message
      }
    }
  }

  const logOut = async() => {
    try {
      const res = await logout(token)

      if(res.error == false) {
        setUser("");
        setToken("");
        localStorage.removeItem("site")
        localStorage.removeItem("user")
        navigate("/login")

        resetCart()
      }
    } catch (err) {
      if (err.response.status === 401) {

        setUser("");
        setToken("");
        localStorage.removeItem("site");
        localStorage.removeItem("user");
        navigate("/login");
      }
    }
  }

  const registerAction = async(data) => {
    try {
      const expirationDate = new Date().getTime() + (3 * 60 * 60 * 1000)
      const res = await register(data.name, data.email, data.password)

      if (res.error == false) {
        const user = res.user
        user.expiresAt = expirationDate

        setUser(user)
        setToken(res.token)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("site", res.token)
        navigate("/dashboard")
        return
      }

      throw new Error(JSON.stringify(res.message))
    } catch (err) {
      return err.message
    }
  }

  const loginGoogleAction = async (data) => {
    try {
      const expirationDate = new Date().getTime() + (3 * 60 * 60 * 1000)
      const res = await loginGoogle(data)

      if (res.error == false) {
        const user = res.user
        user.expiresAt = expirationDate

        setUser(user)
        setToken(res.token)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("site", res.token)

        fetchCart(res.token)

        navigate("/")
        
        return {
          error: false
        }
      }

      throw new Error(res.message)
    } catch (err) {
      return {
        error: true,
        message: err.message
      }
    }
  }

  return <AuthContext.Provider value={{ token, user, loginAction, logOut, registerAction, loginGoogleAction }}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}