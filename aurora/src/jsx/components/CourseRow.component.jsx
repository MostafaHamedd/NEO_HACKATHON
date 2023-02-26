import React, { Component } from "react";

export default function CourseRow({ courseName, courseFullName, credits }) {
  return (
    <div className="row courseRow align-items-center my-3 p-3 rounded">
      <div className="col">
        {' '}
        <b>{courseName}</b>
      </div>
      <div className="col">{courseFullName}</div>
      <div className="col">{credits}.0 CR</div>
      <button type="button " class="col btn btn-info ">
        View Sections
      </button>
    </div>
  )
}
