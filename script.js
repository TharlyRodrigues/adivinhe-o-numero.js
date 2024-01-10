let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is input
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number!';

    // when player wins
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Incrementando o high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (score > 1) {
    document.querySelector('.message').textContent =
      guess > secretnumber ? 'Too High 📈' : 'Too Low 📉';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '🎆You lost the game!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#ff0000';
  }
});

//   // when guess is too high or low
// } else if (guess > secretnumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Hight 📈';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '🎆You lost the game!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#ff0000';
//   }
// } else if (guess < secretnumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too low 📉';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '🎆You lost the game!';
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#ff0000';
//   }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
