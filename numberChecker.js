function numberChecker(numbers){
    return function(num){
        return numbers.includes(num);
    }
}

const check = numberChecker([45,34,23,12,45])
console.log(check(45))
console.log(check(55))
