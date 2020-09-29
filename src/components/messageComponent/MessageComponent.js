import React from "react";
import MessageService from "../../services/MessageService";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.likes.length,
      likes: this.props.likes,
      deleted: false,
    };
    this.client = new MessageService();
  }

  deleteMessage = (event) => {
    event.preventDefault();
    return this.client
      .deleteMessage(this.props.id)
      .then((result) => this.setState({ deleted: true }));
  };

  handleLike = () => {
    const messageService = new MessageService();
    const username = messageService.getUsername();
    if (this.state.likes.some((like) => like.username === username)) return;

    messageService.postLike(this.props.id).then((like) => {
      console.log(like);
      this.setState((latestState) => ({
        likeCount: latestState.likeCount + 1,
        likes: [...latestState.likes, like],
      }));
      console.log(this.state.likes);
    });
  };

  removeLike = () => {
    const messageService = new MessageService();
    const username = messageService.getUsername();
    const likeIndex = this.state.likes.findIndex(
      (like) => (like.username = username)
    );
    if (this.state.likes.some((like) => like.username === username)) {
      messageService.deleteLike(this.state.likes[likeIndex].id).then((like) => {
        console.log(like);
        this.setState((latestState) => ({
          likeCount: latestState.likeCount - 1,
          likes: [],
        }));
      });
    }
  };

  render() {
    let Delete = "";
    let userData = JSON.parse(localStorage.getItem("login"));
    if (userData.result.username === this.props.username) {
      Delete = <button onClick={this.deleteMessage}>Delete Message</button>;
    }
    if (this.state.deleted === true) {
      return <div></div>;
    }
    return (
      <li className="Message">
        At {this.props.createdAt}, {this.props.username} posted:
        <br />
        {this.props.text}
        <div className="like-count">Likes: {this.state.likeCount}</div>
        <button onClick={this.handleLike}>Like</button>
        <button onClick={this.removeLike}>Unlike</button>
        {Delete}
      </li>
    );
  }
}

export default Message;
