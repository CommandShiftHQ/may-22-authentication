import "../styles/app.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Account from "./Account";
import Login from "./Login";

import AuthContext from "../utils/AuthContext";

const App = () => {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
