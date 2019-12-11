import React from 'react';
import "./Navbar.css";
import Logo from "../Logo/Logo"
import Burger from "../Burger/Burger"
import ProfilePicture from "../ProfilePicture/ProfilePicture"

// Function based React Component
const Navbar = (props) => {

  // Default Class to apply to Component
  let classList = `Navbar`;
  let menuShow = false;

  const DisplayMenu = () => {
    menuShow = !menuShow;
  }

  return (
    <div className={classList}>
      <div className="Navbar__logo">
        <Logo clickable to="/route" />
      </div>
      <div className="Navbar__main">
        <div className="Navbar__profile">
          <ProfilePicture type="extra-small" link="#" image={props.profileImage} />
        </div>
        <div className="Navbar__burger">
          <Burger menuShow="DisplayMenu" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
