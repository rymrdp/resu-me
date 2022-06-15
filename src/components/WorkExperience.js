import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core//AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export class WorkExperience extends Component {
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
                Work Experience
              </Typography>
            </AppBar>
            <br />
            <Typography variant="h6" component="div">
              Work Experience 1
            </Typography>
            <TextField
              placeholder="Enter Your Position"
              label="Position or Role"
              onChange={handleChange("wrk1_pos")}
              defaultValue={values.wrk1_pos}
            />
            <br />
            <TextField
              placeholder="Enter Company"
              label="Company Name"
              onChange={handleChange("wrk1_com")}
              defaultValue={values.wrk1_com}
            />
            <br />
            <TextField
              placeholder="e.g. 2002-2009"
              label="Years of Service"
              onChange={handleChange("wrk1_syey")}
              defaultValue={values.wrk1_syeyr}
            />
            <br />
            <Typography variant="h6" component="div">
              Work Experience 2
            </Typography>
            <TextField
              placeholder="Enter Your Position"
              label="Position or Role"
              onChange={handleChange("wrk2_pos")}
              defaultValue={values.wrk2_pos}
            />
            <br />
            <TextField
              placeholder="Enter Company"
              label="Company Name"
              onChange={handleChange("wrk2_com")}
              defaultValue={values.wrk2_com}
            />
            <br />
            <TextField
              placeholder="e.g. 2002-2009"
              label="Years of Service"
              onChange={handleChange("wrk2_syey")}
              defaultValue={values.wrk2_syeyr}
            />
            <br />
            <Typography variant="h6" component="div">
              Work Experience 3
            </Typography>
            <TextField
              placeholder="Enter Your Position"
              label="Position or Role"
              onChange={handleChange("wrk3_pos")}
              defaultValue={values.wrk3_pos}
            />
            <br />
            <TextField
              placeholder="Enter Company"
              label="Company Name"
              onChange={handleChange("wrk3_com")}
              defaultValue={values.wrk3_com}
            />
            <br />
            <TextField
              placeholder="e.g. 2002-2009"
              label="Years of Service"
              onChange={handleChange("wrk3_syey")}
              defaultValue={values.wrk3_syeyr}
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

export default WorkExperience;
