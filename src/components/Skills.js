import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core//AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@mui/base/TextareaAutosize";

export class Skills extends Component {
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
                Skills
              </Typography>
            </AppBar>
            <br />
            <Typography variant="h6" component="div">
              Enter your top skills separated by comma (",").
            </Typography>
            <br />
            <TextareaAutosize
              placeholder="e.g.: JAVA, HTML, CSS"
              label="Top Skills"
              onChange={handleChange("skills")}
              defaultValue={values.skills}
              minRows={5}
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

export default Skills;
