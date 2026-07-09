const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link=document.querySelector("a")

function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick);

/*<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Momentum</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form id="login-form">
        <input 
        required
        maxlength="15"
        type="text" 
        placeholder="이름이 무엇인가요?">
        <button>Log In</button>
    </form>
    <a href="https://nomadcoders.co">Go to courses</a>
    <script src="21.Getting user.js"></script>
</body>
</html>*/