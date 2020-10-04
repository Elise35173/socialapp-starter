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

  handleChange = (e) => this.setState({ value: e.target.value })

  render() {    
    return (
      <form >
        <input className="postHole"
          name="PostBox"
          placeholder="Got something to say? ...."
          value={this.state.value}
          onChange={this.handleChange}

          
        />
        <button   onClick={this.handleMessage} className="postBtn"> Post</button>
      </form>
    );
  }
}

export default Post;
