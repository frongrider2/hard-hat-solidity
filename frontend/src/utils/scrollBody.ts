export const disableScroll = () => {
  document.body.className = "enableScroll";
  document.body.style.overflowY = "hidden";
};

export const enableScroll = () => {
  document.body.className = "";
  document.body.style.overflowY = "scroll";
};
