class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
    this.ul = document.getElementById('phrase').querySelector('ul');
  }

  addPhraseToDisplay() {
    const lettersArray = [...this.phrase];
    lettersArray.forEach(letter => {
      const li = document.createElement('li');
      if (letter === ' ')
        li.className = 'space';
      else
        li.className = 'hide letter ' + letter;

      li.textContent = letter;
      this.ul.append(li);
    });
  }

  checkLetter(letter) {
    const lis = this.ul.children;
    let matched = false;

    for (let i = 0; i < lis.length; i++) {
      if (lis[i].textContent.toLowerCase() === letter.toLowerCase()) {
        this.showMatchedLatter(lis[i]);
        matched = true;
      }
    }

    return matched;
  }

  showMatchedLatter(li) {
    li.classList.remove('hide');
  }

  removePhrase() {
    while (this.ul.children.length > 0) {
      this.ul.removeChild(this.ul.firstChild);
    }
  }
}