import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import GoogleLoginButton from "../components/googleLoginButton/GoogleLoginButton"
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h2>Welcome to Yowl</h2>
        <LoginForm />
        <GoogleLoginButton />
        <hr />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
