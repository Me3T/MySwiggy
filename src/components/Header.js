import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [buttonChange, setButtonChange] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app_logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              buttonChange === "Login"
                ? setButtonChange("Logout")
                : setButtonChange("Login")
            }
          >
            {buttonChange}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
