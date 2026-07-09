const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick() {
    const clickedClass ="clicked"
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

/*body{
    background-color: beige;
}

h1 {
    color:cornflowerblue;
    transition:color .5s ease-in-out ;
}
.sexy-font {
    font-family: sans-serif;
}

.clicked {
    color: tomato; 
}*/ //이때 쓸 CSS 코드