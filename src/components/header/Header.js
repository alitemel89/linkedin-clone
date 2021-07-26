import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "../header-option/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import {
  BusinessCenter,
  Chat,
  ExitToApp,
  Notifications,
} from "@material-ui/icons";
import { auth } from "../../firebase";
import { useAuth } from "../../context/AuthContext";

function Header() {

  const { currentUser } = useAuth()
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="https://media-exp3.licdn.com/dms/image/C4D03AQGLhj1izR5c_g/profile-displayphoto-shrink_800_800/0/1581415523675?e=1631145600&v=beta&t=siG6NQjNRWRDDOoAbTqFs0NukPqO3NFeMujZz6n-7EE" />
        {
          currentUser ? (<div onClick={() => auth.signOut()}>
          <HeaderOption Icon={ExitToApp} title="Logout" />
        </div>) : null
        }
        
      </div>
    </div>
  );
}

export default Header;
