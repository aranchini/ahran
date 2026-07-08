const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);


//이때 인덱스는 요론 모양

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="hello">
        <h1>Click me!</h1>
    </div>
    <script src="11.event.js"></script>
</body>*/
