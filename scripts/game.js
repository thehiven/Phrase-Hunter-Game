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
    this.isGameOver = false;
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(button) {
    // check if user guessed a letter
    // if yes - check for win
    // if no - remove one life
    if (this.phrase.checkLetter(button.textContent))
        this.checkForWin();
      else
        this.removeLife();
  }

  checkForWin() {
    let result = true; // win result

    // find all letters in the phrase and check if anyone of them has hide class
    document.getElementById('phrase').querySelectorAll('li').forEach(li => {
      // if li has hide class, win result is false
      if (li.classList.contains('hide')) {
        result = false;
      }
    });

    // if user won display win message
    if (result) {
      this.gameOver(true);
    }
  }

  removeLife() {
    this.missed++; // increase tracker
    // if player missed more than 5 time game is over
    // else remove one life from the board
    if (this.missed > 4)
      this.gameOver(false);
    else
      this.hearts.lastElementChild.remove();
  }

  gameOver(playerWon) {
    this.isGameOver = true;
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('game-over-message');

    // if player won set win message
    // if player lost set lose message
    if (playerWon) {
      message.textContent = 'GG! You won!';
      overlay.className = 'win';
    } else {
      message.textContent = 'You lost! :(';
      overlay.className = 'lose';
    }

    // reset the game and display overlay
    this.resetGame();
    overlay.style.display = '';
  }

  // creates new phrase and stores it as this object property
  startGame() {
    this.phrase = new Phrase(this.getRandomPhrase());
    this.phrase.addPhraseToDisplay();
  }

  resetGame() {
    this.missed = 0;
    this.phrase.removePhrase();
    document.getElementById('btn__reset').textContent = 'Go again!'; // change restart button text
    // get all keys and enable them
    document.getElementById('qwerty').querySelectorAll('button').forEach(button => {
      button.disabled = false;
    });
    
    // clone and append 4 hearts to scoreboard
    while (this.hearts.children.length < 5) {
      const li = this.hearts.firstElementChild.cloneNode(true);
      this.hearts.append(li);
    }
  }
}