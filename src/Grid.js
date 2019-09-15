export default class Grid {
    constructor(size) {
        this.size = size;
    }

    renderGrid(tileValues) {

        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const cell = document.querySelector(`.grid__cell--${row}-${col}`);
                const previousValue = cell.textContent;
                const currentValue = tileValues[row][col];
                cell.classList.remove('grid__cell--modified');

                if (currentValue !== 0 && previousValue !== currentValue) {
                    cell.textContent = currentValue;
                    cell.classList.remove(`grid__cell--${previousValue}`);
                    cell.classList.add(`grid__cell--${currentValue}`, 'grid__cell--modified');
                } else if (currentValue === 0) {
                    cell.classList.remove(`grid__cell--${previousValue}`);
                    cell.textContent = "";
                }
            }
        }

    }

    displayGameStatus(gameWon) {
        const statusContainer = document.querySelector(`.game__status`);
        statusContainer.textContent = gameWon ? 'You Won!' : 'Game Over!';
        statusContainer.style.opacity = 1;
    }

    resetGameStatus() {
        const statusContainer = document.querySelector(`.game__status`);
        statusContainer.textContent = '';
        statusContainer.style.opacity = 0;
    }

}
