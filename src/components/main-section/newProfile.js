import React, { Component } from 'react';
import { Link } from "react-router-dom";

class newProfile extends Component {
  render() {
    return (
       <div className="container">
            <div className="row">
              <h5 className="mt-4">
                You have not created a profile yet, please add some info.
              </h5>
            </div>
            <div className="row">
              <Link
                to="/create-profile"
                className="btn btn-log button-customized mt-4"
              >
                Create Profile
              </Link>
            </div>
          </div>
    )
  }
}

export default newProfile;
