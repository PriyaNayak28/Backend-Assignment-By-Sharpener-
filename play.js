// 1st task

const add = (a, b) => {
    return a + b;
}
console.log(add(1, 4));

// 2nd task

class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacement = (minAge) => {
        return (minMarks) => {
            if (this.age > minAge && this.marks > minMarks) {
                return this.name + " is elegible ";
            }
            else {
                return this.name + " sorry beta ";
            }
        }
    }
}
const priya = new Student('priya', 26, 67);
const umesh = new Student('umesh', 26, 67);
console.log(priya.setPlacement(21)(40))
console.log(umesh.setPlacement(21)(40))
