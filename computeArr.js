$_$wp(1);
const GRID_SIZE = ($_$w(1, 0), 4);
class App {
    constructor(tileValues) {
        $_$wf(1);
        $_$w(1, 1), this.tileValues = tileValues;
    }
    moveTilesRight() {
        $_$wf(1);
        let tilesModified = ($_$w(1, 2), false);
        for (let row = 0; $_$w(1, 3), row < GRID_SIZE; row++) {
            let tileRow = ($_$w(1, 4), this.tileValues[row]);
            let farthestTileWithZeroIndex = ($_$w(1, 5), -1);
            let alreadyCalucatedTileIndex = ($_$w(1, 6), GRID_SIZE);
            for (let col = GRID_SIZE - 1; $_$w(1, 7), col >= 0; col--) {
                if ($_$w(1, 8), tileRow[col] === 0) {
                    $_$w(1, 9), farthestTileWithZeroIndex = col > farthestTileWithZeroIndex ? ($_$w(1, 10), col) : ($_$w(1, 11), farthestTileWithZeroIndex);
                    {
                        $_$w(1, 12);
                        continue;
                    }
                }
                let nextTileIndex = ($_$w(1, 13), col + 1);
                while ($_$w(1, 14), nextTileIndex < alreadyCalucatedTileIndex) {
                    if ($_$w(1, 15), tileRow[nextTileIndex] === 0) {
                        $_$w(1, 16), nextTileIndex++;
                        {
                            $_$w(1, 17);
                            continue;
                        }
                    }
                    if ($_$w(1, 18), tileRow[col] === tileRow[nextTileIndex]) {
                        $_$w(1, 19), tileRow[nextTileIndex] += tileRow[col];
                        $_$w(1, 20), tileRow[col] = 0;
                        $_$w(1, 21), farthestTileWithZeroIndex = col > farthestTileWithZeroIndex ? ($_$w(1, 22), col) : ($_$w(1, 23), farthestTileWithZeroIndex);
                        $_$w(1, 24), alreadyCalucatedTileIndex = nextTileIndex;
                        $_$w(1, 25), tilesModified = true;
                    }
                    {
                        $_$w(1, 26);
                        break;
                    }
                }
                if ($_$w(1, 27), ($_$w(1, 28), tileRow[col] !== 0) && ($_$w(1, 29), farthestTileWithZeroIndex > 0)) {
                    $_$w(1, 30), tileRow[farthestTileWithZeroIndex] = tileRow[col];
                    $_$w(1, 31), tileRow[col] = 0;
                    $_$w(1, 32), farthestTileWithZeroIndex = farthestTileWithZeroIndex - 1;
                    $_$w(1, 33), tilesModified = true;
                }
            }
        }
        return $_$w(1, 34), tilesModified;
    }
    moveTilesLeft() {
        $_$wf(1);
        let tilesModified = ($_$w(1, 35), false);
        for (let row = 0; $_$w(1, 36), row < GRID_SIZE; row++) {
            let tileRow = ($_$w(1, 37), this.tileValues[row]);
            let farthestTileWithZeroIndex = ($_$w(1, 38), GRID_SIZE);
            let alreadyCalucatedTileIndex = ($_$w(1, 39), -1);
            for (let col = 0; $_$w(1, 40), col <= GRID_SIZE - 1; col++) {
                if ($_$w(1, 41), tileRow[col] === 0) {
                    $_$w(1, 42), farthestTileWithZeroIndex = col < farthestTileWithZeroIndex ? ($_$w(1, 43), col) : ($_$w(1, 44), farthestTileWithZeroIndex);
                    {
                        $_$w(1, 45);
                        continue;
                    }
                }
                let nextTileIndex = ($_$w(1, 46), col - 1);
                while ($_$w(1, 47), nextTileIndex > alreadyCalucatedTileIndex) {
                    if ($_$w(1, 48), tileRow[nextTileIndex] === 0) {
                        $_$w(1, 49), nextTileIndex--;
                        {
                            $_$w(1, 50);
                            continue;
                        }
                    }
                    if ($_$w(1, 51), tileRow[col] === tileRow[nextTileIndex]) {
                        $_$w(1, 52), tileRow[nextTileIndex] += tileRow[col];
                        $_$w(1, 53), tileRow[col] = 0;
                        $_$w(1, 54), farthestTileWithZeroIndex = col < farthestTileWithZeroIndex ? ($_$w(1, 55), col) : ($_$w(1, 56), farthestTileWithZeroIndex);
                        $_$w(1, 57), alreadyCalucatedTileIndex = nextTileIndex;
                        $_$w(1, 58), tilesModified = true;
                    }
                    {
                        $_$w(1, 59);
                        break;
                    }
                }
                if ($_$w(1, 60), ($_$w(1, 61), tileRow[col] !== 0) && ($_$w(1, 62), farthestTileWithZeroIndex < GRID_SIZE)) {
                    $_$w(1, 63), tileRow[farthestTileWithZeroIndex] = tileRow[col];
                    $_$w(1, 64), tileRow[col] = 0;
                    $_$w(1, 65), farthestTileWithZeroIndex = farthestTileWithZeroIndex + 1;
                    $_$w(1, 66), tilesModified = true;
                }
            }
        }
        return $_$w(1, 67), tilesModified;
    }
    moveTilesUp() {
        $_$wf(1);
        let tilesModified = ($_$w(1, 68), false);
        for (let col = 0; $_$w(1, 69), col < GRID_SIZE; col++) {
            let farthestTileWithZeroIndex = ($_$w(1, 70), GRID_SIZE);
            let alreadyCalucatedTileIndex = ($_$w(1, 71), -1);
            for (let row = 0; $_$w(1, 72), row <= GRID_SIZE - 1; row++) {
                if ($_$w(1, 73), this.tileValues[row][col] === 0) {
                    $_$w(1, 74), farthestTileWithZeroIndex = row < farthestTileWithZeroIndex ? ($_$w(1, 75), row) : ($_$w(1, 76), farthestTileWithZeroIndex);
                    {
                        $_$w(1, 77);
                        continue;
                    }
                }
                let nextTileIndex = ($_$w(1, 78), row - 1);
                while ($_$w(1, 79), nextTileIndex > alreadyCalucatedTileIndex) {
                    if ($_$w(1, 80), this.tileValues[nextTileIndex] === 0) {
                        $_$w(1, 81), nextTileIndex--;
                        {
                            $_$w(1, 82);
                            continue;
                        }
                    }
                    if ($_$w(1, 83), this.tileValues[row][col] === this.tileValues[nextTileIndex][col]) {
                        $_$w(1, 84), this.tileValues[nextTileIndex][col] += this.tileValues[row][col];
                        $_$w(1, 85), this.tileValues[row][col] = 0;
                        $_$w(1, 86), farthestTileWithZeroIndex = row < farthestTileWithZeroIndex ? ($_$w(1, 87), row) : ($_$w(1, 88), farthestTileWithZeroIndex);
                        $_$w(1, 89), alreadyCalucatedTileIndex = nextTileIndex;
                        $_$w(1, 90), tilesModified = true;
                    }
                    {
                        $_$w(1, 91);
                        break;
                    }
                }
                if ($_$w(1, 92), ($_$w(1, 93), this.tileValues[row][col] !== 0) && ($_$w(1, 94), farthestTileWithZeroIndex < GRID_SIZE)) {
                    $_$w(1, 95), this.tileValues[farthestTileWithZeroIndex][col] = this.tileValues[row][col];
                    $_$w(1, 96), this.tileValues[row][col] = 0;
                    $_$w(1, 97), farthestTileWithZeroIndex = farthestTileWithZeroIndex + 1;
                    $_$w(1, 98), tilesModified = true;
                }
            }
        }
        return $_$w(1, 99), tilesModified;
    }
    moveTilesDown() {
        $_$wf(1);
        let tilesModified = ($_$w(1, 100), false);
        for (let col = 0; $_$w(1, 101), col < GRID_SIZE; col++) {
            let farthestTileWithZeroIndex = ($_$w(1, 102), -1);
            let alreadyCalucatedTileIndex = ($_$w(1, 103), GRID_SIZE);
            for (let row = GRID_SIZE - 1; $_$w(1, 104), row >= 0; row--) {
                if ($_$w(1, 105), this.tileValues[row][col] === 0) {
                    $_$w(1, 106), farthestTileWithZeroIndex = row > farthestTileWithZeroIndex ? ($_$w(1, 107), row) : ($_$w(1, 108), farthestTileWithZeroIndex);
                    {
                        $_$w(1, 109);
                        continue;
                    }
                }
                let nextTileIndex = ($_$w(1, 110), row + 1);
                while ($_$w(1, 111), nextTileIndex < alreadyCalucatedTileIndex) {
                    if ($_$w(1, 112), this.tileValues[nextTileIndex][col] === 0) {
                        $_$w(1, 113), nextTileIndex++;
                        {
                            $_$w(1, 114);
                            continue;
                        }
                    }
                    if ($_$w(1, 115), this.tileValues[row][col] === this.tileValues[nextTileIndex][col]) {
                        $_$w(1, 116), this.tileValues[nextTileIndex][col] += this.tileValues[row][col];
                        $_$w(1, 117), this.tileValues[row][col] = 0;
                        $_$w(1, 118), farthestTileWithZeroIndex = row > farthestTileWithZeroIndex ? ($_$w(1, 119), row) : ($_$w(1, 120), farthestTileWithZeroIndex);
                        $_$w(1, 121), alreadyCalucatedTileIndex = nextTileIndex;
                        $_$w(1, 122), tilesModified = true;
                    }
                    {
                        $_$w(1, 123);
                        break;
                    }
                }
                if ($_$w(1, 124), ($_$w(1, 125), this.tileValues[row][col] !== 0) && ($_$w(1, 126), farthestTileWithZeroIndex > 0)) {
                    $_$w(1, 127), this.tileValues[farthestTileWithZeroIndex][col] = this.tileValues[row][col];
                    $_$w(1, 128), this.tileValues[row][col] = 0;
                    $_$w(1, 129), farthestTileWithZeroIndex = farthestTileWithZeroIndex - 1;
                    $_$w(1, 130), tilesModified = true;
                }
            }
        }
        return $_$w(1, 131), tilesModified;
    }
}
let app = $_$w(1, 132);
let arr = $_$w(1, 133);
$_$w(1, 134), $_$tracer.log('---------------------------Orginal--------------------------------------', '', 1, 134);
$_$w(1, 135), arr = [
    [
        4,
        0,
        2,
        2
    ],
    [
        2,
        0,
        2,
        2
    ],
    [
        2,
        2,
        2,
        2
    ],
    [
        0,
        0,
        2,
        2
    ]
];
$_$w(1, 136), console.table(arr);
$_$w(1, 137), app = new App(arr);
$_$w(1, 138), app.moveTilesDown();
$_$w(1, 139), console.table(app.tileValues);
$_$w(1, 140), arr = [
    [
        0,
        0,
        0,
        0
    ],
    [
        4,
        0,
        0,
        4
    ],
    [
        0,
        4,
        4,
        0
    ],
    [
        0,
        0,
        4,
        0
    ]
];
$_$w(1, 141), console.table(arr);
$_$w(1, 142), app = new App(arr);
$_$w(1, 143), app.moveTilesDown();
$_$w(1, 144), console.table(app.tileValues);
$_$w(1, 145), arr = [
    [
        4,
        4,
        2,
        2
    ],
    [
        4,
        2,
        4,
        2
    ],
    [
        4,
        2,
        2,
        4
    ],
    [
        2,
        4,
        2,
        2
    ]
];
$_$w(1, 146), console.table(arr);
$_$w(1, 147), app = new App(arr);
$_$w(1, 148), app.moveTilesDown();
$_$w(1, 149), console.table(app.tileValues);
$_$w(1, 150), arr = [
    [
        1024,
        4,
        8,
        4
    ],
    [
        256,
        0,
        0,
        256
    ],
    [
        256,
        256,
        0,
        256
    ],
    [
        1024,
        0,
        0,
        256
    ]
];
$_$w(1, 151), console.table(arr);
$_$w(1, 152), app = new App(arr);
$_$w(1, 153), app.moveTilesDown();
$_$w(1, 154), console.table(app.tileValues);
$_$wpe(1);