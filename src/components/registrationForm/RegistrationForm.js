import React from "react";
import DataService from "../../services/DataService";

import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import Spinner from "react-spinkit";
import { styled } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        <strong>Yowl</strong>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const YowlAvatar = styled(Avatar)({
  margin: "1em",
  backgroundColor: "black",
});
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        password: "",
        displayName: "",
      },
      submitted: false,
    };
    this.client = new DataService();
  }
  handleRegistration = (e) => {
    e.preventDefault();
    this.client.registerUser(this.state.formData).then((result) => {
      alert("User Is Registered");
    });
    this.submittedForm();
  };

  handleChange = (e) => {
    let formData = this.state.formData;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };
  submittedForm() {
    this.setState({
      submitted: true,
    });
  }
  render() {
    const { loading, error } = this.props;
    if (this.state.submitted) {
      return (
        <Grid container>
          <Grid item>
            <Link href="/" variant="body2">
              {"Return to Login"}
            </Link>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <YowlAvatar>
              <LockOutlinedIcon />
            </YowlAvatar>
            <Typography component="h1" variant="h5">
              Registration
            </Typography>
            <form noValidate onSubmit={this.handleRegistration}>
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
                id="User"
                label="Display Name"
                name="displayName"
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </form>
            {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
    }
  }
}

export default RegistrationForm;

// function Copyright() {
//     return (
//       <Typography variant='body2' color='textSecondary' align='center'>
//         {'Copyright © '}
//         <Link color='inherit' href='#'>
//           <strong>Yowl</strong>
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }

//   const YowlAvatar = styled(Avatar)({
//     margin: '1em',
//     backgroundColor: 'black',
//   });

//   class LoginForm extends React.Component {
//     state = { username: '', password: '' };

//     handleLogin = (event) => {
//       event.preventDefault();
//       this.props.login(this.state);
//     };

//     handleChange = ({ target }) => {
//       this.setState({ [target.name]: target.value });
//     };

//     render() {
//       const { loading, error } = this.props;
//       return (
//         <Container component='main' maxWidth='xs'>
//           <CssBaseline />
//           <div>
//             <YowlAvatar>
//               <LockOutlinedIcon />
//             </YowlAvatar>
//             <Typography component='h1' variant='h5'>
//               Sign in
//             </Typography>
//             <form noValidate onSubmit={this.handleLogin}>
//               <TextField
//                 variant='outlined'
//                 margin='normal'
//                 required
//                 fullWidth
//                 id='User'
//                 label='User Name'
//                 name='username'
//                 autoComplete='user'
//                 autoFocus
//                 onChange={this.handleChange}
//               />
//               <TextField
//                 variant='outlined'
//                 margin='normal'
//                 required
//                 fullWidth
//                 name='password'
//                 label='Password'
//                 type='password'
//                 id='password'
//                 autoComplete='current-password'
//                 onChange={this.handleChange}
//               />
//               <FormControlLabel
//                 control={<Checkbox value='remember' color='primary' />}
//                 label='Remember me'
//               />
//               <Button type='submit' fullWidth variant='contained' color='primary'>
//                 Sign In
//               </Button>
//               <Grid container>

//                 <Grid item>
//                   <Link href='/Registration' variant='body2'>
//                     {"New User?"}
//                   </Link>
//                 </Grid>
//               </Grid>
//             </form>
//             {loading && <Spinner name="circle" color="blue" />}
//             {error && <p style={{ color: "red" }}>{error.message}</p>}
//           </div>
//           <Box mt={8}>
//             <Copyright />
//           </Box>
//         </Container>
//       );
//     }
//   }

//   export default withAsyncAction('auth', 'login')(LoginForm);
