class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
    this.ul = document.getElementById('phrase').querySelector('ul');
  }

  // creates list item for each letter in phrase and appends them to phrase list
  addPhraseToDisplay() {
    const lettersArray = [...this.phrase]; // make array from string
    // for each letter in array, create new list item and append it to list
    lettersArray.forEach(letter => {
      const li = document.createElement('li');
      // if there's a white space instead of letter make className of that item 'space'
      if (letter === ' ')
        li.className = 'space'; //
      else
        li.className = 'hide letter ' + letter;

      li.textContent = letter;
      this.ul.append(li);
    });
  }

  // checks if user guessed a letter
  checkLetter(letter) {
    const lis = this.ul.children; // get all letters from phrase list
    let matched = false; // match result

    // check all letters and reveal guessed letters
    for (let i = 0; i < lis.length; i++) {
      if (lis[i].textContent.toLowerCase() === letter.toLowerCase()) {
        this.showMatchedLatter(lis[i]);
        matched = true; // if at least one letter was mathed return true
      }
    }

    return matched;
  }

  // removes 'hide' class from provided list item
  showMatchedLatter(li) {
    li.classList.remove('hide');
  }

  // removes all list items from phrase list
  removePhrase() {
    while (this.ul.children.length > 0) {
      this.ul.removeChild(this.ul.firstChild);
    }
  }
}