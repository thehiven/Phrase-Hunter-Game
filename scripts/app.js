function resetDisplay(overlay) {
  overlay.style.display = 'none';
}

function markButton(button, game, phrase) {
  button.disabled = true;
  game.handleInteraction(button);
}

document.addEventListener('DOMContentLoaded', () => {
  const startGameButton = document.getElementById('btn__reset');
  const mainContainer = document.querySelector('div.main-container');
  const overlay = document.getElementById('overlay');
  const keyboard = document.getElementById('qwerty');
  let game;

  startGameButton.addEventListener('click', () => {
    resetDisplay(overlay, mainContainer);
    game = new Game();
    game.startGame();
  });

  keyboard.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') markButton(e.target, game);
  });

  document.addEventListener('keypress', e => {
    const keys = keyboard.querySelectorAll('button');
    keys.forEach(key => {
      if (key.textContent.toUpperCase() === e.code[e.code.length - 1]) {
        key.click();
      }
    });
  });
});