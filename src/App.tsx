import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";
import Home from "./components/Home";
import Products from "./components/products/Products";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
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
