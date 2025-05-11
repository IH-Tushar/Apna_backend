// function PersonMaker(name,age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`hi my name is ${name}`);
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("tushar" , 25);

// let p2 = PersonMaker("sdf", 54);


// Constructor function - dosen't return anything & start with capital letter

function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function() {
    console.log(`hi my name is ${this.name}`);
}

let p1 = new Person("tushar" , 25);
let p2 = new Person("Sunny", 23);
