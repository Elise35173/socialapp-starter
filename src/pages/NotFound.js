import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
        <p>Page not found for {this.props.location.pathname}</p>
        <img
          className="Image"
          src="https://miro.medium.com/max/875/1*oTOmPQFJQSOHrYHWnxytgA.png"
          alt="Not Found"
        />
        <Link to="/">Go Home</Link>
      </div>
    );
  }
}

export default NotFound;
