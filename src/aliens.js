import { body } from "./body.js";

export let columns = 7;

export let rows = 3;

let alienSize = 80;

const space = ((
  total = body.width - alienSize * columns,
  gap = total * 0.35
) => ({
  total,
  gap,
  extraGap: total - gap,
}))();

const eachGap = space.gap / (columns - 1);

const grid = (i) => ({
  x: (i % columns) * (eachGap + alienSize),
  y: Math.floor(i / columns) * (eachGap + alienSize),
});

export const aliens = [...Array(columns * rows).keys()].map((i) => {
  const element = document.createElement("img");
  element.src = "./assets/flower.png";
  Object.assign(element.style, {
    width: `${alienSize}px`,
    height: `${alienSize}px`,
    transform: `translate(${grid(i).x}px, ${grid(i).y}px)`,
    position: "absolute",
    left: 0,
    top: 0,
    fontSize: "42px",
  });
  const location = element.getBoundingClientRect();
  return { element, location };
});

export const createAliens = () =>
  aliens.forEach((alien) => document.body.append(alien.element));

let position = { x: 0, y: 0 };
const speed = 1.5;
let direction = 1;

export const shimmyAliens = () => {
  aliens.forEach((alien, i) => {
    alien.element.style.transform = `translate(${grid(i).x + position.x}px, ${
      grid(i).y + position.y
    }px)`;
    alien.location = alien.element.getBoundingClientRect();
  });

  position.x += direction * speed;

  if (position.x >= space.extraGap) {
    direction = -1;
    position.y += eachGap;
  } else if (position.x <= 0) {
    direction = 1;
    position.y += eachGap;
  }
};

// export const checkAlienPlayerCollision = (bullets) => {
//     aliens.forEach((alien => alien.location))
// }
