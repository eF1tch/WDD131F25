const selectElem = document.querySelector('select');
const logo = document.getElementById('favicon');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
  logo.href = "images/recipe-book-dark-mode.png";
}

function changeTheme() {
  const current = selectElem.value;
  if (current === 'dark') {
    document.body.classList.add("dark");
    logo.href = "images/recipe-book-dark-mode.png";
  } else {
    document.body.classList.remove("dark");
    logo.href = "images/recipe-book.png";
  }
}