import { body, createBody } from "./body.js";
import { createAliens, shimmyAliens } from "./aliens.js";

// document.addEventListener("keydown", (event) => {
//   console.log("keydown", event.key);
//   keydown[event.key] = true;
// });

// document.addEventListener("keyup", (event) => {
//   console.log("keyup", event.key);
//   keydown[event.key] = false;
// });

createBody();
createAliens();

// const createScene = () => {
//   createBody();
//   createAliens();
//   createShields();
//   createPlayer();
// };

const animate = (timestamp) => {
  shimmyAliens();

  requestAnimationFrame(animate);
};

animate();
