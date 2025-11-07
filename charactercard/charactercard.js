level = document.querySelector("#level");
health = document.querySelector("#health");
currentLevel = parseInt(level.textContent)
currentHealth = parseInt(health.textContent)

function updateStats(action) {
  let currentLevel = parseInt(level.textContent);
  let currentHealth = parseInt(health.textContent);

  if (action === "levelUp") {
    currentLevel++;
    level.textContent = currentLevel;
  }
  else if (action === "attack") {
    currentHealth -= 20;
    health.textContent = currentHealth;

    if (currentHealth <= 0) {
      alert("Character Died.");
    }
  }
}

document
    .querySelector('#attack')
    .addEventListener("click", () => updateStats("attack"))
;
document
    .querySelector('#levelUp')
    .addEventListener("click", () => updateStats("levelUp"))
;