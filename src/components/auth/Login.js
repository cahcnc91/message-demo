import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core/";
import { connect } from "react-redux";
import { getUser, login } from "../../store/actions/index";

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

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ""
    };
  }

  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.history.push("/app");
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    this.props.login(email,password)
      .catch(err => {
        this.setState({errorMessage: err.message})
      });
  }

  render() {
    const { classes } = this.props;
    let error;

    if (this.state.errorMessage !== "") {
      error = <p>{this.state.errorMessage}</p>;
    } else {
      error = null;
    }

    return (
      <div className={classes.boxedView}>
        <div className={classes.box}>
          <h1 style={{ margin: 0, paddingBottom: "20px" }}>Login</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
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
    user: state.auth.user
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getUser, login }
  )(Login)
);
