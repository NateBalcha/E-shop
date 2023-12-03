// import React, { useContext } from "react";
// import "./Navbar.css";
// import logo from "../Assets/logo.png";
// import cart_icon from "../Assets/cart_icon.png";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";

// const Navbar = () => {
//   // underlines the clicked/current page
//   const [menu, setMenu] = useState("shop");
//   const { getTotalCartItems } = useContext(ShopContext);

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="" />
//         <p>SHOPPER</p>
//       </div>
//       <ul className="nav-menu">
//         {/* if a tab is clicked it is underlined to show that its current tab */}
//         <li
//           onClick={() => {
//             setMenu("shop");
//           }}
//         >
//           <Link
//             className="nav-menu-link"
//             style={{ textDecoration: "none" }}
//             to="/"
//           >
//             Shop
//           </Link>
//           {/* if the path is not the same value as the string it won't be undelined*/}
//           {window.location.pathname === "/" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("mens");
//             console.log(window.location.pathname);
//           }}
//         >
//           <Link
//             className="nav-menu-link"
//             style={{ textDecoration: "none" }}
//             to="/mens"
//           >
//             Mens
//           </Link>

//           {window.location.pathname === "/mens" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("womens");
//           }}
//         >
//           <Link
//             className="nav-menu-link"
//             style={{ textDecoration: "none" }}
//             to="/womens"
//           >
//             Womens
//           </Link>

//           {window.location.pathname === "/womens" ? <hr /> : <></>}
//         </li>
//         <li
//           onClick={() => {
//             setMenu("kids");
//           }}
//         >
//           <Link
//             className="nav-menu-link"
//             style={{ textDecoration: "none" }}
//             to="/kids"
//           >
//             Kids
//           </Link>
//           {window.location.pathname === "/kids" ? <hr /> : <></>}
//         </li>
//       </ul>
//       <div className="nav-login-cart">
//         <Link to="/login">
//           <button>Login</button>
//         </Link>

//         <Link to="/cart">
//           <img src={cart_icon} alt="" />
//         </Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  let [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }} className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </Link>
      <ul className="nav-menu">
        <li
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
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
