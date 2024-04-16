document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game-container");
    const gameMenu = document.querySelector(".game-menu");
  
    function loadGame(gameUrl) {
      gameContainer.innerHTML = ""; // Clear previous game content
      fetch(gameUrl)
        .then(response => response.text())
        .then(data => {
          const tempContainer = document.createElement("div");
          tempContainer.innerHTML = data;
          const gameContent = tempContainer.querySelector(".game-content");
  
          if (gameContent) {
            gameContainer.appendChild(gameContent);
            const script = gameContent.querySelector("script");
            if (script) {
              eval(script.innerText);
            }
          } else {
            console.error("Game content not found in loaded HTML.");
          }
        })
        .catch(error => console.error("Error loading game:", error));
    }
  
    document.getElementById("game1-btn").addEventListener("click", () => {
      loadGame("./Games/game1.html");
    });
  
    // Add similar event listeners for other games (game2 and game3)
  });
  