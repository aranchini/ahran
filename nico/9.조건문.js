const age =parseInt(prompt("나이가 몇이니?"));

console.log(age);


if(isNaN(age)|| age <0){
    console.log("양의 숫자를 써주세요.");
} else if(age  <18){
    console.log("당신은 미성년자 입니다.");
} else if(age >= 18 && age <= 50){
    console.log("당신은 술을 마실수 있습니다.");
} else if(age > 50 && age <= 80){
    console.log("건강을 생각해서라도 술을 좀 줄입시다!");
} else if(age > 80){
    console.log("술은 노인병의 지름길입니다. 술을 마시지 마세요!");
}