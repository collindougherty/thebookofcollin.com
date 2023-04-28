const chapters = [
  {
    title: 'Chapter 1: The Beginning',
    verses: [
      '"Those who hesitate, perish", the sage once said.',
      'Now it came to pass that many were awed by the sage\'s pithy wisdom, and desired the sage make written record.',
      'Without hesitation, so the sage did.',
      '', // Separator for a new paragraph
      'Herein lies a record of the sage\'s wisdom.',
      'Much did the sage say, and many were his words, but these are the ones that were written down.',
    ],
  },

// chapter 2, the middle
   {
    title: 'Chapter 2: The Middle',
    verses: [
      'Now on one occasion the sage began to speak, saying:',
      '',
      '"Many are those who go to the gym, but few are those whose gym goes to them."',
      'And the people were perplexed, and they asked the sage, saying:',
      '"What does this mean?"',
      'And the sage answered, saying:',
      '"Those who go to the gym lack wisdom, for their gains are temporary.',
      'But those whose gym goes to them are wise, for their gains are permanent."',
    ],
  },

// chapter 3, the end
];

/* the middle, the end */

function displayChapters() {
  const textContainer = document.getElementById('text');
  textContainer.innerHTML = '';

  chapters.forEach((chapter) => {
    const chapterTitle = document.createElement('h2');
    chapterTitle.textContent = chapter.title;
    textContainer.appendChild(chapterTitle);

    let currentParagraph = document.createElement('p');
    let verseNumber = 1;

    chapter.verses.forEach((verse) => {
      if (verse === '') { // New paragraph
        textContainer.appendChild(currentParagraph);
        currentParagraph = document.createElement('p');
      } else {
        const verseSuperscript = document.createElement('sup');
        verseSuperscript.textContent = verseNumber;
        currentParagraph.appendChild(verseSuperscript);
        currentParagraph.insertAdjacentText('beforeend', ' ' + verse + ' ');

        verseNumber++;
      }
    });
    textContainer.appendChild(currentParagraph); // Append the last paragraph
  });
}

displayChapters();
