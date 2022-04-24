// import React from "react";

// const Login = () => {
//
// };
// export { Login };
import React, { useState } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

export const Login = () => {
  const clientId =
    "383712894333-qbqeum8kkj8djfnpkh3q53bo6etbj05i.apps.googleusercontent.com";
  const [loginBtn, setLoginBtn] = useState(true);
  const [logOutBtn, setLogOutBtn] = useState(false);
  debugger;
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setLoginBtn(false);
    setLogOutBtn(true);
  };
  const onFailureSuccess = (res) => {
    console.log("Login Failed:", res);
  };
  const onSignoutSuccess = () => {
    alert("You have been signed out successfully");
    setLoginBtn(true);
    setLogOutBtn(false);
    console.clear();
  };

  return (
    <div>
      {loginBtn ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onFailureSuccess}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {logOutBtn ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}

      <div className="login">
        <form className="login_from">
          <h1> Login </h1>
          <input type="name" placeholder="name" />
          <input type="Email" placeholder="Email" />
          <input type="Password" placeholder="Password" />
        </form>
      </div>
      <button>Submit</button>
    </div>
  );
};
