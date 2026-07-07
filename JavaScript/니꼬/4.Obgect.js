const player = {
    name: "nico",
    points:10,
    fat:true,
};
console.log(player);
player.lastName = "potato";
player.fat = false;
console.log(player);
player.points = player.points + 15;
console.log(player.points);

//설명이 필요하지 않은 데이터 리스트들은 array로,
//설명이 필요한 정보가 담긴 데이터 리스트들은 object로!