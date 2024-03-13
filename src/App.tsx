import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";
import Home from "./components/Home";
import Products from "./components/products/Products";
import NavigationBar from "./components/navigationbar/NavigationBar";
import { PaletteMode } from "@mui/material";
import showAuthenticationContext from "./utils/contextUtils";

function App() {
  const [showAuthentication, setShowAuthentication] = useState(true);

  const [mode, setMode] = useState<PaletteMode>("dark");
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <>
      {/* <showAuthenticationContext.Provider
        value={{ showAuthentication, setShowAuthentication }}
      > */}
      <NavigationBar mode={mode} toggleColorMode={toggleColorMode} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
