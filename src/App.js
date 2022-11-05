import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/Authentication/Login/Login";
import RequireAuth from "./component/Authentication/Login/RequireAuth";
import SignUp from "./component/Authentication/SignUp/SignUp";
import Dashboard from "./component/DashBoard/Dashboard";
import SampleData from "./component/DashBoard/SampleData";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import NotFound from "./component/NotFound/NotFound";
import ManageUsers from "./component/DashBoard/Admin/ManageUsers"
import Grades from "./component/DashBoard/Grades";
import Charts from "./component/DashBoard/Charts/Charts";
import DashHome from "./component/DashBoard/DashHome/DashHome";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="data" element={<Charts />} />



        <Route path="dashboard" element={<RequireAuth> <Dashboard /> </RequireAuth>}>
          <Route index element={<DashHome />} />
          <Route path="grades" element={<Grades />} />
          <Route path="chart" element={<Charts />} />
          <Route path="manageUsers" element={<ManageUsers />} />
          <Route path="charts" element={<Charts />} />
        </Route>

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
