import React from "react";
import CourseRow from "../components/CourseRow.component";

export default function CourseListPage() {
  return (
    <div>
      <div className="display-6 courseName"> Term: Summer2023</div>

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
      <CourseRow courseName="COMP 2150" courseFullName="OBJECT ORIENTATION" />
      <CourseRow
        courseName="COMP 2160"
        courseFullName="PROGRAMMING PRACTICES"
      />
      <CourseRow
        courseName="COMP 2280"
        courseFullName="INTRODUCTION TO COMPUTER SYSTEMS"
      />
      <CourseRow
        courseName="COMP 2080"
        courseFullName="ANALYSIS OF ALGORITHMS"
      />
      <CourseRow courseName="COMP 4380" courseFullName="DATBASES II" />
      <CourseRow courseName="COMP 4710" courseFullName="DATA MINING" />
    </div>
  );
}
