import "../styles/app.css";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Home";
import Account from "./Account";
import Login from "./Login";
import Cookie from "js-cookie";

import AuthContext from "../utils/AuthContext";
import jwtDecode from "jwt-decode";

const App = () => {
  const [user, setUser] = useState();
  console.log(user);

  useEffect(() => {
    const jwt = Cookie.get("jwt");
    if (jwt) {
      const currentUser = jwtDecode(jwt);
      setUser(currentUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/account"
              element={user ? <Account /> : <Navigate to="/login" replace />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
