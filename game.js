let players = [
  {
    name: "Rattata",
    health: 100,
    hits: 0,
    items: []
  },
  {
    name: "Pidgey",
    health: 100,
    hits: 0,
    items: []
  }
]

let items = {
  double: { name: "Double Attack", modifier: 2, description: "Attacks twice" },
  shield: { name: "Shield", modifier: .5, description: "Decreases damage done to user by half" },
  rock: { name: "Rock", modifier: 1, description: "Pick up a rock and throw it for 1 extra damage" }
}

function giveDouble(index) {
  let player = players[index];
  player.items.push(items.double);
}
function giveShield(index) {
  let player = players[index];
  player.items.push(items.shield);
}
function giveRock(index) {
  let player = players[index];
  player.items.push(items.rock);
}

function playerOneAddMods() {
  let player = players[0];
  let modTotal = 1;
  for (let i = 0; i < player.items.length; i++) {
    let mod = player.items[i].modifier;
    modTotal += mod;
  }
  player.items = [];
  return modTotal;
}

function playerTwoAddMods() {
  let playerTwo = players[1];
  let modTotal = 1;
  for (let i = 0; i < playerTwo.items.length; i++) {
    let mod = playerTwo.items[i].modifier;
    modTotal += mod;
  }
  playerTwo.items = [];
  return modTotal;
}

function playerTwoFight(fight) {
  let playerOne = players[0];
  if (fight == "slap") {
    playerOne.health -= 1 * playerTwoAddMods();
    playerOne.hits++;
    drawFight();
  } else if (fight == "punch") {
    playerOne.health -= 5 * playerTwoAddMods();
    playerOne.hits++;
    drawFight();
  } else if (fight == "kick") {
    playerOne.health -= 10 * playerTwoAddMods();
    playerOne.hits++;
    drawFight();
  }
}

function playerOneFight(fight) {
  let playerTwo = players[1];
  if (fight == "slap") {
    playerTwo.health -= 1 * playerOneAddMods();
    playerTwo.hits++;
    drawFight();
  } else if (fight == "punch") {
    playerTwo.health -= 5 * playerOneAddMods();
    playerTwo.hits++;
    drawFight();
  } else if (fight == "kick") {
    playerTwo.health -= 10 * playerOneAddMods();
    playerTwo.hits++;
    drawFight();
  }
}

function drawFight() {
  let playerTwo = players[1];
  let playerOne = players[0];
  document.querySelector("#target-health").innerHTML = playerTwo.health.toString();
  document.querySelector("#target-hits").innerHTML = playerTwo.hits.toString();
  document.querySelector("#target-name").innerHTML = playerTwo.name
  document.querySelector("#player-one-health").innerHTML = playerOne.health.toString()
  document.querySelector("#player-one-hits").innerHTML = playerOne.hits.toString();
  document.querySelector("#player-one-name").innerHTML = playerOne.name;
}

drawFight()