import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarLayout from "./components/sidebar/SidebarLayout";
import { useAuthContext } from "./hooks/useAuthContext";
import CreateLink from "./pages/createlink/CreateLink";
import Dashboard from "./pages/dashboard/Dashboard";
import Design from "./pages/design/Design";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import User from "./pages/user/User";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="bg-[#f5f6f8]">
      {authIsReady && (
        <BrowserRouter>
          <div>
            <Routes>
              <Route element={<SidebarLayout />}>
                <Route
                  path="/dashboard"
                  element={
                    user ? <Dashboard /> : <Navigate to="/signup" replace />
                  }
                />
                <Route
                  path="/create"
                  element={
                    user ? <CreateLink /> : <Navigate to="/signup" replace />
                  }
                />
                <Route
                  path="/design"
                  element={
                    user ? <Design /> : <Navigate to="/signup" replace />
                  }
                />
              </Route>
              <Route
                path="/signup"
                element={
                  user ? <Navigate to="/dashboard" replace /> : <Signup />
                }
              />
              <Route
                path="/login"
                element={
                  user ? <Navigate to="/dashboard" replace /> : <Login />
                }
              />
              <Route path="/:username" element={<User />} />

              {/* <Route path="*" element={<Navigate to="/signup" replace />} /> */}
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
