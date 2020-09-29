import React from "react";
import MessageService from "../services/MessageService";
import Message from "../components/messageComponent/MessageComponent";

class MessageFeed extends React.Component {
    state = {
        messages: [],
    }
    componentDidMount () {
        new MessageService()
            .getRecentMessages()
            .then(messages => {
                this.setState({ messages })
            })
    }
    render() {
        if (this.state.messages.length === 0) { 
            return (
                <div className="MessageFeed">
                    <h1>Message Feed</h1>
                    <h3>Loading...</h3>
                </div>
            )
    }
    return (
            <div className="MessageFeed">
                <h1>Message Feed</h1>
                <ul>
                    {this.state.messages.map(msg => (
                    <Message key={msg.id} {...msg} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default MessageFeed;
