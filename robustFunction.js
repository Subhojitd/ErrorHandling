function getPerson(person){
    try {
        if(!person.name || !person.age){
            throw new Error("Invalid Parameter type")
        }
        return `Name: ${person.name}, Age: ${person.age}`;

    } catch (error) {
        return error.message
    }
}

const person1 = {name: "Subhajit", age: 21}
const person2 = {name: "Subhajit"}
const person3 = {age: 55};

console.log(getPerson(person1));
console.log(getPerson(person2))
console.log(getPerson(person3))
