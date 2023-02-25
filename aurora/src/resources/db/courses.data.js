const COMPSCI = new DEPARTMENT_COURSES();
const MATHS = new DEPARTMENT_COURSES();
const STATS = new DEPARTMENT_COURSES();
const ARTS = new DEPARTMENT_COURSES();


let subject = "COMP"
let department = "COMPUTER SCIENCE"

COMPSCI.addCourse(new Course( subject, '1010','	Introductory Computer Science',3,'A01',3126781,'MWF','2:30AM - 3:30PM',200,190,'Jack Ma','221 Wallace',department) )
COMPSCI.addCourse(new Course( subject, '1020','	Introductory Computer Science 2',3,'A03',3484832,'MWF','8:30AM - 9:20PM',200,49,'Dwayne Johnson','110 Armes',department) )
COMPSCI.addCourse(new Course( subject, '1012',' Introductory Computer Science 1',3,'A08',2837295,'SW','4:20AM - 12:00PM',200,49,'Alex Martin','322 University College',department) )
COMPSCI.addCourse(new Course( subject, '3020','	Human-Computer Interaction 1',3,'A04',5553354,'TR','7:45AM - 1:20PM',200,49,'Trevor Philips','E2 233',department) )


subject = "MATH"
department = "MATHEMATICS"

MATHS.addCourse(new Course(subject, '1300', ' Linear Algebra', 3, 'A09', 243443, 'MTW', '2:30PM - 4:00PM', 150, 120, 'Alexander Damascus', '110 Armes', department))
MATHS.addCourse(new Course(subject, '1500', ' Calculus 1', 3, 'A03', 125345, 'MW', '2:20PM - 7:00PM', 50, 12, 'Sonia Dorem', '322 Tier', department))
MATHS.addCourse(new Course(subject, '1700', ' Calculus 2', 3, 'A04', 353323, 'MT', '12:30PM - 4:00AM', 120, 13, 'Peter Apple', '600 Wallace', department))
MATHS.addCourse(new Course(subject, '2140', ' Discrete Mathematics', 3, 'A10', 4828273, 'TW', '1:30PM - 5:20AM', 50, 23, 'Monica White', '114 Armes', department))

subject = "STATS"
department = "STATISTICS"

STATS.addCourse(new Course(subject, '1110', ' Introductory to Statistical Analysis', 3, 'A02', 394823, 'MW', '3:00PM - 5:00PM', 400, 125, 'Mike Arms', '432 Isbiter', department))
STATS.addCourse(new Course(subject, '2000', ' Advanced Statistics 1', 3, 'A29', 4348776, 'MF', '8:30PM - 10:00PM', 15, 12, 'Simon Tyson', '332 Armes', department))
STATS.addCourse(new Course(subject, '2100', ' Advanced Statistics 2', 3, 'A04', 797765, 'SM', '2:30AM - 1:00PM', 90, 67, 'Luke Kyle', '200 Tier', department))
MATHS.addCourse(new Course(subject, '1300', ' Linear Algebra', 3, 'A09', 643244, 'MW', '5:30PM - 8:00PM', 140, 120, 'Opwag Sinu', '110 Armes', department))

subject = "ARTS"
department = "Arts and Literature"

ARTS.addCourse(new Course(subject, '1000', ' Introductory to Arts', 3, 'A03', 639382, 'MT', '5:30PM - 9:00PM', 150, 120, 'Ather Kawaski', '120 Armes', department))


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
