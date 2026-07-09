const quotes = [
{
    quote:"사람은 스스로 믿는 대로 된다.",
    author:"안톤 체홉",
},
{
    quote:"어떤 일이든 쉬워지기 전에는 어려운 법이다.",
    author:"토마스 풀러",
},
{
    quote:"해보지 않고는 당신이 무엇을 해낼 수 있는지 알수가 없다.",
    author:"프랭클린 아담",
},
{
    quote:"성공의 비밀은 자신감이며 자신감의 비밀은 엄청난 준비다.",
    author:"조수미",
},
{
    quote:"내가 깨면 병아리가 되지만 남이 깨면 달걀프라이가 된다.",
    author:"강호동",
},
{
    quote:"지금 걷는 길이 지옥길이라면 왜 지옥에서 멈추려 하는가.",
    author:"윈스털 처칠",
},
{
    quote:"앞에서 할 수 없는 말은 뒤에서도 하지 말아라.",
    author:"유재석",
},
{
    quote:"분명히 올거야 '아 내가 이순간을 위해 지금껏 버텼구나'하는 날이 꼭.",
    author:"신유",
},
{
    quote:"나 자신을 사랑해야 남들도 저를 사랑해주죠.",
    author:"김도훈",
},
{
    quote:"귀는 친구를 만들고 입은 적을 만든다.",
    author:"탈무드",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Momentum</title>
  </head>
  <body>
    <form class="hidden" id="login-form">
      <input
        required
        maxlength="15"
        type="text"
        placeholder="이름이 뭐에요?"
      />
      <input type="submit" value="Log In" />
    </form>
    <h1 class="hidden" id="greeting"></h1>
    <h2 id="clock">00:00:00</h2>
    <div id="quote">
      <span></span>
      <span></span>
    </div>
    <script src="clocck.js"></script>
    <script src = "greetings.js"></script>
    <script src="27.Quotes.js"></script>
  </body>
</html>
*/