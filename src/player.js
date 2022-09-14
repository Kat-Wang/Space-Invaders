import { body } from "./body.js";

export let keydown = { ArrowLeft: false, ArrowRight: false, " ": false };

export const size = 100;
export let x = body.width / 2 - size / 2;
const speed = 10;

export const cosmoTot = document.createElement("img");
cosmoTot.src = "./assets/bee.png";
Object.assign(cosmoTot.style, {
  // backgroundColor: "mistyrose",
  width: `${size - 10}px`,
  height: `${size}px`,
  position: "absolute",
  left: 0,
  top: 0,
});

export const createPlayer = () => document.body.append(cosmoTot);

export const playerMovement = () => {
  if (keydown.ArrowLeft || keydown.ArrowRight) {
    const direction = keydown.ArrowLeft ? -1 : 1;
    x = Math.max(0, Math.min(x + direction * speed, body.width - size));
  }

  cosmoTot.style.transform = `translate(${x}px, ${body.height - size}px)`;
};
