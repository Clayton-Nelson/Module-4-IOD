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

function addArticleFromInput() {
  const articleTitle = document.getElementById("articleTitle").value;
  const articleText = document.getElementById("articleText").value;
  if (articleTitle == "" || articleText == "") {
    errorMessage()
  } else {
    addArticle(articleTitle, articleText)
    clearInputs()
  }
}

function errorMessage() {
  const errorContainer = document.getElementById("errorMessage")
  errorContainer.innerHTML = "Please fill out both inputs before clicking submit."
}

function addArticle(articleTitle, articleText) {
  const newArticle = {
    title: articleTitle,
    content: articleText
  }

  news.push(newArticle)
}

function clearInputs() {
  const articleTitle = document.getElementById("articleTitle").value = "";
  const articleText = document.getElementById("articleText").value = "";
}

setInterval(displayCards, 5000);
