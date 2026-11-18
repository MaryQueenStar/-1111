const mario = document.getElementById('mario');
const obstacle = document.getElementById('obstacle');
const scoreElement = document.getElementById('score');
const gameOverElement = document.getElementById('game-over');

let score = 0;
let isGameOver = false;

// Функция прыжка
function jump() {
    if (isGameOver) return; // Если игра окончена, не прыгаем
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        // Убираем класс прыжка через 500мс (время анимации), чтобы можно было прыгать снова
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

// Слушатель нажатий клавиш
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'ArrowUp') {
        jump();
    }
});

// Логика игры (проверка столкновений и счет)
setInterval(() => {
    if (isGameOver) return;

    // Получаем координаты Марио и препятствия
    const marioBottom = parseInt(window.getComputedStyle(mario).getPropertyValue('bottom'));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

    // Проверка на столкновение (если Марио низко и препятствие близко)
    if (obstacleLeft > 50 && obstacleLeft < 90 && marioBottom < 100) {
        isGameOver = true;
        gameOverElement.style.display = 'block';
        obstacle.style.animationPlayState = 'paused'; // Останавливаем препятствие
    }

    // Подсчет очков
    if (obstacleLeft < -30) { // Если препятствие ушло за экран (прошло насквозь)
        // Сбрасываем позицию (имитация бесконечного уровня)
        // Но так как анимация CSS бесконечная, нам нужно просто считать очки
    }
}, 10);

// Простой счетчик очков (увеличивается каждые 100мс)
setInterval(() => {
    if (!isGameOver) {
        score++;
        scoreElement.textContent = 'Счет: ' + score;
    }
}, 500);
