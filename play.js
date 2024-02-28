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

// 3rd task

let hobbies = ['apple', 'banana', '', 'mango', '', 'graphs', ''];
let hey = hobbies.map((hobby) => {
    if (hobby === '') {
        return 'string is empty';
    }
    return hobby;
});
console.log(hey);

//4th task

function A() {
    return new Promise((resolve, reject) => {
        resolve('a');
    })
}
function B() {
    return new Promise((resolve, reject) => {
        resolve('b');
    })
}
function C() {
    return new Promise((resolve, reject) => {
        resolve('c');
    })
}
function D() {
    return new Promise((resolve, reject) => {
        resolve('d');
    })
}
function E() {
    return new Promise((resolve, reject) => {
        resolve('e');
    })
}

// using promises

A().then((res) => {
    console.log(res);
    B().then((res) => {
        console.log(res);
        C().then((res) => {
            console.log(res);
        })
        D().then((res) => {
            console.log(res);
        })
        E().then((res) => {
            console.log(res);
        })
    })
})

// using async await

async function abcde() {
    const first = await A();
    console.log(first);
    const second = await B();
    console.log(second);
    const three = await C();
    console.log(three);
    const four = await D();
    console.log(four);
    const five = await E();
    console.log(five);
}
abcde();
