import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core//AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export class Education extends Component {
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
                Educational Information
              </Typography>
            </AppBar>
            <br />
            <Typography variant="h6" component="div">
              Tertiary School
            </Typography>
            <TextField
              placeholder="Enter Your Course"
              label="Course or Program"
              onChange={handleChange("te_program")}
              defaultValue={values.te_program}
            />
            <br />
            <TextField
              placeholder="Enter Your Tertiary School Name"
              label="School Name"
              onChange={handleChange("te_school")}
              defaultValue={values.te_school}
            />
            <br />
            <TextField
              placeholder="Enter Your Year of Graduation"
              label="Tertiary School Year of Graduation"
              onChange={handleChange("te_year")}
              defaultValue={values.te_year}
            />
            <br />
            <Typography variant="h6" component="div">
              Secondary School
            </Typography>
            <TextField
              placeholder="Enter Your Course"
              label="Course or Program"
              onChange={handleChange("se_program")}
              defaultValue={values.se_program}
            />
            <br />
            <TextField
              placeholder="Enter Your Secondary School Name"
              label="School Name"
              onChange={handleChange("se_school")}
              defaultValue={values.se_school}
            />
            <br />
            <TextField
              placeholder="Enter Your Year of Graduation"
              label="Secondary School Year of Graduation"
              onChange={handleChange("se_year")}
              defaultValue={values.se_year}
            />
            <br />
            <Button color="primary" variant="contained" onClick={this.continue}>
              Continue
            </Button>
            <br />
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
          </Dialog>
        </>
      </React.Fragment>
    );
  }
}

export default Education;
