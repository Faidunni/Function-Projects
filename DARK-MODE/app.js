const toggleBtn = document.querySelector(".btn");
const articlesContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    //   format date
    const formateDate = moment(date).format("MMMM DD, YYYY");

    return `
      <article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formateDate}</span>
          <span>${length} min read</span>
        </div>
        <p>
          ${snippet}
        </p>
      </article>
    `;
  })
  .join("");

articlesContainer.innerHTML = articlesData;
