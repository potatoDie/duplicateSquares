import { getRandomColor } from "./color";

export const duplicate = function (article, mode, amount) {
  const style = getComputedStyle(article);

  const clone = article.cloneNode("deep");

  if (mode === "horizontal") {
    clone.style.left = parseInt(style.left, 10) + amount + "px";
  } else {
    clone.style.top = parseInt(style.top, 10) + amount + "px";
  }

  if (amount < 200) clone.style.background = getRandomColor();

  return clone;
};
