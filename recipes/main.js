import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

console.log(getRandomListEntry(recipes));

const selectElem = document.querySelector('select');
const logo = document.getElementById('favicon');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
  logo.href = "images/recipe-book-dark-mode.png";
}

function tagsTemplate(tags) {
  let html = `<ul class="tags">`;
  for (let tag of tags) {
    html += `<li>${tag}</li>`;
  }
  html += `</ul>`;

  return html;
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {

      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;

  return html;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe-list">
      <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}" />
      <figcaption class="info-box">
        ${tagsTemplate(recipe.tags)}
        <h2>${recipe.name}</h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="hidden">${recipe.description}</p>
      </figcaption>
    </figure>
  `;
}

const recipe = getRandomListEntry(recipes);
// console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
  const outputElem = document.getElementById('recipes'); 
  const html = recipeList.map(recipe => recipeTemplate(recipe)).join('');
  outputElem.innerHTML = html;
}

function init() {
  const recipe = getRandomListEntry(recipes)
  renderRecipes([recipe]);
}
init();

const searchForm = document.querySelector('.search-bar');
searchForm.addEventListener('submit', searchHandler);

function searchHandler(event) {
  event.preventDefault();
  const query = document.getElementById('search').value.toLowerCase();
  const filtered = filterRecipes(query);
  renderRecipes(filtered);
}


function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
      recipe.recipeIngredient.find(ingredient => ingredient.toLowerCase().includes(query))
    );
  });

  filtered.sort((a, b) => a.name.localeCompare(b.name));
  return filtered;
}
