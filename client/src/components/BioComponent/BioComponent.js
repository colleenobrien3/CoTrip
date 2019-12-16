import React, { Component } from "react";
import "./BioComponent.css";

class BioComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      classList: "BioComponent"
    };
  }

  render() {
    return (
      <div className={this.state.classList}>
        <h1>{this.props.name}</h1>
        <div>
          <h6>Bio</h6>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <h6>Her Interests</h6>
        </div>
      </div>
    );
  }
}

BioComponent.defaultProps = {
  name: "Name",
  bio: "Enter Bio Here",
  interests: []
};

export default BioComponent;
