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

//console.log는 그림의 떡. 꺼내 먹으려면 return필요....
//return하면 함수 끝남
//함수는 실행하면 사라지고 마지막엔 결과를 남김
//마지막에 return이 없으면 undefined를 출력