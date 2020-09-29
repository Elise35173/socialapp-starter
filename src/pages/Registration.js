import React from "react";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { userIsNotAuthenticated } from "../redux/HOCs";

class RegistrationPage extends React.Component {
  render() {
    return (
      <div className="Registration">
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(RegistrationPage);
