import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import { createAccount } from "../../store/actions/index";

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

class Register extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.props.history.push("/app");
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let newUser = {
      name: this.refs.name.value.trim(),
      email: this.refs.email.value.trim(),
      password: this.refs.password.value.trim()
    }

    this.props.createAccount(newUser)
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
          <h1 style={{ margin: 0, paddingBottom: "20px" }}>Register</h1>
          <form
            onSubmit={this.onSubmit.bind(this)}
            noValidate
            className={classes.form}
          >
            <input
              type="test"
              className={classes.input}
              ref="name"
              name="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              className={classes.input}
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
            <Button type="submit" className={classes.button}>
              Sign Up
            </Button>
          </form>
          <div className={classes.link}>
            {error}
            <Link to="/">Have an account already?</Link>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth.uid,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAccount: (newUser) => dispatch(createAccount(newUser))
  }
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);


