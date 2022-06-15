import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Generate from "./Generate";
import Landing from "./Landing";

export class ResumeForm extends Component {
  state = {
    step: 0,
    fullname: "",
    designation: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    te_school: "",
    te_program: "",
    te_year: "",
    wrk1_pos: "",
    wrk1_com: "",
    wrk1_syey: "",
    wrk2_pos: "",
    wrk2_com: "",
    wrk2_syey: "",
    wrk3_pos: "",
    wrk3_com: "",
    wrk3_syey: "",
    proj1_name: "",
    proj1_desc: "",
    proj2_name: "",
    proj2_desc: "",
    proj3_name: "",
    proj3_desc: "",
    skills: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Go back to start page.
  resetStep = () => {
    const { step } = this.state;
    this.setState({
      step: 0,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  //Submit the form
  submitted = () => {
    const { status } = this.state;
    this.setState({
      status: status + 1,
    });
  };

  render() {
    const { step } = this.state;
    const {
      fullname,
      designation,
      age,
      email,
      phone,
      address,
      linkedin,
      te_school,
      te_program,
      te_year,
      se_school,
      se_program,
      se_year,
      wrk1_pos,
      wrk1_com,
      wrk1_syey,
      wrk2_pos,
      wrk2_com,
      wrk2_syey,
      wrk3_pos,
      wrk3_com,
      wrk3_syey,
      proj1_name,
      proj1_desc,
      proj2_name,
      proj2_desc,
      proj3_name,
      proj3_desc,
      skills,
    } = this.state;
    const values = {
      fullname,
      designation,
      age,
      email,
      phone,
      address,
      linkedin,
      te_school,
      te_program,
      te_year,
      se_school,
      se_program,
      se_year,
      wrk1_pos,
      wrk1_com,
      wrk1_syey,
      wrk2_pos,
      wrk2_com,
      wrk2_syey,
      wrk3_pos,
      wrk3_com,
      wrk3_syey,
      proj1_name,
      proj1_desc,
      proj2_name,
      proj2_desc,
      proj3_name,
      proj3_desc,
      skills,
    };

    switch (step) {
      case 0:
        return (
          <Landing
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 1:
        return (
          <PersonalInfo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Education
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <WorkExperience
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Projects
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return (
          <Skills
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            submitted={this.submitted}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <Generate
            nextStep={this.nextStep}
            resetStep={this.resetStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
      //do nothing
    }
  }
}

export default ResumeForm;
