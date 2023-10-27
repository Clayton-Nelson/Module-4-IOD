const data = {
  picture:
    "ChowChow.PNG",
  text: "This is a generic text paragraph for the card currently displayed on this webpage.",
};

let count = 0;

function displayCards() {
  const cardsContainer = document.querySelector("#cards-container");
  cardsContainer.innerHTML = "";

  while (count < 8) {
    const template = document.getElementById("cards").content.cloneNode(true);

    const img = document.createElement("img");
    img.src = data.picture;
    img.alt = "Card Image";

    img.style.width = "auto";  // Add this line to ensure the image fits
    img.style.height = "auto";

    template.querySelector(".card-picture").appendChild(img);
    template.querySelector(".card-text").innerText = data.text;

    cardsContainer.appendChild(template);
    count++;
  }
}

setTimeout(displayCards, 500)