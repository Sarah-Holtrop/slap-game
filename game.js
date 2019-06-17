let players = [
  {
    name: "Player One",
    health: 100,
    hits: 0,
    items: []
  },
  {
    name: "Computer",
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
  console.log(player)
}
function giveShield(index) {
  let player = players[index];
  player.items.push(items.shield);
  console.log(player)
}
function giveRock(index) {
  let player = players[index];
  player.items.push(items.rock);
  console.log(player)
}

function addMods() {
  let player = players[0];
  // let computer = players[1];
  let mod = player.items[0];
  let modTotal = 0;
  for (let i = 0; i < player.items.length; i++) {
    modTotal += mod;
    return modTotal;
  }
  player.health -= modTotal * mod
  console.log(modTotal)
}

function fight(fight) {
  let playerOne = players[0];
  if (fight == "slap") {
    playerOne.health--;
    playerOne.hits++;
    drawFight();
    // if (playerOne.items[0] != " ") {
    //   addMods();
    //   playerOne.health = 1 * addMods()

    // addMods();
    // playerOne.health -= playerOne.health * 1;

    // playerOne.health 
  } else if (fight == "punch") {
    playerOne.health -= 5;
    playerOne.hits++;
    drawFight();
    // addMods();

  } else if (fight == "kick") {
    playerOne.health -= 10;
    playerOne.hits++;
    drawFight();
    // addMods();
  }
} //curly bracks are off

// function playerOneFight(fight) {
//   let computer = players[1];
//   if (fight == "slap") {
//     computer.health--;
//     computer.hits++;
//     addMods()
//     drawFight();
//   } else if (fight == "punch") {
//     computer.health -= 5;
//     computer.hits++;
//     addMods();
//     drawFight();
//   } else if (fight == "kick") {
//     computer.health -= 10;
//     computer.hits++;
//     addMods();
//     drawFight();
//   }
// }


function drawFight() {
  // let computer = players[1];
  let playerOne = players[0];
  // document.querySelector("#target-health").innerHTML = computer.health.toString();
  // document.querySelector("#target-hits").innerHTML = computer.hits.toString();
  // document.querySelector("#target-name").innerHTML = computer.name
  document.querySelector("#player-one-health").innerHTML = playerOne.health.toString();
  document.querySelector("#player-one-hits").innerHTML = playerOne.hits.toString();
  document.querySelector("#player-one-name").innerHTML = playerOne.name;
}

drawFight()
// addMods()