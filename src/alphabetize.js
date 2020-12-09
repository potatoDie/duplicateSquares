// Given a NodeList, change their innerHTML (or some selector) to a consequetive row af characters starting from ASCII 65

export const alphabet = function (list) {
  let asciiCode = 65; // Start with A
  for (let node of list) {
    node.innerHTML = String.fromCharCode(asciiCode++);
  }
};
