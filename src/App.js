import Grid from './Grid';

import './styles/main.scss';

const INITIAL_TILE_COUNT = 2;
const GRID_SIZE = 4;
const FINAL_GAME_SCORE = 2048;

export default class App {
    constructor() {

        this.grid = new Grid(GRID_SIZE);
        this.tileValues = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        this.gameOver = false;
        this.gameWon = false;
        this.setUp();
    }

    setUp() {
        for (let index = 0; index < INITIAL_TILE_COUNT; index++) {
            this.addNewTile();
        }
        this.grid.renderGrid(this.tileValues);
        this.grid.resetGameStatus();
    }

    addNewTile() {
        const emptyTiles = this.getEmptyTiles();

        if (emptyTiles.length) {
            const [row, col] = emptyTiles[[Math.floor(Math.random() * emptyTiles.length)]];
            this.tileValues[row][col] = Math.random() < 0.8 ? 2 : 4;
            return [row, col];
        }
        return [];
    }

    getEmptyTiles() {

        const emptyTiles = [];
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                if (this.tileValues[row][col] === 0) {
                    emptyTiles.push([row, col]);
                }
            }
        }
        return emptyTiles;
    }

    moveTilesRight() {

        let tilesMoved = false;

        for (let row = 0; row < GRID_SIZE; row++) {

            let tileRow = this.tileValues[row];
            let farthestTileWithZeroIndex = -1;
            let alreadyCalucatedTileIndex = GRID_SIZE;

            for (let col = GRID_SIZE - 1; col >= 0; col--) {

                if (tileRow[col] === 0) {
                    farthestTileWithZeroIndex = col > farthestTileWithZeroIndex ?
                        col :
                        farthestTileWithZeroIndex;
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

                        if (tileRow[nextTileIndex] === FINAL_GAME_SCORE) {
                            this.gameWon = true;
                        }

                        tileRow[col] = 0;
                        farthestTileWithZeroIndex = col > farthestTileWithZeroIndex ?
                            col :
                            farthestTileWithZeroIndex;
                        alreadyCalucatedTileIndex = nextTileIndex;
                        tilesMoved = true;
                    }

                    break;
                }

                if (tileRow[col] !== 0 && farthestTileWithZeroIndex > 0) {
                    tileRow[farthestTileWithZeroIndex] = tileRow[col];
                    tileRow[col] = 0;
                    farthestTileWithZeroIndex = farthestTileWithZeroIndex - 1;
                    tilesMoved = true;
                }
            }

        }
        return tilesMoved;
    }

    moveTilesLeft() {
        let tilesMoved = false;

        for (let row = 0; row < GRID_SIZE; row++) {

            let tileRow = this.tileValues[row];
            let farthestTileWithZeroIndex = GRID_SIZE;
            let alreadyCalucatedTileIndex = -1;

            for (let col = 0; col <= GRID_SIZE - 1; col++) {

                if (tileRow[col] === 0) {
                    farthestTileWithZeroIndex = col < farthestTileWithZeroIndex ?
                        col
                        :
                        farthestTileWithZeroIndex;
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

                        if (tileRow[nextTileIndex] === FINAL_GAME_SCORE) {
                            this.gameWon = true;
                        }

                        tileRow[col] = 0;
                        farthestTileWithZeroIndex = col < farthestTileWithZeroIndex ?
                            col
                            :
                            farthestTileWithZeroIndex;
                        alreadyCalucatedTileIndex = nextTileIndex;
                        tilesMoved = true;
                    }

                    break;
                }

                if (tileRow[col] !== 0 && farthestTileWithZeroIndex < GRID_SIZE) {
                    tileRow[farthestTileWithZeroIndex] = tileRow[col];
                    tileRow[col] = 0;
                    farthestTileWithZeroIndex = farthestTileWithZeroIndex + 1;
                    tilesMoved = true;
                }
            }

        }
        return tilesMoved;
    }

    moveTilesUp() {
        let tilesMoved = false;

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

                        if (this.tileValues[nextTileIndex][col] === FINAL_GAME_SCORE) {
                            this.gameWon = true;
                        }

                        this.tileValues[row][col] = 0;
                        farthestTileWithZeroIndex = row < farthestTileWithZeroIndex ?
                            row
                            :
                            farthestTileWithZeroIndex
                            ;
                        alreadyCalucatedTileIndex = nextTileIndex;
                        tilesMoved = true;
                    }

                    break;
                }

                if (this.tileValues[row][col] !== 0 && farthestTileWithZeroIndex < GRID_SIZE) {
                    this.tileValues[farthestTileWithZeroIndex][col] = this.tileValues[row][col];
                    this.tileValues[row][col] = 0;
                    farthestTileWithZeroIndex = farthestTileWithZeroIndex + 1;
                    tilesMoved = true;
                }
            }

        }

        return tilesMoved;
    }

    moveTilesDown() {
        let tilesMoved = false;

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

                        if (this.tileValues[nextTileIndex][col] === FINAL_GAME_SCORE) {
                            this.gameWon = true;
                        }

                        this.tileValues[row][col] = 0;
                        farthestTileWithZeroIndex = row > farthestTileWithZeroIndex ? row : farthestTileWithZeroIndex;
                        alreadyCalucatedTileIndex = nextTileIndex;
                        tilesMoved = true;
                    }

                    break;
                }

                if (this.tileValues[row][col] !== 0 && farthestTileWithZeroIndex > 0) {
                    this.tileValues[farthestTileWithZeroIndex][col] = this.tileValues[row][col];
                    this.tileValues[row][col] = 0;
                    farthestTileWithZeroIndex = farthestTileWithZeroIndex - 1;
                    tilesMoved = true;
                }
            }

        }

        return tilesMoved;
    }

    checkIfGameIsOver() {
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                if (
                    this.tileValues[row][col] === this.tileValues[row][col + 1]
                    ||
                    this.tileValues[row][col] === this.tileValues[row][col - 1]
                    ||
                    (
                        this.tileValues[row + 1] &&
                        this.tileValues[row][col] === this.tileValues[row + 1][col]
                    )
                    ||
                    (
                        this.tileValues[row - 1] &&
                        this.tileValues[row][col] === this.tileValues[row - 1][col]
                    )
                ) {
                    return false;
                }
            }
        }

        return true;
    }

    updateGrid(tilesMoved) {

        const anyEmptyTileExist = this.getEmptyTiles().length !== 0;

        if (tilesMoved) {
            this.grid.renderGrid(this.tileValues);
            if (anyEmptyTileExist) {
                const [row, col] = this.addNewTile();
                this.grid.renderTile(row, col, this.tileValues[row][col]);
            }
        }

        if (this.gameWon) {
            this.grid.displayGameStatus(true);
        }

        const allTilesOccupied = this.getEmptyTiles().length === 0;

        if (allTilesOccupied) {
            this.gameOver = this.checkIfGameIsOver();
            if (this.gameOver)
                this.grid.displayGameStatus(false);
        }


    }

}