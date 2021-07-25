import React from "react";
import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/login/Login";
import AuthState, { useAuth } from "./context/AuthState";

function App() {
  const currentUser = useAuth();
  return (
    <AuthState>
      <div className="app">
        {/* Header */}
        <Header />
        {/* App body */}

        {!currentUser ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/* Widgets */}
          </div>
        )}
      </div>
    </AuthState>
  );
}

export default App;
