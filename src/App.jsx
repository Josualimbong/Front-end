import { Route, Routes } from "react-router-dom"
import "./App.css"
import Books from "./Pages/Books"
import Navbar from "./component/Navbar"
import Home from "./Pages/Home"
import Login from "./Pages/LoginPage"
import Register from "./Pages/Register"
// import Home from "./component/Home"
import LandingPage from "./Pages/LandingPage"
import { login } from "./redux/features/authSlice"
import { axiosInstance } from "./api"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"

const App = () => {
  const [authCheck, setAuthCheck] = useState(false)
  const dispatch = useDispatch()
  const keepUserLoggedIn = async () => {
    try {
      const auth_token = localStorage.getItem("auth_token")

      if (!auth_token) {
        setAuthCheck(true)
        return
      }

      const response = await axiosInstance.get("/auth/refresh-token", {
        headers: {
          authorization: `Bearer ${auth_token}`,
        },
      })

      localStorage.setItem("auth_token", response.data.token)

      dispatch(login(response.data.data))
    } catch (err) {
      console.log(err)
      setAuthCheck(true)
    }
  }
  useEffect(() => {
    keepUserLoggedIn()
  }, [])
  return (
    <body>
      <Navbar />
      {/* <Home /> */}
      {/* <LandingPage /> */}
      {/* <Home /> */}
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/home" element={<LandingPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </body>
  )
}

export default App
