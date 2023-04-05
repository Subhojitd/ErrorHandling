const Student  = {
    name: "",
    printDetails(){
        console.log(`Hello, my name is ${this.name}`);

    }
};

const student = Object.create(Student);
student.name = "Subhajit";

student.printDetails()