import React from "react";
import { store } from "../../redux";
import {
    Button,
  } from "@material-ui/core";
import "./GoogleLoginButton.css";


class GoogleLoginButton extends React.Component {
    handleGoogle = () => {
        const loginPopup = window.open(
            "https://socialapp-api.herokuapp.com/auth/google/login",
            "_blank",
            "height=777, width=777, scrollbar=0",
            false
        )
        loginPopup.opener.onmessage = event => {
            if (event.data.token) {
                const { username, token } = event.data
                store.dispatch({
                    type: "LOGIN.SUCCESS",
                    payload: { username, token }
                })
                loginPopup.close()
            }
        }
    }

    render(){
        return (
            <>
                <h5 className="hr"><span>OR</span></h5>
                <Button fullWidth variant="contained" color="primary" onClick={this.handleGoogle}>Sign in with Google</Button>
            </>
        )
    }
}

export default GoogleLoginButton;
