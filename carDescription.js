class Car {
    constructor(company,model,year){
        this.company =company;
        this.model =model;
        this.year = year;
    }


    getDescription(){
        return `This is ${this.year} ${this.company} ${this.model}`
    }
}

const myCar = new Car("Toyota", "Supra", 2022);
console.log(myCar.getDescription());