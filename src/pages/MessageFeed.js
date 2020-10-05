import React from "react";
import MessageService from "../services/MessageService";
import Message from "../components/messageComponent/MessageComponent";
import "./MessageFeed.css";

class MessageFeed extends React.Component {
  intervalID;
  state = {
    messages: [],
  };
  componentDidMount() {
    this.getData()
  }
  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }
  getData = () => {
    new MessageService().getRecentMessages().then((messages) => {
      this.setState({ messages });
      this.intervalID = setTimeout(this.getData.bind(this), 5000);
    });
  }
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div className="MessageFeed">
          <h1>Message Feed</h1>
          <h3>Loading...</h3>
        </div>
      );
    }
    return (
      <div className="MessageFeed">
        
        <ul>
          {this.state.messages.map((msg) => (
            <Message key={msg.id} {...msg} />
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageFeed;
