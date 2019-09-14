import Grid from './Grid';

import './styles/main.scss';

const INITIAL_CELL_COUNT = 2;
const GRID_SIZE = 4;

export default class App {
    constructor() {

        this.grid = new Grid(GRID_SIZE);
        this.tileValues = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        this.score = 0;
        this.setUp();
        this.registerEvents();
    }

    setUp() {
        for (let index = 0; index < INITIAL_CELL_COUNT; index++) {
            this.addNewTile();
        }
        console.table(this.tileValues);
        this.grid.renderGrid(this.tileValues);
    }

    addNewTile() {
        const emptyCells = this.getEmptyCells();

        if (emptyCells.length) {
            const [row, col] = emptyCells[[Math.floor(Math.random() * emptyCells.length)]];
            this.tileValues[row][col] = Math.random() < 0.8 ? 2 : 4;
        }
    }

    getEmptyCells() {

        const emptyCells = [];
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                if (this.tileValues[row][col] === 0) {
                    emptyCells.push([row, col])
                }
            }
        }
        return emptyCells;
    }

    moveTilesRight() {

        let tilesModified = false;

        for (let row = 0; row < GRID_SIZE; row++) {

            let tileRow = this.tileValues[row];
            let farthestTileWithZeroIndex = -1;
            let alreadyCalucatedTileIndex = GRID_SIZE;

            for (let col = GRID_SIZE - 1; col >= 0; col--) {

                if (tileRow[col] === 0) {
                    farthestTileWithZeroIndex = col > farthestTileWithZeroIndex ? col : farthestTileWithZeroIndex;
                    continue;
                }

                let nextTileIndex = col + 1;

                while (nextTileIndex < alreadyCalucatedTileIndex) {

                    if (tileRow[nextTileIndex] === 0) {
                        nextTileIndex++;
                        continue;
                    }

                    if (tileRow[col] === tileRow[nextTileIndex]) {
                        tileRow[nextTileIndex] += tileRow[col];
                        tileRow[col] = 0;
                        farthestTileWithZeroIndex = col > farthestTileWithZeroIndex ? col : farthestTileWithZeroIndex;
                        alreadyCalucatedTileIndex = nextTileIndex;
                        tilesModified = true;
                    }

                    break;
                }

                if (tileRow[col] !== 0 && farthestTileWithZeroIndex > 0) {
                    tileRow[farthestTileWithZeroIndex] = tileRow[col];
                    tileRow[col] = 0;
                    farthestTileWithZeroIndex = farthestTileWithZeroIndex - 1;
                    tilesModified = true;
                }
            }

        }
        return tilesModified;
    }


    moveTilesLeft() {
        let tilesModified = false;

        for (let row = 0; row < GRID_SIZE; row++) {

            let tileRow = this.tileValues[row];
            let farthestTileWithZeroIndex = GRID_SIZE;
            let alreadyCalucatedTileIndex = -1;

            for (let col = 0; col <= GRID_SIZE - 1; col++) {

                if (tileRow[col] === 0) {
                    farthestTileWithZeroIndex = col < farthestTileWithZeroIndex ? col : farthestTileWithZeroIndex;
                    continue;
                }

                let nextTileIndex = col - 1;

                while (nextTileIndex > alreadyCalucatedTileIndex) {

                    if (tileRow[nextTileIndex] === 0) {
                        nextTileIndex--;
                        continue;
                    }

                    if (tileRow[col] === tileRow[nextTileIndex]) {
                        tileRow[nextTileIndex] += tileRow[col];
                        tileRow[col] = 0;
                        farthestTileWithZeroIndex = col < farthestTileWithZeroIndex ? col : farthestTileWithZeroIndex;
                        alreadyCalucatedTileIndex = nextTileIndex;
                        tilesModified = true;
                    }

                    break;
                }

                if (tileRow[col] !== 0 && farthestTileWithZeroIndex < GRID_SIZE) {
                    tileRow[farthestTileWithZeroIndex] = tileRow[col];
                    tileRow[col] = 0;
                    farthestTileWithZeroIndex = farthestTileWithZeroIndex + 1;
                    tilesModified = true;
                }
            }

        }
        return tilesModified;
    }

    moveTilesUp() {
        let tilesModified = false;

        for (let col = 0; col < GRID_SIZE; col++) {

            let farthestTileWithZeroIndex = GRID_SIZE;
            let alreadyCalucatedTileIndex = -1;

            for (let row = 0; row <= GRID_SIZE - 1; row++) {

                if (this.tileValues[row][col] === 0) {
                    farthestTileWithZeroIndex = row < farthestTileWithZeroIndex ? row : farthestTileWithZeroIndex;
                    continue;
                }

                let nextTileIndex = row - 1;

                while (nextTileIndex > alreadyCalucatedTileIndex) {

                    if (this.tileValues[nextTileIndex][col] === 0) {
                        nextTileIndex--;
                        continue;
                    }

                    if (this.tileValues[row][col] === this.tileValues[nextTileIndex][col]) {
                        this.tileValues[nextTileIndex][col] += this.tileValues[row][col];
                        this.tileValues[row][col] = 0;
                        farthestTileWithZeroIndex = row < farthestTileWithZeroIndex ? row : farthestTileWithZeroIndex;
                        alreadyCalucatedTileIndex = nextTileIndex;
                        tilesModified = true;
                    }

                    break;
                }

                if (this.tileValues[row][col] !== 0 && farthestTileWithZeroIndex < GRID_SIZE) {
                    this.tileValues[farthestTileWithZeroIndex][col] = this.tileValues[row][col];
                    this.tileValues[row][col] = 0;
                    farthestTileWithZeroIndex = farthestTileWithZeroIndex + 1;
                    tilesModified = true;
                }
            }

        }

        return tilesModified;
    }

    moveTilesDown() {
        let tilesModified = false;

        for (let col = 0; col < GRID_SIZE; col++) {

            let farthestTileWithZeroIndex = -1;
            let alreadyCalucatedTileIndex = GRID_SIZE;

            for (let row = GRID_SIZE - 1; row >= 0; row--) {

                if (this.tileValues[row][col] === 0) {
                    farthestTileWithZeroIndex = row > farthestTileWithZeroIndex ? row : farthestTileWithZeroIndex;
                    continue;
                }

                let nextTileIndex = row + 1;

                while (nextTileIndex < alreadyCalucatedTileIndex) {

                    if (this.tileValues[nextTileIndex][col] === 0) {
                        nextTileIndex++;
                        continue;
                    }

                    if (this.tileValues[row][col] === this.tileValues[nextTileIndex][col]) {
                        this.tileValues[nextTileIndex][col] += this.tileValues[row][col];
                        this.tileValues[row][col] = 0;
                        farthestTileWithZeroIndex = row > farthestTileWithZeroIndex ? row : farthestTileWithZeroIndex;
                        alreadyCalucatedTileIndex = nextTileIndex;
                        tilesModified = true;
                    }

                    break;
                }

                if (this.tileValues[row][col] !== 0 && farthestTileWithZeroIndex > 0) {
                    this.tileValues[farthestTileWithZeroIndex][col] = this.tileValues[row][col];
                    this.tileValues[row][col] = 0;
                    farthestTileWithZeroIndex = farthestTileWithZeroIndex - 1;
                    tilesModified = true;
                }
            }

        }

        return tilesModified;
    }

    registerEvents() {

        document.addEventListener("keydown", (event) => {

            event.preventDefault();
            if (event.which === 37) {
                const tilesModified = this.moveTilesLeft();
                if (tilesModified) {
                    this.addNewTile();
                    this.grid.renderGrid(this.tileValues)
                }
            } else if (event.which === 38) {
                const tilesModified = this.moveTilesUp();
                if (tilesModified) {
                    this.addNewTile();
                    this.grid.renderGrid(this.tileValues)
                }
            } else if (event.which === 39) {
                const tilesModified = this.moveTilesRight();
                if (tilesModified) {
                    this.addNewTile();
                    this.grid.renderGrid(this.tileValues)
                }
            } else if (event.which === 40) {
                const tilesModified = this.moveTilesDown();
                if (tilesModified) {
                    this.addNewTile();
                    this.grid.renderGrid(this.tileValues)
                }
            } else {
                return;
            }

        });
    }

}