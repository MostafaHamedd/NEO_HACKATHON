// DON"T CHANGE THIS
export const NAMES_TERMS = {
  'FALL 2022': 'FALL 2022',
  'WINTER 2023': 'WINTER 2023',
  'SUMMER 2023': 'SUMMER 2023',
}

export const NAMES_DEPARTMENT = {
  COMP: 'COMPUTER SCIENCE',
  MATHS: 'MATHEMATICS',
  STAT: 'STATISTICS',
}

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

class DEPARTMENT {
  constructor(departmentName) {
    this.departmentName = departmentName
    this.COURSES = []
  }

  addCourse(newCourse) {
    this.COURSES.push(newCourse)
  }

  getDepartmentName() {
    return this.departmentName;
  }
}

class TERM {
  constructor(termName) {
    this.termName = termName
    this.DEPARTMENT = []
  }

  addDepartment(department) {
    this.DEPARTMENT.push(department)
  }

  getTermName() {
    return this.termName;
  }
}

class UNIVERSITY {
  constructor() {
    this.terms = []
  }

  addTerm(term) {
    this.terms.push(term)
  }

  getCourseList(termName, departmentName) {
    let courses = [];
    for (let i = 0; i < this.terms.length; i++) {
      const term = this.terms[i];
      if ( termName === term.getTermName() ) 
      {
        term.DEPARTMENT.forEach( department => {
          if ( department.departmentName === departmentName ) {
            courses = department.COURSES;
          } 
        })
      }
      }
      return courses;
    }
  }


const COMPSCI = new DEPARTMENT(NAMES_DEPARTMENT.COMP)
const MATHS = new DEPARTMENT(NAMES_DEPARTMENT.MATHS)
const STATS = new DEPARTMENT(NAMES_DEPARTMENT.STAT)

let subject = 'COMP'
let department = 'COMPUTER SCIENCE'

COMPSCI.addCourse(
  new Course(
    subject,
    '1010',
    '	Introductory Computer Science',
    3,
    'A01',
    3126781,
    'MWF',
    '2:30AM - 3:20AM',
    200,
    190,
    'Jack Ma',
    '221 Wallace',
    department
  )
)
COMPSCI.addCourse(
  new Course(
    subject,
    '1020',
    '	Introductory Computer Science 2',
    3,
    'A03',
    3484832,
    'MWF',
    '8:30AM - 9:20AM',
    200,
    49,
    'Dwayne Johnson',
    '110 Armes',
    department
  )
)
COMPSCI.addCourse(
  new Course(
    subject,
    '1012',
    ' Introductory Computer Science 1',
    3,
    'A08',
    2837295,
    'TR',
    '4:30PM - 5:20PM',
    200,
    49,
    'Alex Martin',
    '322 University College',
    department
  )
)
COMPSCI.addCourse(
  new Course(
    subject,
    '2140',
    '	Data Structure And Algorithms',
    3,
    'A04',
    5553354,
    'TR',
    '7:45AM - 9:00PM',
    200,
    49,
    'Trevor Philips',
    'E2 233',
    department
  )
)
COMPSCI.addCourse(
  new Course(
    subject,
    '2160',
    '	Programming practices',
    3,
    'A01',
    3126781,
    'MWF',
    '2:30AM - 3:20AM',
    200,
    190,
    'Jack Ma',
    '221 Wallace',
    department
  )
)
COMPSCI.addCourse(
  new Course(
    subject,
    '2080',
    '	Analysis of Algorithms',
    3,
    'A03',
    3484832,
    'MWF',
    '8:30AM - 9:20AM',
    200,
    49,
    'Dwayne Johnson',
    '110 Armes',
    department
  )
)
COMPSCI.addCourse(
  new Course(
    subject,
    '3020',
    '	Human-Computer Interaction 1',
    3,
    'A04',
    5553354,
    'TR',
    '7:45AM - 9:00PM',
    200,
    49,
    'Trevor Philips',
    'E2 233',
    department
  )
)
COMPSCI.addCourse(
  new Course(
    subject,
    '3380',
    ' Datavases',
    3,
    'A08',
    2837295,
    'TR',
    '4:30PM - 5:20PM',
    200,
    49,
    'Alex Martin',
    '322 University College',
    department
  )
)

