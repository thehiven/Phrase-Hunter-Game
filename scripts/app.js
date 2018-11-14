// hides start overlay
function resetDisplay(overlay) {
  overlay.style.display = 'none';
}

// disables pressed key and calls 'handleInteraction' on a provided game object
function markButton(button, game) {
  // don't do anything if the game hasn't been created or game is already over
  if (game && !game.isGameOver) {
    button.disabled = true;
    game.handleInteraction(button);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const startGameButton = document.getElementById('btn__reset');
  const mainContainer = document.querySelector('div.main-container');
  const overlay = document.getElementById('overlay');
  const keyboard = document.getElementById('qwerty');
  let game;

  startGameButton.addEventListener('click', () => {
    resetDisplay(overlay, mainContainer); // hide overlay
    game = new Game(); // create new game
    game.startGame();
  });

  keyboard.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') markButton(e.target, game); 
  });

  document.addEventListener('keypress', e => {
    const keys = keyboard.querySelectorAll('button'); // get all available keys
    keys.forEach(key => {
      // if key is available trigger click event on that button
      if (key.textContent.toUpperCase() === e.code[e.code.length - 1]) {
        key.click();
      }
    });
  });
});