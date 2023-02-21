import { useContext } from "react";
import { UsersContext } from "../main";

const Home = () => {
  const users = useContext(UsersContext);

  return (
    <main>
      <h1>Home</h1>
      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
    </main>
  );
};

export default Home;
