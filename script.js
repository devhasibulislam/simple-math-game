let number1, number2, result, flag = true, scoreCount = 0, randomBox;

document.querySelector('.control-box').addEventListener('click', (event) => {
    if (flag == true) {
        event.target.innerText = 'Stop Game';
        flag = false;
        playGame();
    }
    else {
        document.querySelector('.question-box').innerText = 'Over!';
        document.getElementById('score').innerText = '00';
        event.target.innerText = 'Start Game';
        flag = true;
    }

});

function playGame() {
    number1 = Math.round((Math.random() * 9) + 1);
    number2 = Math.round((Math.random() * 9) + 1);
    result = number1 * number2;
    document.querySelector('.question-box').innerText = number1 + 'x' + number2;
    randomBox = Math.round((Math.random() * 4) + 1);
    for (let i = 1; i <= 4; i++) {
        document.getElementById('box-' + i).innerText = parseFloat(Math.round((Math.random() * 4) + 1)) * parseFloat(Math.round((Math.random() * 4) + 1));
        if (i == randomBox) {
            document.getElementById('box-' + i).innerText = result;
        }
    }
    for (const box of document.getElementsByClassName('box')) {
        box.addEventListener('click', (event) => {
            if (event.target.innerText == result) {
                ++scoreCount;
                document.getElementById('score').innerText = scoreCount;
                playGame();
            }
        });
    }
}