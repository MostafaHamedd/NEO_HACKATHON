import { timeout } from "q"
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { NAMES_DEPARTMENT } from "../../resources/db/courses.data"
import { addCourseToScheduler } from "../pages/Schedule.page"
import { URL_ROUTES } from "../URL_ROUTES.routes";

export default function CourseRow({course}) {

  
  const [popUp, setPopUp] = useState(false)
  const [show, setShow] = useState(false);

  const {
    subject,
    courseCode,
    title,
    credits,
    sectionNum,
    CRN,
    days,
    time,
    capacity,
    active,
    instructor,
    location,
    department,
  } = course

  function HandleToggle() {
    setShow(!show);
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function addToStorage() {
    let hours = randomIntFromInterval(8,19);
    let minutes = randomIntFromInterval(0, 60);
    let random = randomIntFromInterval(20, 25);

    setPopUp(true);
    setTimeout(function () {
      setPopUp(false)
    }, 5000)

    let startDate = new Date(2023, 1, random, hours, minutes) ;
    let endDate =  new Date(2023, 1, random, hours+1, minutes);
    addCourseToScheduler(startDate, endDate, title);
  }

  console.log(show)
  return (
    <div className="courseRow my-3 p-3 rounded">
      <div className="row align-items-center ">
        <div className="col">
          <b>
            {subject} {courseCode}
          </b>
        </div>
        <div className="col">{title}</div>
        <div className="col">{credits}.0 CR</div>
        <div className="col">
          <button
            type="button"
            onClick={HandleToggle}
            class="d-flex-inline flex-center btn btn-info "
          >
            More Information <ion-icon name="arrow-down-outline"></ion-icon>
          </button>
        </div>
      </div>

      {show && (
        <div>
          <div className="m-4 mb-0 py-4 bg-light rounded row align-items-center ">
            <div className="col">CRN: {CRN}</div>
            <div className="col"> Instructor: {instructor}</div>
            <div className="col"> Location: {location}</div>
            {/* <div className="col"> Department: {department}</div> */}
            <div className="col"> Days: {days}</div>
            <div className="col"> Time: {time}</div>
            <div className="col">
              <button
                type="button"
                onClick={addToStorage}
                class="d-flex-inline flex-center btn btn-info "
              >
                Add Class <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
          </div>

          <div className="">
            {popUp && (
              <div class="alert alert-info" role="alert">
                The course was added
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
