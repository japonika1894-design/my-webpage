
alert("自己紹介ページへようこそ！");

const button = document.getElementById("btn");
const text = document.getElementById("text");

button.addEventListener("click", () => {
  text.textContent = "見てくれてありがとう！";
});


