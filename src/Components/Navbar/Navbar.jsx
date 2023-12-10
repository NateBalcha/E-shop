import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  let [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>ClickBoutique</p>
      </Link>
      <ul className="nav-menu">
        <li
          className="nav-menu-link"
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          className="nav-menu-link"
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          className="nav-menu-link"
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          className="nav-menu-link"
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img className="nav-cart-icon" src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

      {/*  */}
      <button
        type="button"
        className="navbar-toggler-btn"
        onClick={handleNavbar}
      >
        <HiOutlineMenuAlt3
          className="hamburger-menu"
          size={35}
          style={{
            color: `${toggleMenu ? "#fff" : "#010101"}`,
          }}
        />
      </button>

      <div
        className={
          toggleMenu
            ? "navbar-collapse show-navbar-collapse"
            : "navbar-collapse"
        }
      >
        <ul className="small-screen-nav-menu">
          <div className="test">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mens">
                Mens
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/womens">
                Womens
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kids">
                Kids
              </Link>
            </li>
          </div>
        </ul>
      </div>
      {/*  */}
    </div>
  );
};

export default Navbar;
