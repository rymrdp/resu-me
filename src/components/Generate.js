import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();

export class Generate extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  reset = (e) => {
    e.preventDefault();
    this.props.resetStep();
  };

  render() {
    const { values } = this.props;

    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`

        @media only screen and (min-width: 950px) {
            .container {
                font-size: 1.15rem;
            }
        }

        @media only screen and (min-width: 625px) {
            .title {
                text-align: right;
                border-right: 1px solid rgba(255, 255, 255, 0.5);
            }
        }

        @media only screen and (max-width: 625px) {
            .title {
                text-align: left;
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            }
        }

        body {
            background-color: #FFFFFF;
        }

        h1 {
            color: #383838;
            margin: 0;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
        }

        h3 {
            color: #696969;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            font-size: 100%;
        }

        h4 {
            color: white;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 90%;
        }
          
        h5 {
            color: #696969;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 80%;
        }  

        p {
            color: white;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            font-size: 80%;
            line-height: 0.5;
        }

        .personal-information ul {
            color: white;
            list-style-type: none;
            margin-left: -35px;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            font-size: 80%;
            line-height: 2.25;
        }

        .personal-information ul > li::before {
            font-family: "FontAwesome";
            content: "\f058";
            padding-right: 5px;
        }

        .education ul {
            color: white;
            list-style-type: none;
            margin-left: -35px;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            font-size: 80%;
            line-height: 2.25;
          } 
          
          .recent-work ul {
            color: white;
            list-style-type: none;
            margin-left: -35px;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            font-size: 80%;
            line-height: 2.25;
          } 
          
          .projects ul {
            color: white;
            list-style-type: none;
            margin-left: -35px;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            font-size: 80%;
            line-height: 2.25;
          } 

          .skills ul {
            color: white;
            list-style-type: none;
            margin-left: -35px;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
            font-size: 80%;
            line-height: 2.25;
          } 
          
          
        a {
            color: white;
            background-color: rgba(0, 0, 255, 0);
            transition: 0.5s ease all;
        }

        .container {
            margin-top: 50px;
            margin-bottom: auto;
            margin-right: auto;
            margin-left: auto;
            padding: 20px 5px;
            max-width: 750px;
        }

        .head-container {
            display: flex;
            flex-wrap: wrap;
        }

        .head {
            flex: 1 1 auto;
            width: 100%;
            margin-top:35px;
            padding: 25px;
            background-color: #CDF0EA;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            text-align: center;
        }

        .personal-information {
            padding: 25px;
            background-color: #97C4B8;
            display: flex;
            flex-wrap: wrap;
        }

        .education {
            padding: 25px;
            background-color: #66b2b2;
            display: flex;
            flex-wrap: wrap;
        }      
                   
        .recent-work {
            padding: 25px;
            background-color: #069A8E;
            display: flex;
            flex-wrap: wrap;
        }
          
        .projects {
            padding: 25px;
            background-color: #008080;
            display: flex;
            flex-wrap: wrap;
        }

        .skills {
            padding: 25px;
            background-color: #006666;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            display: flex;
            flex-wrap: wrap;
        }

        .title {
            padding: 0 20px;
            flex: 1 1 100px;
        }

        .content {
            padding-left: 60px;
            padding-right: 20px;
            flex: 2 2 350px;
        }
          

        .row-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
        }
        
          .class-1{
            padding-right: 70px;
          }

          .Buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
          }

          .closeButton {
            margin: 0 10px;
            margin-top: 20px;
          }

          .backButton {
            margin: 0 10px;
            margin-top: 20px;
          }

          .pdfButton {
            margin: 0 10px;
            margin-top: 20px;
          }

        `}</style>

        <div id="print">
          <div className="container" ref={ref}>
            <div className="head-container">
              <div className="head">
                <h1>{values.fullname}</h1>
                <h3>{values.designation}</h3>
                <h5>{values.address}</h5>
              </div>
            </div>
            <div className="personal-information">
              <div className="box title">
                <h4>Personal Information</h4>
              </div>
              <div className="box content">
                <div className="row-container">
                  <div className="class-1">
                    <ul>
                      <li>Age: {values.age}</li>
                      <li>Phone: {values.phone}</li>
                    </ul>
                  </div>
                  <div className="class-2">
                    <ul>
                      <li>Email: {values.email}</li>
                      <li>Linkedin: {values.linkedin}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="education">
              <div className="box title">
                <h4>Education</h4>
              </div>
              <div className="box content">
                <ul>
                  <li>
                    <b>{values.te_program}</b> <br /> <i>{values.te_school}</i>{" "}
                    {values.te_year}
                  </li>
                  <li>
                    <b>{values.se_program}</b> <br /> <i>{values.se_school}</i>{" "}
                    {values.se_year}
                  </li>
                </ul>
              </div>
            </div>
            <div className="recent-work">
              <div className="box title">
                <h4>Work Experience</h4>
              </div>
              <div className="box content">
                <ul>
                  <li />
                  <li>
                    <b>{values.wrk1_pos}</b> <br /> <i>{values.wrk1_com}</i>{" "}
                    {values.wrk1_syey}
                  </li>
                  <li>
                    <b>{values.wrk2_pos}</b> <br /> <i>{values.wrk2_com}</i>{" "}
                    {values.wrk2_syey}
                  </li>
                  <li>
                    <b>{values.wrk3_pos}</b> <br /> <i>{values.wrk3_com}</i>{" "}
                    {values.wrk3_syey}
                  </li>
                </ul>
              </div>
            </div>
            <div className="projects">
              <div className="box title">
                <h4>Projects</h4>
              </div>
              <div className="box content">
                <ul>
                  <li />
                  <li>
                    <b>{values.proj1_name}</b> <br /> <p>{values.proj1_desc}</p>
                  </li>
                  <li>
                    <b>{values.proj2_name}</b> <br /> <p>{values.proj2_desc}</p>
                  </li>
                  <li>
                    <b>{values.proj3_name}</b>
                    <br />
                    <p>{values.proj3_desc}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="skills">
              <div className="box title">
                <h4>Skills</h4>
              </div>
              <div className="box content">
                <ul>
                  <li>
                    <p>{values.skills}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <br />
        <div className="Buttons">
          <div className="closeButton">
            <Button
              color="secondary"
              variant="contained"
              sx={{ ml: 5 }}
              onClick={this.reset}
            >
              Close
            </Button>
          </div>
          <div className="backButton">
            <Button
              color="secondary"
              variant="contained"
              sx={{ ml: 3 }}
              onClick={this.back}
            >
              Back
            </Button>
          </div>

          <ReactToPdf
            targetRef={ref}
            filename={`Resume-${values.fullname}.pdf`}
            x={5}
          >
            {({ toPdf }) => (
              <div className="pdfButton">
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ ml: 3 }}
                  onClick={toPdf}
                >
                  Generate PDF
                </Button>
              </div>
            )}
          </ReactToPdf>
        </div>
      </div>
    );
  }
}

export default Generate;
