let data;
const limit = 10;

async function logPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    data = await response.json();
    postPosts();
  } catch (error) {
    console.error("Error:", error);
  }
}

function postPosts() {
  const postsContainer = document.querySelector("#post-results");
  postsContainer.innerHTML = "";

  const postsToDisplay = data.slice(0, limit);

  postsToDisplay.forEach((post) => {
    const template = document
      .getElementById("post-template")
      .content.cloneNode(true);

    template.querySelector(".post-title").innerText = post.title;
    template.querySelector(".post-text").innerText = post.body;

    postsContainer.appendChild(template);
  });
}

logPosts();
