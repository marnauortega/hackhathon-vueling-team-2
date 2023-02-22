import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import line from "../assets/img/line.svg";
import ellipse from "../assets/img/ellipse.png";
import bus from "../assets/img/bus.png";
import triangle from "../assets/img/triangle.png";
import suitcase from "../assets/img/suitcase.png";
import square from "../assets/img/square.png";
import hands from "../assets/img/hands.png";
import plane from "../assets/img/plane.png";
import { motion } from "framer-motion";
import { UsersContext } from "../main";
import axios from "axios";

function Login() {
  const { setLogged } = useContext(UsersContext);

  // const usersFake = [
  //   { email: "admin@admin.com", password: "1234admin" },
  //   { email: "user@user.com", password: "1234user" },
  // ];
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(" https://vuelingemployee-api.azurewebsites.net/User/login", {
        username: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data.result);
        setToken(response.data.result);
        localStorage.setItem("token", response.data.result);
        setUser(email);
        setLogged(true);
        window.scrollTo({ top: 0 });
        console.log("token", token);
        email === "VuelingEmployeeUser" ? navigate("/viewer") : navigate("/formPage");
      })
      .catch(function (err) {
        setError(err);
        console.log(err);
      });
  };

  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });

  const [error, setError] = useState();

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   usersFake.map((item) => {
  //     if (values.email === item.email && values.password === item.password) {
  //       console.log("has entrado");
  //       setLogged(true);
  //       window.scrollTo({ top: 0 });
  //       navigate("/viewer");
  //     } else {
  //       console.log("no has entrado");
  //       setLogged(false);
  //       setError(true);
  //     }
  //   });
  // };

  const planeRef = useRef();

  return (
    <>
      <motion.h1
        className={styles.h1}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Optimize <br />
        your airport
        <br /> personnel
      </motion.h1>
      <img src={plane} className={styles.plane} ref={planeRef} />
      <div className={styles.planeBg}></div>
      <img src={line} className={styles.line} />
      <div className={styles.grid}>
        <div className={styles.right}>
          <motion.img
            src={ellipse}
            className={`${styles.ellipse} ${styles.rotate}`}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
          />
          <motion.img
            src={bus}
            className={`${styles.bus} ${styles.rotate}`}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
          />
          <motion.p
            className={styles.p}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
          >
            GET THE BUSES FROM TERMINAL TO PLANES WITH COMPLETE FLEXIBILITY
          </motion.p>
        </div>
        <div className={styles.middle}>
          <motion.img
            src={triangle}
            className={styles.triangle}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
          />
          <motion.img
            src={suitcase}
            className={`${styles.suitcase} ${styles.rotate}`}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
          />
          <motion.p
            className={`${styles.p} ${styles.left}`}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
          >
            BRING THE LUGGAGE ON BOARD FOR A TIMELY DEPARTURE WITH NO DELAYS
          </motion.p>
        </div>
        <div className={styles.secondRight}>
          <motion.img
            src={square}
            className={styles.square}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
          />
          <motion.img
            src={hands}
            className={`${styles.hands} ${styles.rotate}`}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
          />
          <motion.p
            className={styles.p}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
          >
            INTEGRATE ALL TASKS BETWEEN TEAMS WITH UTMOST HARMONY
          </motion.p>
        </div>
      </div>
      <div className="relative flex items-center h-screen justify-center px-4 text-[#4d4d4d] z-20">
        <motion.div
          className={`${styles.card} flex w-[400px] h-[350px] bg-[#ffcc00] flex-col justify-between p-6`}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => (planeRef.current.style.opacity = 0)}
          onViewportLeave={() => (planeRef.current.style.opacity = 1)}
        >
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
                    className={error ? "p-1 rounded-sm w-full bg-red-300" : "p-1 rounded-sm w-full bg-white"}
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
                    className={error ? "p-1 rounded-sm w-full bg-red-300" : "p-1 rounded-sm w-full bg-white"}
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <label className={error ? "text-red-600" : "hidden"}>Datos incorrectos</label>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="rounded-full bg-[#4d4d4d] text-white px-8 py-2" onClick={handleSubmit}>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
