import React from "react";
import MessageService from "../../services/MessageService";
import "./Post.css";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.client = new MessageService();
  }

  handleMessage = (e) => {
    e.preventDefault();
    const message = {
      text: this.state.value,
    };
    this.client.postMessage(message);
  };

  render() {
    return (
      <form  onChange={this.handleMessage}>
        <input className="postHole"
          name="PostBox"
          placeholder="Got something to say? ...."
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button className="postBtn"> Post</button>
      </form>
    );
  }
}

export default Post;
