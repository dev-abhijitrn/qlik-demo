import App from './App';

let app = new App();


document.addEventListener('keydown', (event) => {
    event.preventDefault();
    let tilesMoved = false;

    if (event.which === 37) {
        tilesMoved = app.moveTilesLeft();
    } else if (event.which === 38) {
        tilesMoved = app.moveTilesUp();
    } else if (event.which === 39) {
        tilesMoved = app.moveTilesRight();
    } else if (event.which === 40) {
        tilesMoved = app.moveTilesDown();
    } else {
        return;
    }

    app.updateGrid(tilesMoved);
});


const game = document.querySelector('.game');

let touchStartX = null,
    touchStartY = null,
    touchEndX = null,
    touchEndY = null;


game.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

game.addEventListener("touchmove", function (event) {
    event.preventDefault();
});

game.addEventListener("touchend", function (event) {

    let tilesMoved = false;

    touchEndX = event.changedTouches[0].clientX;
    touchEndY = event.changedTouches[0].clientY;

    let distanceX = touchEndX - touchStartX;
    let distanceY = touchEndY - touchStartY;

    if (Math.max(Math.abs(distanceX), Math.abs(distanceY)) > 10) {

        tilesMoved = Math.abs(distanceX) > Math.abs(distanceY) ?
            (distanceX > 0 ? app.moveTilesRight() : app.moveTilesLeft())
            : (distanceY > 0 ? app.moveTilesDown() : app.moveTilesUp());

        app.updateGrid(tilesMoved);
    }
});


document.querySelector('.game-actions__new-game-btn')
    .addEventListener('click', () => {
        app = new App();
    })
