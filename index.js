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

const button = document.getElementById('button');
const anagramWord = document.getElementById('anagram');
const checkButton = document.getElementById('check-button');
let inputField = document.getElementById('input-field')
let originalWord = ''


function getRandomWord(words) {
    const randomWord = Math.floor(Math.random() * words.length)
    return words[randomWord]
}

function shuffleWord(word) {
  const splitWord = word.split('');
  const shuffledArray = splitWord.sort(() => Math.random() - 0.5);
  return shuffledArray.join('');
}

function displayShuffledWord() {
  originalWord = getRandomWord(generalWords);
  const shuffledWord = shuffleWord(getRandomWord(generalWords));
  anagramWord.innerText = shuffledWord;
}

button.addEventListener('click', displayShuffledWord);

checkButton.addEventListener('click', () => {
    const guess = inputField.value.toLowerCase()
    if (guess === originalWord.toLowerCase()) {
            alert('Congrats!')
    } else {
        alert ('You guessed wrong, try again!')
    }
})

inputField.addEventListener('input', checkGuess);



