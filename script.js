body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

.game-container {
    width: 800px;
    height: 400px;
    background: linear-gradient(to bottom, #87CEEB 80%, #8B4513 20%);
    position: relative;
    overflow: hidden;
    border: 2px solid #333;
    border-radius: 8px;
}

#mario {
    width: 40px;
    height: 40px;
    background-color: #E52521;
    position: absolute;
    bottom: 80px;
    left: 50px;
    border-radius: 5px;
}

/* Класс для анимации прыжка */
.jump {
    animation: jump-animation 0.5s linear;
}

@keyframes jump-animation {
    0% { bottom: 80px; }
    50% { bottom: 220px; }
    100% { bottom: 80px; }
}

/* Препятствие теперь двигается через JS, поэтому анимации CSS тут нет */
#obstacle {
    width: 30px;
    height: 40px;
    background-color: #4CAF50;
    position: absolute;
    bottom: 80px;
    left: 800px; /* Стартовая позиция за экраном */
}

#score {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    z-index: 10;
}

/* Окно проигрыша */
#game-over {
    display: none; /* Изначально скрыто */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    font-size: 24px;
    z-index: 20;
    width: 300px;
}

/* Стили для кнопки */
#restart-btn {
    margin-top: 15px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #E52521;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;
}

#restart-btn:hover {
    background-color: #b81b19;
}
