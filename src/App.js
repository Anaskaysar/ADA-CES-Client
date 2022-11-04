import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ForgetPassword from "./component/Authentication/ForgetPassword/ForgetPassword";
import Login from "./component/Authentication/Login/Login";
import RequireAuth from "./component/Authentication/Login/RequireAuth";
import SignUp from "./component/Authentication/SignUp/SignUp";
import SampleData from "./component/DashBoard/SampleData";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import NotFound from "./component/NotFound/NotFound";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgetpass" element={<ForgetPassword />} />
        <Route path="profile" element={
          <RequireAuth>
            <SampleData />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
