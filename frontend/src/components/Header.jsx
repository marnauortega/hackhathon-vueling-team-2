import { Link } from "react-router-dom";
import logo from "/img/logo-team.svg";

const Header = () => {

  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/formPage">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
