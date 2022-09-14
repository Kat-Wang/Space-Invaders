import { body } from "./body.js";
import { rows, columns, aliens } from "./aliens.js";
import { x, keydown, size } from "./player.js";

export const bullets = [];

export const createBullet = (source, x, y = body.height - size - 28, time) => {
  const element = document.createElement("div");
  const currentStart = time;
  Object.assign(element.style, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "12px",
    height: "28px",
    backgroundColor: "black",
    transform: `translate(${x}px, ${y}px)`,
  });
  return { element, x, y, source, currentStart };
};

let playerPreviousStart = 0;

export const firePlayerBullets = (timestamp) => {
  if (keydown[" "]) {
    const bullet = createBullet(
      "player",
      x - 10 + size / 2,
      undefined,
      timestamp
    );

    if (bullet.currentStart - playerPreviousStart >= 800) {
      bullets.push(bullet);
      document.body.append(bullet.element);
      playerPreviousStart = bullet.currentStart;
    }
  }

  bullets.forEach((bullet) => {
    if (bullet.source === "player") {
      bullet.y -= 10;
      bullet.element.style.transform = `translate(${bullet.x}px, ${bullet.y}px)`;
      if (bullet.y < 0) {
        bullet.element.remove();
      }
    }
  });
};

const selectAlienShooter = (aliens) => {
  const randomAlien =
    aliens[
      Math.max(
        Math.floor(Math.random() * rows * columns),
        Math.min(3, rows * columns)
      )
    ];
  //   console.log(randomAlien);

  if (randomAlien.element != undefined && randomAlien != null) {
    return randomAlien.location;
  } else selectAlienShooter();
};

let alienPreviousStart = 0;

export const fireAlienBullets = (timestamp) => {
  const bullet = createBullet(
    "alien",
    selectAlienShooter(aliens).x,
    selectAlienShooter(aliens).y,
    timestamp
  );

  if (bullet.currentStart - alienPreviousStart >= 3000) {
    bullets.push(bullet);
    document.body.append(bullet.element);
    alienPreviousStart = bullet.currentStart;
  }

  bullets.forEach((bullet) => {
    if (bullet.source === "alien") {
      bullet.y += 3;
      bullet.element.style.transform = `translate(${bullet.x}px, ${bullet.y}px)`;
    }
    if (bullet.y > body.height) {
      bullet.element.remove();
    }
  });
};
