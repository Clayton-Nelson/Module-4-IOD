let data;
let dataMens;
let dataJewels;
let dataElec;
let dataWomens;
let currentCategory;
let sortedCategory;

async function fetchData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      data = json;
      sortCategoryArrays(data)
      currentCategory = data;
      displayCards();
    });
}

function displayCards() {
  const cardsContainer = document.querySelector("#item-display");
  cardsContainer.innerHTML = "";

  currentCategory.forEach((item) => {
    const template = document
      .getElementById("item-template")
      .content.cloneNode(true);

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;

    template.querySelector(".item-picture").appendChild(img);
    template.querySelector(".item-title").innerText = item.title;
    template.querySelector(".item-price").innerText = item.price;
    template.querySelector(".item-description").innerText = item.description;
    template.querySelector(".item-category").innerText = item.category;
    template.querySelector(".item-rating").innerText = `Rating: ${item.rating.rate} (Count: ${item.rating.count})`;

    cardsContainer.appendChild(template);
  });
}

function sortCategoryArrays(data) {
  dataMens = data.filter((item) => item["category"] == "men's clothing");
  dataJewels = data.filter((item) => item["category"] == "jewelery");
  dataElec = data.filter((item) => item["category"] == "electronics");
  dataWomens = data.filter((item) => item["category"] == "women's clothing");
}

function filterAndPrintByCategory() {
  const CategoryInput = document.getElementById("refine-search-input").value;

  if (CategoryInput === "empty") {
    currentCategory = data;
  } else if (CategoryInput === "women's clothing") {
    currentCategory = dataWomens;
  } else if (CategoryInput === "men's clothing") {
    currentCategory = dataMens;
  } else if (CategoryInput === "electronics") {
    currentCategory = dataElec;
  } else if (CategoryInput === "jewelery") {
    currentCategory = dataJewels;
  }

  displayCards();
}

fetchData();
