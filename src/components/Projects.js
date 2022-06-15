import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core//AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export class Projects extends Component {
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
                Projects
              </Typography>
            </AppBar>
            <br />
            <Typography variant="h6" component="div">
              Project 1
            </Typography>
            <TextField
              placeholder="Enter project name"
              label="Project Name"
              onChange={handleChange("proj1_name")}
              defaultValue={values.proj1_name}
            />
            <br />
            <TextareaAutosize
              placeholder="Enter project description"
              label="Project Description"
              onChange={handleChange("proj1_desc")}
              defaultValue={values.proj1_desc}
              minRows={2}
            />
            <br />
            <Typography variant="h6" component="div">
              Project 2
            </Typography>
            <TextField
              placeholder="Enter project name"
              label="Project Name"
              onChange={handleChange("proj2_name")}
              defaultValue={values.proj2_name}
            />
            <br />
            <TextareaAutosize
              placeholder="Enter project description"
              label="Project Description"
              onChange={handleChange("proj2_desc")}
              defaultValue={values.proj3_desc}
              minRows={2}
            />
            <br />
            <Typography variant="h6" component="div">
              Project 3
            </Typography>
            <TextField
              placeholder="Enter project name"
              label="Project Name"
              onChange={handleChange("proj3_name")}
              defaultValue={values.proj3_name}
            />
            <br />
            <TextareaAutosize
              placeholder="Enter project description"
              label="Project Description"
              onChange={handleChange("proj3_desc")}
              defaultValue={values.proj3_desc}
              minRows={2}
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

export default Projects;
