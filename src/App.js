import React from "react";
import "./App.css";
import Feed from "./components/feed/Feed";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./components/login/Login";
import { useAuth } from "./context/AuthContext";

function App() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App body */}

      {currentUser ? (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
