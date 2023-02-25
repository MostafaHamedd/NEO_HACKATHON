import React from "react";
import CourseRow from "../components/CourseRow.component";

export default function CourseListPage() {
  return (
    <div>
      Term: Summer2023
      <CourseRow
        courseName="COMP 1010"
        courseFullName="INTRODUCTORY COMPUTER SCIENCE I"
      />
      <CourseRow
        courseName="COMP 1020"
        courseFullName="INTRODUCTORY COMPUTER SCIENCE II"
      />
      <CourseRow
        courseName="COMP 2140"
        courseFullName="DATA STRUCTURES AND ALGORITHMS"
      />
    </div>
  );
}
