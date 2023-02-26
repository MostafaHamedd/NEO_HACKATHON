import React, {useState} from 'react'
import { CURRENT_UNIVERSITY, NAMES_DEPARTMENT, NAMES_TERMS } from '../../../resources/db/courses.data'
import CourseRow from '../../components/CourseRow.component'

export default function RegistrationPage() {

  const [courses, setCourses] = useState([]);

  const [term, setTerm] = useState(NAMES_TERMS['FALL 2022']);

  const [department, setDepartment] = useState( NAMES_DEPARTMENT.COMP )

  const handleTerm = (e) => setTerm(e.target.value);
  const handleDepartment = (e) => setDepartment(e.target.value)

  async function searchCourses () {
    let COURSES = CURRENT_UNIVERSITY.getCourseList(term, department);
    setCourses(COURSES);
  }


  return (
    <div>
      <h1 className="text-center">
        <span className="text-info">Register</span> for Courses
        <div className="row my-5 flex-center">
          <div className="col-12 col-md-5 mb-2">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <select
                onChange={handleTerm}
                id="select-term"
                class="form-select"
              >
                <option>{NAMES_TERMS['FALL 2022']}</option>
                <option>{NAMES_TERMS['WINTER 2023']}</option>
                <option>{NAMES_TERMS['SUMMER 2023']}</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-5 mb-2">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                <ion-icon name="business-outline"></ion-icon>
              </span>
              <select
                onChange={handleDepartment}
                id="select-department"
                class="form-select"
              >
                <option>{NAMES_DEPARTMENT.COMP}</option>
                <option>{NAMES_DEPARTMENT.MATHS}</option>
                <option>{NAMES_DEPARTMENT.STAT}</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-2 mb-2">
            <button
              type="button"
              class="d-flex-inline flex-center btn btn-info rounded-pill"
              onClick={searchCourses}
            >
              Search Now
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
        </div>
      </h1>
      
      {courses != null &&
        courses.length >= 1 &&
        courses.map((course) => {
          return <CourseRow course={course} />
        })}
    </div>
  )
}


