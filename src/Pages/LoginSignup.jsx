import React from "react";
import "./CSS/LoginSignup.css";
import { ShopContext } from "../Context/ShopContext";

const LoginSignup = () => {
  const userName = "username";
  const password = "12345";

  const checkCridentials = () => {
    const inputUserName = document.getElementById("userName").value;
    const inputPassword = document.getElementById("password").value;
    let status = false;

    if (inputUserName === userName && inputPassword === password) {
      alert("you are in");
      status = true;
    }
    return status;
  };
  // checkCridentials();
  // console.log(checkCridentials());
  const func = () => {
    let check = checkCridentials();
    return check;
  };
  console.log(func);
  const condition = true;
  return (
    <div className="loginSignup">
      <ShopContext condition={condition} />
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input
            id="userName"
            type="text"
            name="userName"
            placeholder="User Name"
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button onClick={checkCridentials}>Log in</button>
        <p className="loginSignup-login">
          Already have an account <span>Login here</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

// import React, { useState, useContext } from "react";
// import "./CSS/LoginSignup.css";
// // import { ShopContext } from "../Context/ShopContext";

// const LoginSignup = () => {
//   const userName = "username";
//   const password = "12345";

//   const [status, setStatus] = useState(false);
//   // const day = true;
//   // const initalStatusPassed = false;

//   // const { statusPassed, updateStautsPassed } = useContext(ShopContext);
//   // console.log(statusPassed);

//   const checkCridentials = () => {
//     const inputUserName = document.getElementById("userName").value;
//     const inputPassword = document.getElementById("password").value;

//     if (inputUserName === userName && inputPassword === password) {
//       alert("you are in");
//       setStatus(true);
//     }
//   };

//   console.log(status);

//   return (
//     <div className="loginSignup">
//       <div className="loginSignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input
//             id="userName"
//             type="text"
//             name="userName"
//             placeholder="User Name"
//           />
//           <input
//             id="password"
//             type="password"
//             name="password"
//             placeholder="Password"
//           />
//         </div>
//         <button onClick={checkCridentials}>Log in</button>
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
// export const day = true;

// export default LoginSignup;

// // import React, { useState } from "react";
// // import "./CSS/LoginSignup.css";

// // const LoginSignup = () => {
// //   const [state, setState] = useState("Login");
// //   const [formData, setFormData] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //   });

// //   const changeHandler = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const login = async () => {
// //     let dataObj;
// //     await fetch("http://localhost:4000/login", {
// //       method: "POST",
// //       headers: {
// //         Accept: "application/form-data",
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(formData),
// //     })
// //       .then((resp) => resp.json())
// //       .then((data) => {
// //         dataObj = data;
// //       });
// //     console.log(dataObj);
// //     if (dataObj.success) {
// //       localStorage.setItem("auth-token", dataObj.token);
// //       window.location.replace("/");
// //     } else {
// //       alert(dataObj.errors);
// //     }
// //   };

// //   const signup = async () => {
// //     let dataObj;
// //     await fetch("http://localhost:4000/signup", {
// //       method: "POST",
// //       headers: {
// //         Accept: "application/form-data",
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(formData),
// //     })
// //       .then((resp) => resp.json())
// //       .then((data) => {
// //         dataObj = data;
// //       });

// //     if (dataObj.success) {
// //       localStorage.setItem("auth-token", dataObj.token);
// //       window.location.replace("/");
// //     } else {
// //       alert(dataObj.errors);
// //     }
// //   };

// //   return (
// //     <div className="loginsignup">
// //       <div className="loginsignup-container">
// //         <h1>{state}</h1>
// //         <div className="loginsignup-fields">
// //           {state === "Sign Up" ? (
// //             <input
// //               type="text"
// //               placeholder="Your name"
// //               name="username"
// //               value={formData.username}
// //               onChange={changeHandler}
// //             />
// //           ) : (
// //             <></>
// //           )}
// //           <input
// //             type="email"
// //             placeholder="Email address"
// //             name="email"
// //             value={formData.email}
// //             onChange={changeHandler}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             name="password"
// //             value={formData.password}
// //             onChange={changeHandler}
// //           />
// //         </div>

// //         {state === "Login" ? (
// //           <button
// //             onClick={() => {
// //               login();
// //             }}
// //           >
// //             Continue
// //           </button>
// //         ) : (
// //           <button
// //             onClick={() => {
// //               signup();
// //             }}
// //           >
// //             Continue
// //           </button>
// //         )}

// //         {state === "Login" ? (
// //           <p className="loginsignup-login">
// //             Create an account?{" "}
// //             <span
// //               onClick={() => {
// //                 setState("Sign Up");
// //               }}
// //             >
// //               Click here
// //             </span>
// //           </p>
// //         ) : (
// //           <p className="loginsignup-login">
// //             Already have an account?{" "}
// //             <span
// //               onClick={() => {
// //                 setState("Login");
// //               }}
// //             >
// //               Login here
// //             </span>
// //           </p>
// //         )}

// //         <div className="loginsignup-agree">
// //           <input type="checkbox" name="" id="" />
// //           <p>By continuing, i agree to the terms of use & privacy policy.</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginSignup;
