import React from "react";
import UserService from "../services/UserService";
import User from "../components/userComponent/UserComponent";

class UserList extends React.Component {
  state = { users: [] };
  componentDidMount() {
    new UserService().getRecentUsers().then((users) => {
      this.setState({ users });
    });
  }
  render() {
    if (this.state.users.length === 0) {
      return (
        <div className="users">
          <h1>Users</h1>
          <h3>Loading...</h3>
        </div>
      );
    }

    return (
      <div className="users">
        <ul>
          <h1>Here's a List of Users:</h1>
          {this.state.users.map((usr) => (
            <User key={usr.createdAt} {...usr} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
