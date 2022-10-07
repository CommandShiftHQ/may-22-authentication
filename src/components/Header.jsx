import "../styles/header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // TODO navigate to /login if not logged in, /account otherwise
    if (false) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="header">
    <div className="header__username">
      {/* TODO: display username here when logged in */}
      username
      </div>
      <Link className="header__nav-link" to="/">
        Home
      </Link>
      <div className="header__nav-link" onClick={handleClick}>
        Account
      </div>
      <Link className="header__nav-link" to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Header;
