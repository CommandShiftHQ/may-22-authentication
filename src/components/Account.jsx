import "../styles/account.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../utils/AuthContext";
import Cookie from "js-cookie";

const Account = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    // TODO handle logging out of user
    Cookie.remove('jwt');
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <Header />
      <h1 className="account__header">My Account</h1>
      <div className="container">
        <p>Welcome username!</p>
        <p>Here are your current details</p>
        <ul>
          <li className="account__user-item">
            username: <span>{user.username}</span>
          </li>
          <li className="account__user-item">
            email: <span>{user.email}</span>
          </li>
        </ul>
        <button className="account__button" onClick={handleClick}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Account;
