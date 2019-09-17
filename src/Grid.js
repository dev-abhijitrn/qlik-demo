export default class Grid {
    constructor(size) {
        this.size = size;
    }

    renderGrid(tileValues) {

        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                this.renderTile(row, col, tileValues[row][col]);
            }
        }
    }

    renderTile(row, col, value) {
        const cell = document.querySelector(`.grid__cell--${row}-${col}`);
        const previousValue = +cell.textContent;

        if (value !== 0 && value !== previousValue) {

            cell.innerHTML = '';

            const tile = document.createElement('div');
            tile.textContent = value;
            tile.classList.add(`tile--${value}`, 'tile--modified')
            cell.appendChild(tile);

        } else if (value === 0) {
            cell.innerHTML = '';
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
