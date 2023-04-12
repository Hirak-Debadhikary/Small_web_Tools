const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const rgb = document.getElementById("rgb");
const hex = document.getElementById("hex");

// Get the background color of the body element
const bgColor = window.getComputedStyle(document.body).getPropertyValue("background-color");

// Convert the color to RGB values
const rgbValues = bgColor.match(/\d+/g);

// Calculate the brightness of the color using the formula (R*299 + G*587 + B*114) / 1000
const brightness = (rgbValues[0] * 299 + rgbValues[1] * 587 + rgbValues[2] * 114) / 1000;

// If the brightness is less than or equal to 128, set the font color to white, otherwise set it to black
if (brightness <= 128) {
  document.body.style.color = "white";
} else {
  document.body.style.color = "black";
}

function updateColor() {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  const color = `rgb(${r}, ${g}, ${b})`;
  rgb.textContent = color;

  const hexColor =
    "#" +
    Number(r).toString(16).padStart(2, "0") +
    Number(g).toString(16).padStart(2, "0") +
    Number(b).toString(16).padStart(2, "0");
  hex.textContent = hexColor;

  document.body.style.backgroundColor = color;
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);
