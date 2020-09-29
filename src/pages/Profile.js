import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import FileUploader from "../components/fileUploader/FileUploader";
import Post from "../components/post/Post";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <FileUploader />
        <Post />
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
