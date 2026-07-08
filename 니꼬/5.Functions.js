function sayHello(nameOfPerson,age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
console.log();
sayHello("nico",10);
sayHello("aran",17);
sayHello("dohoon",22);
sayHello("shinyu",24);

function plus(a,b) {
    console.log(a+b);
}
function divide(a,b) {
    console.log(a/b);
}
plus(117,130);
divide(42,2)

const player = {
    name: "nico",
    sayHello:function(otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you!");
    },
}

player.sayHello("lynn");
player.sayHello("nico");