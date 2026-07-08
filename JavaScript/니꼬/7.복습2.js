const player = {
    name: "aran",
    age:17,
};


console.log(player,console);
// console 도 object임
player.name = "aranchini";
console.log(player);
player.sexy = "soon";
console.log(player);
// 여기까지 object 복습한거임

function plus(a,b){
    console.log(a+b);
}

plus(117,130);
alert("shinyu and dohoon are handsome");

//마지막 예제
const calculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    divide: function(a,b){
        console.log(a/b);
    },
    multi: function(a,b){
        console.log(a*b);
    },
    power: function(a,b){
        console.log(a**b);
    }
};

calculator.add(4,2);
calculator.minus(4,2);
calculator.divide(4,2);
calculator.multi(4,2);
calculator.power(4,2);