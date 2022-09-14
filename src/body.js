export const body = document.body.getBoundingClientRect();

export const createBody = () => {
  Object.assign(document.body.style, {
    backgroundImage: "url('./assets/sky.png')",
    // backgroundImage: "url(./mandom.png)",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    width: "100%",
    height: "100%",
    margin: "0",
    overflow: "hidden",
  });
};
