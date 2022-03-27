let winnerButton;

function addButtons() {
  let buttonsNumber = document.getElementById("btnsNumber").valueAsNumber;
  let winNumber = Math.floor((Math.random() * buttonsNumber) + 1);
  for (let i = 1; i <= buttonsNumber; ++i) {
    let myDiv = document.createElement("div");
    myDiv.id = 'buttons-place';
    myDiv.innerHTML = "<button id='"+ i +"' title='Are you sure?' onclick='clickedButton(this.id), checkWinOrLose(clickedButton(this.id))'>Click me!</button>";
    document.body.appendChild(myDiv);
  }
  winnerButton = generateWinNumber(buttonsNumber);
}

function generateWinNumber (randomNumber) {
  let numberOfButtons = document.getElementById("btnsNumber").valueAsNumber;
  randomNumber = Math.floor((Math.random() * numberOfButtons) + 1);
  return randomNumber;
}

function clickedButton(myBtn) {
  return myBtn;
}

function checkWinOrLose(clickedButton) {
  if (winnerButton == clickedButton) {
    alert("BooYaaah! You chose the right one :) Congratulations! You are the champion!");
  } else {
    alert ("Oops! You push the wrong button! Maybe the next choice will be the right one");
  }
}
