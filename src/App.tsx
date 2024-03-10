import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
