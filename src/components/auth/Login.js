import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import { connect } from "react-redux";
import { login } from "../../store/actions/index";

const styles = {
  boxedView: {
    height: "80vh",
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  box: {
    backgroundColor: "white",
    border: "1px solid #dddddd",
    padding: "25px",
    textAlign: "center",
    width: "40vh"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  link: {
    paddingTop: "5px"
  },
  input: {
    border: "1px solid 10px",
    fontSize: "14px",
    marginBottom: "10px",
    padding: "8px"
  },
  button: {
    backgroundColor: "#4886B0",
    color: "white"
  }
};

class Login extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.props.history.push("/app");
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    this.props.login(email, password);
  }

  render() {
    const { classes, authError } = this.props;
    let error;

    if (authError !== null) {
      error = <p>{authError}</p>;
    } else {
      error = null;
    }

    return (
      <div className={classes.boxedView}>
        <div className={classes.box}>
          <h1 style={{ margin: 0, paddingBottom: "20px" }}>Login</h1>
          <form
            onSubmit={this.onSubmit.bind(this)}
            noValidate
            className={classes.form}
          >
            <input
              className={classes.input}
              type="email"
              ref="email"
              name="email"
              placeholder="Email"
            />
            <input
              className={classes.input}
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
            />
            <Button className={classes.button} type="submit">
              Login
            </Button>
          </form>
          <div className={classes.link}>
            {error}
            <Link to="/register">Need a account?</Link>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth.uid,
    authError: state.auth.authError
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);
