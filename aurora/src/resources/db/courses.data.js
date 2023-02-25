const COMPSCI = new DEPARTMENT_COURSES();

let subject = "COMP"
let department = "COMPUTER SCIENCE"
COMPSCI.addCourse(
  new Course(
    subject,
    '1010',
    '	Introductory Computer Science 1',
    3,
    'A01',
    3126781,
    'MWF',
    '2:30AM - 3:30PM',
    200,
    190,
    'Jack Ma',
    '221 Wallace',
    department 
  )
)



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
    this.location = location
    this.department = department
  }

  getSubject() {
    return this.subject
  }
  getCourseCode() {
    return this.courseCode
  }
  getTitle() {
    return this.title
  }
  getCredits() {
    return this.credits
  }
  getSectionNum() {
    return this.sectionNum
  }
  getCRN() {
    return this.subject
  }
  getDays() {
    return this.days
  }
  getTime() {
    return this.time
  }
  getCapacity() {
    return this.capacity
  }
  getActive() {
    return this.active
  }
  getInstructor() {
    return this.instructor
  }
  getLocation() {
    return this.location
  }
  getDepartment() {
    return this.department
  }
}

class DEPARTMENT_COURSES {
  constructor() {
    this.COURSES = []
  }

  addCourse(newCourse) {
    this.COURSES.push(newCourse)
  }
}

class TERM {
  constructor() {
    this.DEPARTMENT = []
  }

  addDepartment(department) {
    this.DEPARTMENT.push(department)
  }
}
