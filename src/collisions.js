export const processCollisions = (bullets, aliens, cosmoTot, shields) => {
  bullets.forEach((bullet) => {
    shields.forEach((shield) => {
      const shieldDimensions = shield.element.getBoundingClientRect();
      const allBulletDimensions = bullet.element.getBoundingClientRect();

      if (
        allBulletDimensions.top < shieldDimensions.bottom &&
        allBulletDimensions.left > shieldDimensions.left &&
        allBulletDimensions.right < shieldDimensions.right
      ) {
        if (shield.state++ > 4) {
          shield.element.remove();
          bullet.element.remove();
        } else {
          shield.element.src = `./assets/${Math.min(++shield.state, 4)}.png`;
          bullet.element.remove();
        }
      }
    });

    if (bullet.source === "player") {
      const bulletDimensions = bullet.element.getBoundingClientRect();

      aliens.forEach((alien) => {
        if (
          bulletDimensions.top < alien.location.bottom &&
          bulletDimensions.top > alien.location.top &&
          bulletDimensions.left > alien.location.left &&
          bulletDimensions.right < alien.location.right
        ) {
          alien.element.remove();
          //   console.log(
          //     `removing ${alien.location.top} because ${bulletDimensions.top}`
          //   );
          bullet.element.remove();
        }
      });
    } else if (bullet.source === "alien") {
      const bulletDimensions = bullet.element.getBoundingClientRect();
      const playerDimensions = cosmoTot.getBoundingClientRect();

      if (
        bulletDimensions.top < playerDimensions.bottom &&
        bulletDimensions.top > playerDimensions.top &&
        bulletDimensions.left > playerDimensions.left &&
        bulletDimensions.right < playerDimensions.right
      ) {
        console.log("you lost a life!");
        bullet.element.remove();
      }
    }
  });
};
