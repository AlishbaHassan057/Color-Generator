const colors = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let generateRandom = () => {
  let random = Math.random() * colors.length;
  let floor = Math.floor(random);
  return floor;
};
const generateColor = () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colors[generateRandom()];
  }

  return hex;
};
window.addEventListener("click", () => {
  document.body.style.background = generateColor();
});
window.addEventListener("click", () => {
  const newColor = generateColor();
  document.body.style.background = newColor;

  const colorCodeElement = document.getElementById("colorCode");
  colorCodeElement.textContent = `Color Code: ${newColor}`;
  console.log(newColor);
});
