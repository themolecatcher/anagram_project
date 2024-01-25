const generalWords = ["tablecloth", "angel", "meat", "armpit", 
"attic", "aside", "airmen", "adverb", "aspired", "arms", "articles",
"backward", "arising", "cocaine", "charming", "chetniks", "pressure", 
"dealer", "devoted", "enlisted", "farming", "gelatin", "hitman", "kitchen",
"layers", "manures", "marital", "markers", "mating", "oriental", "outlook",
"pointers", "pets", "pier", "printer", "prose", "race", "react", "reform",
"rescue", "reserved", "review", "salesmen", "sacred", "rustic", "sample",
"seaside", "seaweed", "save", "scared", "seals", "senator", "nectar", "shot",
"silence", "straw", "tagline", "tampons", "teachers", "teaching", "thicken", "terrain",
"tinsel", "treason", "tough", "united", "useless", "untie", "urges", "vetenerian",
"vine", "vetoed", "vast", "viewers", "vowels", "weather", "what", "waist", "wart", "wasps",
"wipes", "worried", "yard", "zone", "zen"];

const generateButton = document.getElementById('generate-button');
const checkButton = document.getElementById('check-button');
const passButton = document.getElementById('pass-button')
const anagramWord = document.getElementById('anagram');
const wordLength = document.getElementById('word-length')

let inputField = document.getElementById('input-field')
let originalWord = getRandomWord(generalWords)

function getRandomWord(words) {
    const randomWord = Math.floor(Math.random() * words.length)
    return words[randomWord]
}

function shuffleWord(word) {
  let shuffledWord = word;

  while (shuffledWord === word) {
    const splitWord = word.split('');
    const shuffledArray = splitWord.sort(() => Math.random() - 0.5);
    shuffledWord = shuffledArray.join('')
}
  return shuffledWord;
}

function displayShuffledWord() {
  const shuffledWord = shuffleWord(originalWord);
  anagramWord.innerText = shuffledWord.toUpperCase();
  wordLength.innerText = `${originalWord.length} letters long`;
}

function checkGuess() {
  const guess = inputField.value.toLowerCase()
      if (guess === originalWord.toLowerCase()) {
          alert('Congrats!');
          inputField.value = '';
          originalWord = getRandomWord(generalWords)
          displayShuffledWord();        
  }   else {
        alert ('You guessed wrong, try again!')
        inputField.value = '';
  }
}

generateButton.addEventListener('click', () => { 
  displayShuffledWord();
}, {once : true});

checkButton.addEventListener('click', checkGuess)

passButton.addEventListener('click', () => {
    inputField.value = '';
    originalWord = getRandomWord(generalWords)
    displayShuffledWord();
})

