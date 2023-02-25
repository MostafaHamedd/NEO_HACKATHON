import React, { Component } from "react";

export default class CourseRow extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">COMP 1020</div>
        <div className="col">Introductory to Computer Science I</div>
        <div className="col">3.00CR</div>
        <div className="col">View Sections</div>
      </div>
    );
  }
}
