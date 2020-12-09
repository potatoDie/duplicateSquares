import "./styles.css";
import { duplicate } from "./duplicate.js";
import { alphabet } from "./alphabetize";

let h = 100,
  w = 100;
let mode = "horizontal";

document.addEventListener("click", () => {
  let articles = document.querySelectorAll("article");
  for (let article of articles) {
    let clone = duplicate(article, mode, mode === "horizontal" ? w : h);
    document.getElementById("container").appendChild(clone);
  }

  alphabet(document.querySelectorAll("#container article"));

  if (mode === "horizontal") {
    w *= 2;
    mode = "vertical";
  } else {
    h *= 2;
    mode = "horizontal";
  }
});
