import { useContext } from "react";
import { UsersContext } from "../../main";
import styles from "./Home.module.css";

const Home = () => {
  const users = useContext(UsersContext);

  return (
    <main className={styles.main}>
      <h1>Home</h1>
      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </main>
  );
};

export default Home;
