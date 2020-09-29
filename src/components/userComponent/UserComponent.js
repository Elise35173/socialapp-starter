import React from "react";

class User extends React.Component {
  render() {
    return <li className="user">{this.props.username}</li>;
  }
}

export default User;
