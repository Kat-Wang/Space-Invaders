import { body } from "./body.js";

const size = 100;
const space = ((total = body.width - size * 4, gap = total * 0.7) => ({
  total,
  gap,
  extraGap: total - gap,
}))();
const eachGap = space.gap / 4;

export const shields = [...Array(4).keys()].map((i) => {
  const element = document.createElement("img");
  let state = 1;
  element.src = `./${1}.PNG`;
  Object.assign(element.style, {
    width: `${size}px`,
    height: `${size}px`,
    position: "absolute",
    left: 0,
    top: 0,
    transform: `translate(${
      space.extraGap / 2 + size + i * (eachGap + size)
    }px, ${body.height - size * 2.5}px)`, //the '100' in the y translation is the same as cosmoTot's size
  });
  return { element, state };
});

export const createShields = () =>
  shields.forEach((shield) => document.body.append(shield.element));
