import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h2>Welcome to Yowl</h2>
        <LoginForm />
        <hr />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
