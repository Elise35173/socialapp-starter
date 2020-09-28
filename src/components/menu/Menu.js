import React from "react";
import { withAsyncAction } from "../../redux/HOCs";

import "./Menu.css";
import MenuIcons from "./menuIcons/MenuIcons";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Button } from "@material-ui/core";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>Yowl</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <MenuIcons active Icon={HomeIcon} text='Home' path="/" />
            <MenuIcons Icon={MailOutlineIcon} text='Messages' path="/Messages" />
            <MenuIcons Icon={ListAltIcon} text='User List' path="/Users" />
            <div className="logoutButton">
              <Button path='/'variant="contained" color="secondary" onClick={this.handleLogout} >
                Logout
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
