const button = document.querySelector("#button");
const img = document.querySelector("#img");
const imagemName = document.querySelector("h2");

const herois = () => {
  const random = Math.floor(Math.random() * 750);
  const token = 5835790666503294;
  const url = `https://superheroapi.com/api.php/${token}/${random}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.image.url;
      imagemName.innerText = data.name;
    });
};

button.addEventListener("click", herois);
