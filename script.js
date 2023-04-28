const chapters = [
    {
      title: 'Chapter 1',
      verses: [
        'Verse 1: And it came to pass that Collin did create a website for his friends.',
        'Verse 2: And the people did laugh exceedingly, yea, even so much that their laughter did fill the air.',
      ],
    },
    {
      title: 'Chapter 2',
      verses: [
        'Verse 1: Collin spake unto his friends, saying, "Lo, behold the wonders of humor and mirth."',
      ],
    },
  ];
  
  function displayChapters() {
    const textContainer = document.getElementById('text');
    textContainer.innerHTML = '';
  
    chapters.forEach((chapter) => {
      const chapterTitle = document.createElement('h2');
      chapterTitle.textContent = chapter.title;
      textContainer.appendChild(chapterTitle);
  
      chapter.verses.forEach((verse) => {
        const verseText = document.createElement('p');
        verseText.textContent = verse;
        textContainer.appendChild(verseText);
      });
    });
  }
  
  displayChapters();
  