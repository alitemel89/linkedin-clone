import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "../header-option/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import { BusinessCenter, Chat, Notifications } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="https://media-exp3.licdn.com/dms/image/C4D03AQGLhj1izR5c_g/profile-displayphoto-shrink_800_800/0/1581415523675?e=1631145600&v=beta&t=siG6NQjNRWRDDOoAbTqFs0NukPqO3NFeMujZz6n-7EE" />
      </div>
    </div>
  );
}

export default Header;
