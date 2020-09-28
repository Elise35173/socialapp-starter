import React from "react";
import MessageService from "../../services/MessageService";

class Message extends React.Component {
    state = { likeCount: this.props.likes.length }
    handleLike = () => {
        const messageService = new MessageService()
        const username = messageService.getUsername()
        if (this.props.likes.some(like => like.username === username)) return

        messageService
            .postLike(this.props.id)
            .then(like => {
                console.log(like)
                this.setState(latestState => ({ likeCount: latestState.likeCount + 1 }))
            })
    }

    removeLike = () => {
        const messageService = new MessageService()
        const username = messageService.getUsername()
        if (this.props.likes.some(like => like.username !== username)) return

        messageService
            .deleteLike(this.props.id)
            .then(unlike => {
                console.log(unlike)
                this.setState(latestState => ({ likeCount: latestState.likeCount - 1 }))
            })
    }

    render () {
        return (
            <li className="Message">
                At {this.props.createdAt}, {this.props.username} posted:
                <br />
                {this.props.text}
                <div className="like-count">
                    Likes: {this.state.likeCount}
                </div>
                <button onClick={this.handleLike}>Like</button>
                <button onClick={this.removeLike}>Unlike</button>
            </li>
        )
    }
}

export default Message;