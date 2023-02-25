import React, { Component } from "react";
import { Link } from "react-router-dom";
import { URL_ROUTES } from "../URL_ROUTES.routes";

export default class CourseRow extends Component {
  render() {
    const { courseName, courseFullName } = this.props;
    return (
      <div className="row courseRow align-items-center my-20">
        <div className="col">{courseName}</div>
        <div className="col">{courseFullName}</div>
        <div className="col">3.00CR</div>
        <Link className="col d-flex" to={URL_ROUTES.SECTIONS_PAGE}>
          <button type="button" className="btn btn-primary ml-auto">
            View Sections
          </button>
        </Link>
      </div>
    );
  }
}
