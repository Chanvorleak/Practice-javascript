function changeText() {
  const button = document.getElementById("myButton");
  const funnyText = document.getElementById("funnyText");

  button.innerText = "You clicked me!";
  funnyText.style.display = "block";
}

document.getElementById("myButton").addEventListener("click", changeText);
