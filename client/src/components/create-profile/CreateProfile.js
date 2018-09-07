import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkdin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState = {
      [e.target.name]: e.target.value
    };
    console.log(this.state.handle);
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="displya-4 text-center">Create Your Profile </h1>
              <p className="lead text-center">
                let's get some information to make ypur profile stand out
              </p>
              <small className="d-block pb-3">* = required-fields</small>
              <form onSubmit={this.onSubmit} />
              <TextFieldGroup
                placeholder="* Profile Handle"
                name="handle"
                onChange={this.onChange}
                error={errors.handle}
                info="A unique handle for your profile URL, Your full name, company name,
              nickname."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.erros
});

export default connect(null)(CreateProfile);
