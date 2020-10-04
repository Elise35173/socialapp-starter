import React from "react";
import "./Profile.css";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import FileUploader from "../components/fileUploader/FileUploader";
import Post from "../components/post/Post";
import MessageFeed from "../pages/MessageFeed";




class Profile extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        
        
        <FileUploader />
        <Post />
        <MessageFeed />
        
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
