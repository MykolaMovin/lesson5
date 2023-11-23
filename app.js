// Practical task 1
function propsCount(currentOject){
    let keys = Object.keys(currentOject);
    return keys.length;
};

// Practical task 2
let arbitraryObject = {
    firstProperty: 'This is the first property',
    secondProperty: 'This is the second property',
    thirdProperty: 'This is the third property',
    fourthProperty: 'This is the fourth property',
    fifthProperty: 'This is the fifth property'
};

function showPrpos(obj) {
    for (let prop in obj) {
        console.log(prop, obj[prop]);
    };
}

// Practical task 3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.fullName = (name = this.name, surname = this.surname) => console.log(name, surname)
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        let date = new Date();
        this.admissionYear = year;
        this.fullName = (middleName) => console.log(this.name, this.surname, middleName);
        this.showCourse = (admissionYear = this.admissionYear) => {
            return (date.getFullYear() - admissionYear);
        };

    }
}

const stud1 = new Student("Petro", " Petrenko ", 2015);
console.log(stud1.fullName('Petrovych'));
console.log("Current course: " + stud1.showCourse());

// Practical task 4
class Workers {
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;

    };
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    #expirience = 1.2
}