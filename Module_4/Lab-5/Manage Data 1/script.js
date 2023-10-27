let news = [
  { id: 1, title: "Election Results", content: "Newly elected minister..." },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  { id: 3, title: "Tornado Warning", content: "Residents should prepare..." },
];

function displayCards() {
  const cardsContainer = document.querySelector("#cards-results");
  cardsContainer.innerHTML = "";

  news.forEach((article) => {
    const template = document
      .getElementById("cards-template")
      .content.cloneNode(true);

    template.querySelector(".cards-title").innerText = article.title;
    template.querySelector(".cards-text").innerText = article.content;

    cardsContainer.appendChild(template);
  });
}

setInterval(displayCards, 5000);
