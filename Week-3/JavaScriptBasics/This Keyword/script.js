// About this keyword in JS

class Person {
    constructor(name, age, gender, nationality) {
        this.name = "S",
            this.age = 25,
            this.gender = "Male",
            this.nationality = "Bharatiya"
    }

    introduce() {
        return ("My name is: " + this.name + " Age is: " + this.age + " gender: " + this.gender + " nationality: " + this.nationality);
    }

}

// var person1 = new Person;
// person1.name = "Somesh";
// person1.age = "25";
// person1.gender = "male";
// person1.nationality = "Bhartiya";

// person1.introduce();

class Student extends Person {
    constructor(name, age, gender, nationality, introduce, subject) {
        super(name, age, gender, nationality, introduce);
        this.subject = subject;
    }
    
    
    introduce() {
        return ("My name is: " + this.name + " Age is: " + this.age + " gender: " + this.gender + " nationality: " + this.nationality + " and subject is: " + this.subject);
    }

    study(){
        return (this.name+" studies "+this.subject);
    }
}

let student1 = new Student;
student1.name = "Som";
student1.subject = "Physics";

console.log(student1.introduce());

console.log(student1.study());