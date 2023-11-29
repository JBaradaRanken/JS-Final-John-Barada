let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  displayResult(userChoice, computerChoice);

  setTimeout(function () {
    clearGame();
  }, 5000);
}

function displayResult(userChoice, computerChoice) {
  const resultContainer = document.getElementById('result-container');
  const resultText = document.getElementById('result-text');
  const resultImage = document.getElementById('result-image');
  const userScoreElement = document.getElementById('user-score');
  const computerScoreElement = document.getElementById('computer-score');

  resultText.textContent = `User chose ${userChoice}, Computer chose ${computerChoice}`;

  if (userChoice === computerChoice) {
    resultText.textContent += ". It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultText.textContent += '. You win!';
    userScore++;
    userScoreElement.textContent = userScore;
  } else {
    resultText.textContent += '. Computer wins!';
    computerScore++;
    computerScoreElement.textContent = computerScore;
  }

  // Setting the result image
  resultImage.src = `images/${computerChoice}.jpg`;
  resultImage.alt = `Result Image for ${computerChoice}`;
  resultContainer.style.display = 'block';
}

function clearGame() {
  const resultContainer = document.getElementById('result-container');
  const resultText = document.getElementById('result-text');
  const resultImage = document.getElementById('result-image');

  // Clear after a game
  resultText.textContent = 'Choose an option to play.';
  resultImage.src = '';
  resultImage.alt = '';
  resultContainer.style.display = 'none';
}
