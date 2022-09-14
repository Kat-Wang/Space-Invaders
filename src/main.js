import { body, createBody } from "./body.js";
import { createAliens, shimmyAliens, aliens } from "./aliens.js";
import { keydown, createPlayer, playerMovement, cosmoTot } from "./player.js";
import { bullets, firePlayerBullets, fireAlienBullets } from "./bullets.js";
import { processCollisions } from "./collisions.js";

document.addEventListener("keydown", (event) => {
  console.log("keydown", event.key);
  keydown[event.key] = true;
});

document.addEventListener("keyup", (event) => {
  console.log("keyup", event.key);
  keydown[event.key] = false;
});

createBody();
createAliens();
createPlayer();

// const createScene = () => {
//   createBody();
//   createAliens();
//   createShields();
//   createPlayer();
// };

const animate = (timestamp) => {
  shimmyAliens();
  playerMovement();
  firePlayerBullets(timestamp);
  fireAlienBullets(timestamp);
  processCollisions(bullets, aliens, cosmoTot);
  requestAnimationFrame(animate);
};

animate();
