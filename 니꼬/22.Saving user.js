function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value
    localStorage.setItem("username",username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    greeting.innerText = `Hello${username}`; 
    greeting.classList.remove("HIDDEN_CLASSNAME");
}

loginForm.addEventListener("submit",onLoginSubmit);

/* F12키를 누르고 콘솔에 localStorage.setItem("user name","nico")
이렇게 치면 앱플리케이션 들어가서 로컬스토리지 누르고 파일 누르면 저게 저장되있음
getItem은 키 입력하면 밸류꺼내고 removeItem은 삭제하는거임
콘솔에서 하는건 어케 동작되는지 보는거고 여기서 하는게 맞는듯*/

// 사용자 이름 저장하기 완료!