subject = 'MATH'
department = 'MATHEMATICS'

MATHS.addCourse(
  new Course(
    subject,
    '1300',
    ' Linear Algebra',
    3,
    'A09',
    243443,
    'MTW',
    '2:30PM - 4:00PM',
    150,
    120,
    'Alexander Damascus',
    '110 Armes',
    department
  )
)
MATHS.addCourse(
  new Course(
    subject,
    '1500',
    ' Calculus 1',
    3,
    'A03',
    125345,
    'MW',
    '2:20PM - 7:00PM',
    50,
    12,
    'Sonia Dorem',
    '322 Tier',
    department
  )
)
MATHS.addCourse(
  new Course(
    subject,
    '1700',
    ' Calculus 2',
    3,
    'A04',
    353323,
    'MT',
    '12:30PM - 4:00AM',
    120,
    13,
    'Peter Apple',
    '600 Wallace',
    department
  )
)
MATHS.addCourse(
  new Course(
    subject,
    '2140',
    ' Discrete Mathematics',
    3,
    'A10',
    4828273,
    'TW',
    '1:30PM - 5:20AM',
    50,
    23,
    'Monica White',
    '114 Armes',
    department
  )
)

subject = 'STATS'
department = 'STATISTICS'

STATS.addCourse(
  new Course(
    subject,
    '1110',
    ' Introductory to Statistical Analysis',
    3,
    'A02',
    394823,
    'MW',
    '3:00PM - 5:00PM',
    400,
    125,
    'Mike Arms',
    '432 Isbiter',
    department
  )
)
STATS.addCourse(
  new Course(
    subject,
    '2000',
    ' Advanced Statistics 1',
    3,
    'A29',
    4348776,
    'MF',
    '8:30PM - 10:00PM',
    15,
    12,
    'Simon Tyson',
    '332 Armes',
    department
  )
)
STATS.addCourse(
  new Course(
    subject,
    '2100',
    ' Advanced Statistics 2',
    3,
    'A04',
    797765,
    'SM',
    '2:30AM - 1:00PM',
    90,
    67,
    'Luke Kyle',
    '200 Tier',
    department
  )
)
STATS.addCourse(
  new Course(
    subject,
    '1300',
    ' Linear Algebra',
    3,
    'A09',
    643244,
    'MW',
    '5:30PM - 8:00PM',
    140,
    120,
    'Opwag Sinu',
    '110 Armes',
    department
  )
)

// ADD TERMS
const FALL_2022 = new TERM(NAMES_TERMS['FALL 2022'])
FALL_2022.addDepartment(COMPSCI)
FALL_2022.addDepartment(MATHS)
FALL_2022.addDepartment(STATS)

const WINTER_2023 = new TERM(NAMES_TERMS["WINTER 2023"])
WINTER_2023.addDepartment(COMPSCI)
WINTER_2023.addDepartment(MATHS)
WINTER_2023.addDepartment(STATS)

const SUMMER_2023 = new TERM(NAMES_TERMS["SUMMER 2023"])
SUMMER_2023.addDepartment(COMPSCI)
SUMMER_2023.addDepartment(MATHS)
SUMMER_2023.addDepartment(STATS)

// ADDING IN UNIVERSITY
export const CURRENT_UNIVERSITY = new UNIVERSITY()
CURRENT_UNIVERSITY.addTerm(FALL_2022)
CURRENT_UNIVERSITY.addTerm(WINTER_2023)
CURRENT_UNIVERSITY.addTerm(SUMMER_2023)
