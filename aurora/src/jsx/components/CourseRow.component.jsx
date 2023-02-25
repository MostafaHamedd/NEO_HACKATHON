import React, { Component } from "react";

export default class CourseRow extends Component {
  render() {
    const { courseName, courseFullName } = this.props;
    return (
      <div className="row courseRow align-items-center my-20">
        <div className="col">{courseName}</div>
        <div className="col">{courseFullName}</div>
        <div className="col">3.00CR</div>
        <button type="button " class="col btn btn-primary ">
          View Sections
        </button>
      </div>
    );
  }
}
