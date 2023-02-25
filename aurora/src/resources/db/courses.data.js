class Course {
  constructor(
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
    date,
    location,
    department
  ) {
    this.subject = subject
    this.courseCode = courseCode
    this.title = title
    this.credits = credits
    this.sectionNum = sectionNum
    this.CRN = CRN
    this.days = days
    this.time = time
    this.capacity = capacity
    this.active = active
    this.instructor = instructor
    this.date = date
    this.location = location
    this.department = department
  }

  getSubject() { return this.subject }
  getCourseCode() { return this.courseCode }
  getTitle() { return this.title }
  getCredits() { return this.credits }
  getSectionNum() { return this.sectionNum }
  getCRN() { return this.subject }
  getDays() { return this.days }
  getTime() { return this.time }
  getCapacity() { return this.capacity }
  getActive() { return this.active }
  getInstructor() { return this.instructor }
  getDate() { return this.date }
  getLocation() { return this.location }
  getDepartment() { return this.department }
}

const NAMES_TERMS = {
  "Summer 2023": "Summer 2023",
  "Winter 2023": "Winter 2023",
  "Fall 2023": "Fall 2023",
};

const NAMES_COURSES = {
  "COMP 1012": "COMP 1012",
};

const COURSES = [
  TERM_NAMES["Summer 2023"],
  TERM_NAMES["Winter 2023"],
  TERM_NAMES["Fall 2023"],
];

const COURSES_INFO = {};

class terms {
  constructor(courses, examDates){
    this.courses = courses;
    this.examDates = examDates;
    this.coursesList = [];
    this.courseCount = 0;
  }
  
  addCourses (course) {
    if (this.courseCount > 5 && hasDuplicates(this.coursesList)) {
      console.log("Error you may not have more than 5 courses.");
    } else {
      this.coursesList.push(course);
      this.courseCount ++;
    }

  }
}