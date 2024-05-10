var blured = document.getElementById("blur").value;
var contrast = document.getElementById("contrast").value;
var sepia = document.getElementById("sepia").value;
var invert = document.getElementById("invert").value;
var grayscale = document.getElementById("grayscale").value;
var hueRotate = document.getElementById("hue-rotate").value;
var saturate = document.getElementById("saturate").value;
var sepia = document.getElementById("sepia").value;
var opacity = document.getElementById("opacity").value;
var dropShadowX = document.getElementById("dropshadow-x").value;
var dropShadowY = document.getElementById("dropshadow-y").value;
var dropShadowBlur = document.getElementById("dropshadow-blur").value;
var dropShadowColor = document.getElementById("dropshadow-color").value;

document.getElementById("blur").addEventListener("input", (e) => {
  blured = e.target.value;
  filter();
});

document.getElementById("contrast").addEventListener("input", (e) => {
  contrast = e.target.value;
  filter();
});

document.getElementById("grayscale").addEventListener("input", (e) => {
  grayscale = e.target.value;
  filter();
});

document.getElementById("hue-rotate").addEventListener("input", (e) => {
  hueRotate = e.target.value;
  filter();
});
document.getElementById("sepia").addEventListener("input", (e) => {
  sepia = e.target.value;
  filter();
});
document.getElementById("invert").addEventListener("input", (e) => {
  console.log("hello");
  invert = e.target.value;
  filter();
});
document.getElementById("saturate").addEventListener("input", (e) => {
  saturate = e.target.value;
  filter();
});

document.getElementById("opacity").addEventListener("input", (e) => {
  opacity = e.target.value;
  filter();
});

document.getElementById("dropshadow-x").addEventListener("input", (e) => {
  dropShadowX = e.target.value;
  filter();
});
document.getElementById("dropshadow-y").addEventListener("input", (e) => {
  dropShadowY = e.target.value;
  filter();
});
document.getElementById("dropshadow-blur").addEventListener("input", (e) => {
  dropShadowBlur = e.target.value;
  filter();
});
document.getElementById("dropshadow-color").addEventListener("input", (e) => {
  dropShadowColor = e.target.value;
  filter();
});

function filter() {
  document.querySelector(
    ".effects img"
  ).style.filter = `blur(${blured}px) contrast(${contrast}%)  invert(${invert}%) opacity(${opacity}%) saturate(${saturate}%) sepia(${sepia}%)  hue-rotate(${hueRotate}deg) grayscale(${grayscale}%)  drop-shadow(${dropShadowX}px ${dropShadowY}px ${dropShadowBlur}px ${dropShadowColor})  `;

  document.querySelector(
    ".code"
  ).innerHTML = `<div>Code <Button onclick='copy()'> 📄</Button> </div> <div> <p>filter: </p>   <p> <span> blur(${blured}px) </span> <span>contrast(${contrast}%)</span> <span> invert(${invert}%)</span> <span>opacity(${opacity}%)</span> <span>saturate(${saturate}%)</span> <span>sepia(${sepia}%)</span>  <span>hue-rotate(${hueRotate}deg)</span> <span>grayscale(${grayscale}%)</span>  <span>drop-shadow(${dropShadowX}px ${dropShadowY}px ${dropShadowBlur}px ${dropShadowColor})</span></p></div>`;
}

document.querySelector(
  ".code"
).innerHTML = `<div>Code <Button onclick='copy()'> 📄</Button> </div> <div> <p>filter: </p>   <p> <span> blur(${blured}px) </span> <span>contrast(${contrast}%)</span> <span> invert(${invert}%)</span> <span>opacity(${opacity}%)</span> <span>saturate(${saturate}%)</span> <span>sepia(${sepia}%)</span>  <span>hue-rotate(${hueRotate}deg)</span> <span>grayscale(${grayscale}%)</span>  <span>drop-shadow(${dropShadowX}px ${dropShadowY}px ${dropShadowBlur}px ${dropShadowColor})</span></p></div>`;

function copy() {
  document.querySelector(".code div button").innerHTML = "✔";
  setTimeout(() => {
    document.querySelector(".code div button").innerHTML = "📄";
  }, 1000);

  var copyText = `filter: blur(${blured}px) contrast(${contrast}%)  invert(${invert}%) opacity(${opacity}%) saturate(${saturate}%) sepia(${sepia}%)  hue-rotate(${hueRotate}deg) grayscale(${grayscale}%)  drop-shadow(${dropShadowX}px ${dropShadowY}px ${dropShadowBlur}px ${dropShadowColor})  `;

  var textarea = document.createElement("textarea");
  textarea.value = copyText;
  textarea.style.position = "fixed";
  textarea.style.left = "-999999px";
  textarea.style.top = "-999999px";
  document.body.appendChild(textarea);

  textarea.select();

  document.execCommand("copy");

  document.body.removeChild(textarea);
}
