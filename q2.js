class Student {
    constructor(name) {
        this.name = name;
        this.enrolledCourses = [];
    }

    enroll(course) {
        this.enrolledCourses.push(course);
        console.log(`${this.name} enrolled in ${course}.`);
    }

    displayEnrolledCourses() {
        console.log(`${this.name}'s enrolled courses:`);
        this.enrolledCourses.forEach(course => {
            console.log(course);
        });
    }
}

class Admission {
    constructor() {
        this.students = [];
    }

    enrollStudent(student) {
        this.students.push(student);
        console.log(`${student.name} has been enrolled.`);
    }

    admitStudent(student, courses) {
        this.enrollStudent(student);
        courses.forEach(course => {
            student.enroll(course);
        });
    }

    displayEnrolledStudents() {
        console.log("Enrolled students:");
        this.students.forEach(student => {
            console.log(student.name);
            student.displayEnrolledCourses();
        });
    }
}

// Example usage:
const admissionSystem = new Admission();

const student1 = new Student("Alice");
const student2 = new Student("Bob");

admissionSystem.admitStudent(student1, ["Math", "Science"]);
admissionSystem.admitStudent(student2, ["English", "History"]);

admissionSystem.displayEnrolledStudents();
