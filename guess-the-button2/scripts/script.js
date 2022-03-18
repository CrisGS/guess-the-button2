function addButtons() {
  let buttonsNumber = document.getElementById("btnsNumber").valueAsNumber;
  for (let i = 1; i <= buttonsNumber; ++i) {
    var myDiv = document.createElement("div");
    myDiv.id = 'buttons-place';
    myDiv.innerHTML = "<button id='"+ i +"' onclick='checkWinOrLose(clickedButton(this.id))'>Click me!</button>";
    document.body.appendChild(myDiv);
  }
}

function generateWinNumber () {
  let numberOfButtons = document.getElementById("btnsNumber").valueAsNumber;
  let randomNumber = Math.floor((Math.random() * numberOfButtons) + 1);
  return randomNumber;
}

function clickedButton(myBtn) {
  return myBtn;
}

function checkWinOrLose(generateWinNumber, clickedButton) {
  if (generateWinNumber == clickedButton) {
    alert("BooYaaah! You chose the right one :) Congratulations! You are the champion!");
  } else {
    alert ("Oops! You push the wrong button! Maybe the next choice will be the right one");
  }
}