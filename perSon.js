class Person{
    constructor(name = "unknown", age = 0){
        this.name= name
        this.age= age
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const Person1 = new Person("Subhajit", 21);
console.log(Person1.getDetails());

const Person2 = new Person();
console.log(Person2.getDetails());