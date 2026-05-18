const words = [
  "flower",
  "garden",
  "nature",
  "sunshine",
  "rainbow",
  "butterfly",
  "mountain",
  "beautiful",
  "adventure",
  "happiness",
];

let currentWord = "",
  tries = 0,
  maxTries = 6,
  mistakes = 0,
  guessedLetters = [],
  guessedWords = [];

const generateRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  const selectedWord = words[randomIndex];

  // scramble the letters of the selected word
  const scrambledWord = selectedWord
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  const container = document.querySelector("#random-container");
  container.textContent = scrambledWord;
  generateInputBoxes(selectedWord.length);
  currentWord = selectedWord;
};

const generateInputBoxes = (length) => {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";

  for (let i = 0; i < length; i++) {
    const box = document.createElement("input");
    box.setAttribute("type", "text");
    box.setAttribute("maxlength", "1");
    box.classList.add("box");
    box.dataset.index = i;
    box.setAttribute("autocomplete", "off");
    box.setAttribute("spellcheck", "false");

    // box.addEventListener("keydown", onKeyDown);
    // box.addEventListener("input", onInput);
    // box.addEventListener("focus", onFocus);

    boxes.appendChild(box);
  }
};

generateRandomWord();
