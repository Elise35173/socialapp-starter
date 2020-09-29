import React from "react";
import MessageService from "../../services/MessageService";

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
      <form onSubmit={this.handleMessage}>
        <input
          name="PostBox"
          placeholder="Add a comment..."
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button> Post</button>
      </form>
    );
  }
}

export default Post;
