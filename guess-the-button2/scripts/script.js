let winnerButton;

function addButtons() {
  let addedButtons = 0;
  let buttonsNumber = document.getElementById("btnsNumber").valueAsNumber;
  let winNumber = Math.floor((Math.random() * buttonsNumber) + 1);
  if (buttonsNumber > 2) {
    for (let i = 1; i <= buttonsNumber; ++i) {
      let myDiv = document.createElement("div");
      myDiv.id = 'buttons-place';
      myDiv.innerHTML = "<button id='"+ i +"' title='Are you sure?' onclick='clickedButton(this.id), checkWinOrLose(clickedButton(this.id))'>Click me!</button>";
      document.body.appendChild(myDiv);
      ++addedButtons;
    }
  } else {
    alert ("Please, insert a number greater than 2!");
    location.reload();
  }
  winnerButton = generateWinNumber(buttonsNumber);
  if (addedButtons === buttonsNumber) {
    document.getElementById("button").disabled = true;
  }
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
    alert("BooYaaah! You chose the right one :) Congratulations! You are the champion! Wanna play again? Just hit the 'OK' button and the game will restart :)");
    location.reload();
  } else {
    alert ("Oops! You push the wrong button! Maybe the next choice will be the right one");
  }
}
