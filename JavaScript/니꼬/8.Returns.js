const age = 15;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    divide: function(a,b){
        return a/b;
    },
    multi: function(a,b){
        return a*b;
    },
    power: function(a,b){
        return a**b;
    }
};

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult,10);
const multiResult = calculator.multi(10,minusResult);
const divideResult = calculator.divide(multiResult,plusResult);
const powerResult = calculator.power(divideResult,minusResult);