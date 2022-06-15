import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core//AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export class PersonalInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar position="static">
              <Typography
                variant="h5"
                color="inherit"
                component="div"
                align="center"
              >
                Personal Information
              </Typography>
            </AppBar>
            <br />
            <TextField
              placeholder="Enter Your Full Name"
              label="Full Name"
              onChange={handleChange("fullname")}
              defaultValue={values.fullname}
            />
            <br />
            <TextField
              placeholder="Enter Your Designation (e.g.: Software Engineer)"
              label="Position"
              onChange={handleChange("designation")}
              defaultValue={values.designation}
            />
            <br />
            <TextField
              placeholder="Enter Your Age"
              label="Age"
              onChange={handleChange("age")}
              defaultValue={values.age}
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email Address"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />
            <TextField
              placeholder="Enter Your Phone Number"
              label="Phone Number"
              onChange={handleChange("phone")}
              defaultValue={values.phone}
            />
            <br />
            <TextField
              placeholder="Enter Your Address"
              label="Home Address"
              onChange={handleChange("address")}
              defaultValue={values.address}
            />
            <br />
            <TextField
              placeholder="Paste your Linkedin Profile Link"
              label="Linkedin Profile"
              onChange={handleChange("linkedin")}
              defaultValue={values.linkedin}
            />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue{" "}
            </Button>
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              Cancel
            </Button>
          </Dialog>
        </>
      </React.Fragment>
    );
  }
}

export default PersonalInfo;
