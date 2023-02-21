import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../styles/Login.module.css";
import line from "../assets/img/line.svg";
import ellipse from "../assets/img/ellipse.png";
import triangle from "../assets/img/triangle.png";
import suitcase from "../assets/img/suitcase.png";
import square from "../assets/img/square.png";
import hands from "../assets/img/hands.png";

function Login() {
  const usersFake = [
    { email: "admin@admin.com", password: "1234admin" },
    { email: "user@user.com", password: "1234user" },
  ];

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    usersFake.map((item) => {
      if (values.email === item.email && values.password === item.password) {
        console.log("has entrado");
      } else {
        console.log("datos no válidos");
      }
    });
  };

  return (
    <>
      <h1 className={styles.h1}>
        Optimize <br />
        your airport
        <br /> personnel
      </h1>
      <img src={line} className={styles.line} />
      <div className={styles.grid}>
        <div className={styles.right}>
          <img src={ellipse} className={styles.ellipse} />
          <p className={styles.p}>GET THE BUSES FROM TERMINAL TO PLANES WITH COMPLETE FLEXIBILITY</p>
        </div>
        <div>
          <img src={triangle} className={styles.triangle} />
          <img src={suitcase} className={styles.suitcase} />
          <p className={`${styles.p} ${styles.left}`}>GET THE LUGGAGE ON BOARD FOR A TIMELY DEPARTURE WITH NO DELAYS</p>
        </div>
        <div className={styles.secondRight}>
          <img src={square} className={styles.square} />
          <img src={hands} className={styles.hands} />
          <p className={styles.p}>INTEGRATE ALL TASKS BETWEEN TEAMS WITH UTMOST HARMONY</p>
        </div>
      </div>
      <div className="relative flex items-center h-screen justify-center px-4 text-[#4d4d4d]">
        <div className={`${styles.card} flex w-[400px] h-[300px] bg-[#ffcc00] flex-col justify-between p-6`}>
          <div className="w-full space-y-8 ">
            <div className="">
              <h2 className={`${styles.heading} mt-5 text-3xl font-bold tracking-tight`}>Login</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="grid gap-3 rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="p-1 rounded-sm w-full bg-white"
                    placeholder="User email"
                    value={values.email}
                    onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
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
                    value={values.password}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="rounded-full bg-[#4d4d4d] text-white px-8 py-2">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
