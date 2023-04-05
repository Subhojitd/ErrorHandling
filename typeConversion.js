function convertToNumber(str){
    const num = Number(str);
    if(isNaN(num)){
        return "Invalid number";
    }
    return num
}

console.log(convertToNumber(4.87))
console.log(convertToNumber(99))
console.log(convertToNumber("Subhajit"));
