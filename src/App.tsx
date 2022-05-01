import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import CreateLink from "./pages/createlink/CreateLink";
import Dashboard from "./pages/dashboard/Dashboard";
import Design from "./pages/design/Design";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import User from "./pages/user/User";

function App() {
  return (
    <div className="bg-[#f5f6f8]">
      <BrowserRouter>
        <div className="flex-grow">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:username" element={<User />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<CreateLink />} />
            <Route path="/design" element={<Design />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
