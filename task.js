const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const holes = document.getElementsByClassName('hole');

for (let currentHole of holes) {
    currentHole.onclick = () => {
        if (currentHole.classList.contains('hole_has-mole')) {
            dead.textContent = parseInt(dead.textContent) + 1
            if (parseInt(dead.textContent) === 10) {
                alert('Победа!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent = parseInt(lost.textContent) + 1
            if (parseInt(lost.textContent) === 5) {
                alert('Вы проиграли!');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    };
};