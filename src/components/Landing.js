import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class Landing extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <React.Fragment>
        <style>
          {`
            .ButtonLanding {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 50vh; 
            }

            .desc h2{
                color: white;
                font-family: 'Marker Felt';
                margin-bottom: 40px;
                font-size: 120%;
            }
            
            `}
        </style>
        <div className="ButtonLanding">
          <div className="desc">
            <h2>Click the button below to start building your resume.</h2>
          </div>
          <br />
          <Button
            color="secondary"
            variant="contained"
            size="large"
            onClick={this.continue}
          >
            Let's Start!{" "}
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
