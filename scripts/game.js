class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      'Hello World',
      'Frightful Weather',
      'Delightful Fire',
      'Let It Snow',
      'Wonderful Time',
    ];
    this.hearts = document.getElementById('scoreboard').querySelector('ol');
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(button) {
    if (this.phrase.checkLetter(button.textContent))
        this.checkForWin();
      else
        this.removeLife();
  }

  checkForWin() {
    let result = true;

    document.getElementById('phrase').querySelectorAll('li').forEach(li => {
      if (li.classList.contains('hide')) {
        result = false;
      }
    });

    if (result) {
      this.gameOver(true);
    }
  }

  removeLife() {
    this.missed++; // increase tracker
    // if player missed more than 5 time game is over
    if (this.missed > 4)
      this.gameOver(false);
    else
      this.hearts.lastElementChild.remove();
  }

  gameOver(playerWon) {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('game-over-message');
    if (playerWon) {
      message.textContent = 'GG! You won!';
      overlay.className = 'win';
    } else {
      message.textContent = 'You lost! :(';
      overlay.className = 'lose';
    }

    this.resetGame();
    overlay.style.display = '';
  }

  startGame() {
    this.phrase = new Phrase(this.getRandomPhrase());
    this.phrase.addPhraseToDisplay();
  }

  resetGame() {
    this.missed = 0;
    this.phrase.removePhrase();
    document.getElementById('btn__reset').textContent = 'Go again!';
    document.getElementById('qwerty').querySelectorAll('button').forEach(button => {
      button.disabled = false;
    });
    
    while (this.hearts.children.length < 5) {
      const li = this.hearts.firstElementChild.cloneNode(true);
      this.hearts.append(li);
    }
  }
}