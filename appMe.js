const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

let p1Score = document.querySelector('#p1Score');
let p2Score = document.querySelector('#p2Score');

const resetButton = document.querySelector('#reset');

let targetScoreSelect = document.querySelector('#target-score-select')
let isGameOver = false;


function updateScores(player, opponent) {
  if (!isGameOver) {
    player.textContent++;
  }
  if (player.textContent === targetScoreSelect.value) {
    isGameOver = true;
    player.classList.add('has-text-success')
    opponent.classList.add('has-text-danger')
    p1Button.disabled = true;
    p2Button.disabled = true;

    // player.style.color = 'green';
    // opponent.style.color = 'red';
  }
}

p1Button.addEventListener('click', function () {
  updateScores(p1Score, p2Score)
})
p2Button.addEventListener('click', function () {
  updateScores(p2Score, p1Score)
})

function reset() {
  isGameOver = false;
  p1Score.textContent = '0';
  p1Score.classList.remove('has-text-success', 'has-text-danger')
  p2Score.textContent = '0';
  p2Score.classList.remove('has-text-success', 'has-text-danger')
  p1Button.disabled = false;
  p2Button.disabled = false;
}

resetButton.addEventListener('click', reset)

targetScoreSelect.addEventListener('change', reset)