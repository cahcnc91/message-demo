import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const SignedIn = () => {
  return (
    <ul>
      <Button><NavLink to="/" style={{textDecoration: "none", color: "white", marginRight: "30px"}}>Log Out</NavLink></Button>
      <Button><NavLink to="/" style={{textDecoration: "none", color: "white"}}>Log In</NavLink></Button>
    </ul>
  );
};

export default SignedIn;