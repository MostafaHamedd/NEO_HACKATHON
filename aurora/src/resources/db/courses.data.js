class course {
  constructor(name, numOfSections) {
    this.name = name;
    this.numOfSections = numOfSections;
  }
  toString() {
  return "Course: " + this.name + " " + this.numOfSections;
  }
  getName() {
    return this.name
  }
  getNumOfSection() {
  }
 
  // This function has a parameter to change the course name
  changeName(newCourseName) { 
    this.name = newCourseName;
  }

  // This function has a parameter to modify the course number
  changeCourseNum(newCourseNumber) {
    this.numOfSections = newCourseNumber
  }
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

function hasDuplicates(list) {
  return new Set(list).size !== list.length;
}

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