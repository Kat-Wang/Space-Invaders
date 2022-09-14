export const processCollisions = (bullets, aliens, cosmoTot) => {
  bullets.forEach((bullet) => {
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

    /* shields.forEach((shield) => {
        const shieldDimensions = shield.element.getBoundingClientRect();
  
        if (
          bulletDimensions.top < shieldDimensions.bottom &&
          bulletDimensions.left > shieldDimensions.left &&
          bulletDimensions.right < shieldDimensions.right
        ) {
          shield.element.src = `./${Math.min(++shield.state, 4)}.PNG`;
          bullet.element.remove();
        } */
    //   });
  });
};
