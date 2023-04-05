class employee{
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}
const myemployee = new employee("Subhajit", "SDE-2", 80000)

console.log(myemployee.getSalary())