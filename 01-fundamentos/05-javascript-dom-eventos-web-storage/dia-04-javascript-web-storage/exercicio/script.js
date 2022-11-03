let divBackground = document.querySelectorAll(".bg button");
let divFontColor = document.querySelectorAll(".font button");
let divFontSize = document.querySelectorAll(".size button");
let divLineSpacing = document.querySelectorAll(".line button");
let divFontType = document.querySelectorAll(".family button");

function changeBackground(event) {
  let bgTarget = event.target;
  document.body.style.backgroundColor = bgTarget.innerText;
}

for (let i = 0; i < divBackground.length; i += 1) {
  divBackground[i].addEventListener("click", changeBackground);
}

function changeColorText(event) {
  let textTarget = event.target;
  document.body.style.color = textTarget.textContent;
}

for (let o = 0; o < divFontColor.length; o += 1) {
  divFontColor[o].addEventListener("click", changeColorText);
}

function changeFontSize(event) {
  let fontTarget = event.target;
  document.body.style.fontSize = fontTarget.textContent;
}

for (let u = 0; u < divFontSize.length; u += 1) {
  divFontSize[u].addEventListener("click", changeFontSize);
}

function changeLineSpacing(event) {
  let lineTarget = event.target;
  document.body.style.lineHeight = lineTarget.textContent;
}

for (let e = 0; e < divLineSpacing.length; e += 1) {
  divLineSpacing[e].addEventListener("click", changeLineSpacing);
}

function changeFont(event) {
    let fontTarget = event.target;
    document.body.style.fontFamily = fontTarget.textContent;
  }
  
  for (let a = 0; a < divFontType.length; a += 1) {
    divFontType[a].addEventListener("click", changeFont);
  }
