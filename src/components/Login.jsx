import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom" ;
import fakeLogin from "../utils/fakeLogin";
import Header from "./Header";
import "../styles/login.css";
import AuthContext from "../utils/AuthContext";
import jwtDecode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = ({ target: { value, id } }) => {
    setDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Normally the password (in details) would be hashed with bcrypt
        This example uses hardcoded data without the backend but you must always
        remember to hash your passwords before sending them to the backend */
    const res = fakeLogin(details);
    if (res.error) {
      setError(res.error);
    } else {
      console.log("credentials are correct", "<-- login");
      console.log(res.token);
      setUser(jwtDecode(res.token));
      setError(null);
      navigate("/account");
    }
  };

  return (
    <>
      <Header />
      <p className="login__title">Please enter your details below to login</p>
      <div className="container">
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input id="username" onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input id="email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={handleChange} />
          <button className="login__form-button" type="submit">
            Login
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Login;
