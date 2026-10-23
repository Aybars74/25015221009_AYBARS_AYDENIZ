const searchInput = document.querySelector("#search-input");
const eventCards = [...document.querySelectorAll(".event-card")];
const counter = document.querySelector("#counter");
const noResults = document.querySelector("#no-results");
const clearButton = document.querySelector("#clear-btn");

function filterEvents() {
  const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  let visibleCount = 0;

  eventCards.forEach((card) => {
    const matches = card.textContent.trim().toLocaleLowerCase("tr-TR").includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  counter.textContent = `Toplam ${visibleCount} etkinlik gösteriliyor.`;
  noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterEvents);

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterEvents();
});