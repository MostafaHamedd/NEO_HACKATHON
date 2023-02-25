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

