import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import Spinner from "react-spinkit";
import { styled } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withAsyncAction } from "../../redux/HOCs";
import GoogleLoginButton from "../googleLoginButton/GoogleLoginButton"

const YowlAvatar = styled(Avatar)({
  margin: "1em",
  backgroundColor: "black",
});

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <YowlAvatar>
            <LockOutlinedIcon />
          </YowlAvatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate onSubmit={this.handleLogin}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="User"
              label="User Name"
              name="username"
              autoComplete="user"
              autoFocus
              onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/Registration" variant="body2">
                  {"New User?"}
                </Link>
              </Grid>
              <Grid item>
                <GoogleLoginButton />
              </Grid>
            </Grid>
          </form>
          {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </div>
      </Container>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
