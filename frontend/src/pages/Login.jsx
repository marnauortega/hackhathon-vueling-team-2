import { useContext, useEffect, useState } from "react"
import axios, { Axios } from "axios"
import styles from "../styles/Home.module.css"
import { Navigate, useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [token, setToken] = useState("")

  // username: "VuelingEmployeeUser",
  // password: "VuelingEmployeeUser$123",

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(" https://vuelingemployee-api.azurewebsites.net/User/login", {
        username: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data.result)
        setToken(response.data.result)
        localStorage.setItem("token", response.data.result)
        setUser(email)
        console.log("token", token)
      })
      .catch(function (error) {
        console.log(error)
      })

    email === "VuelingEmployeeUser"
      ? navigate("/viewer")
      : navigate("/formPage")
  }

  return (
    <>
      <div className="relative flex items-center h-screen justify-center px-4 text-[#4d4d4d]">
        <div
          className={`${styles.card} flex w-[400px] h-[300px] bg-[#ffcc00] flex-col justify-between p-6`}
        >
          <div className="w-full space-y-8 ">
            <div className="">
              <h2
                className={`${styles.heading} mt-5 text-3xl font-bold tracking-tight`}
              >
                Login
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="grid gap-3 rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="text"
                    required
                    className="p-1 rounded-sm w-full bg-white"
                    placeholder="User email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="p-1 rounded-sm w-full bg-white"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-[#4d4d4d] text-white px-8 py-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
