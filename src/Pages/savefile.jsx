// import React, { useState } from "react";
// import "./CSS/LoginSignup.css";

// const LoginSignup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Update the corresponding state based on the input name
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "email":
//         setEmail(value);
//         break;
//       case "password":
//         setPassword(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const checkTruth = () => {
//     let value = false;
//     if (name && email && Password) {
//       value = true;
//     }
//     return value;
//   };

//   const showAlert = () => {
//     let checkTruth = false;
//     if (name && email && Password) {
//       // console.log("true");
//       alert("you are in Betty!");
//       checkTruth = true;
//     }
//     return checkTruth;
//     // if (checkTruth()) {
//     //   return true;
//     // } else {
//     //   return false;
//     // }
//   };

//   // console.log(showAlert());

//   return (
//     <div className="loginSignup">
//       <div className="loginSignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input
//             type="text"
//             name="name"
//             onChange={handleInputChange}
//             placeholder="Your Name"
//           />
//           <input
//             type="text"
//             name="email"
//             onChange={handleInputChange}
//             placeholder="Email Address"
//           />
//           <input
//             type="password"
//             name="password"
//             onChange={handleInputChange}
//             placeholder="Password"
//           />
//         </div>
//         <button onClick={showAlert}>Continue</button>
//         {console.log(showAlert)}
//         <p className="loginSignup-login">
//           Already have an account <span>Login here</span>
//         </p>
//         <div className="loginSignup-agree">
//           <input type="checkbox" name="" id="" />
//           <p>By continuing, I agree to the terms of use & privacy</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

// import React, { useState } from "react";
// import "./CSS/LoginSignup.css";

// const LoginSignup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // Update the corresponding state based on the input name
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "email":
//         setEmail(value);
//         break;
//       case "password":
//         setPassword(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const showAlert = () => {
//     let condition = false;
//     if (name && email && Password) {
//       alert("you are in");
//       console.log("in");
//       condition = true;
//     }
//     return condition;
//   };

//   // showAlert();
//   return (
//     <div className="loginSignup">
//       <div className="loginSignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input
//             type="text"
//             name="name"
//             onChange={handleInputChange}
//             placeholder="Your Name"
//           />
//           <input
//             type="text"
//             name="email"
//             onChange={handleInputChange}
//             placeholder="Email Address"
//           />
//           <input
//             type="password"
//             name="password"
//             onChange={handleInputChange}
//             placeholder="Password"
//           />
//         </div>
//         <button onClick={showAlert}>Continue</button>
//         <p className="loginSignup-login">
//           Already have an account <span>Login here</span>
//         </p>
//         <div className="loginSignup-agree">
//           <input type="checkbox" name="" id="" />
//           <p>By continuing, I agree to the terms of use & privacy</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cartItems with data from local storage or default if not available
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
  });

  useEffect(() => {
    // Update local storage whenever cartItems change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
