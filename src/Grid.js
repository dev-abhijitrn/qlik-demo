export default class Grid {
    constructor(size) {
        this.cells = [];
        this.size = size;
    }

    renderGrid(tileValues) {

        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                const cell = document.querySelector(`.grid__cell--${row}-${col}`);
                if (tileValues[row][col] !== 0) {
                    cell.textContent = tileValues[row][col];
                    cell.classList.add(`grid__cell--${tileValues[row][col]}`);
                } else {
                    const previousValue = cell.textContent;
                    cell.textContent = "";
                    cell.classList.remove(`grid__cell--${previousValue}`)
                }
            }
        }
    }

}
