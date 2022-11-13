import IPlayers from "./interfaces";
import {render} from "./render";

const players: IPlayers = {
    "x player": "x",
    "o player": "o"
};

let currPlayer: string = Object.keys(players)[0];

let win: boolean = false;
let fieldSize: number = 5;
const condWin: number = 3;
let cellsArray: string[][] = new Array(fieldSize)
    .fill(null)
    .map((el) => new Array(fieldSize).fill(null));

const field: HTMLElement | null = document.querySelector(".field");
const currPlayerText: HTMLElement | null = document.querySelector(".currPlayer");
const reloadGame: HTMLElement | null = document.querySelector(".reload");
const winnerText: HTMLElement | null = document.querySelector(".winner");

const checkDraw = (field: string[][]): boolean => {
    for (let i = 0; i < fieldSize; i++) {
        for (let j = 0; j < fieldSize; j++) {
            if (!field[i][j]) {
                return false;
            }
        }
    }
    return true;
};

const getFieldCell = (x:number, y:number, field: string[][]) => {
    return field?.[x]?.[y] ?? null
}

const changeCurrPLayer = (): void => {
    if (currPlayer === Object.keys(players)[0])
        currPlayer = Object.keys(players)[1];
    else currPlayer = Object.keys(players)[0];
    // @ts-ignore
    currPlayerText.innerHTML = currPlayer + `'s move`;
};
const setMoveOnCell = (
    cellX: number,
    cellY: number,
    fieldCells: string[][]
) => {
    // @ts-ignore
    fieldCells[cellY][cellX] = players[currPlayer];
    return fieldCells;
};

const checkCondition = (cellX: number, cellY: number, field: string[][]) => {
    const condCheck = { h: 0, v: 0, dtop: 0, dbot: 0 };
    const condCheckMax = { h: 0, v: 0, dtop: 0, dbot: 0 };
    for (let i = -condWin + 1; i < condWin; i++) {
        // @ts-ignore
        if (field?.[cellY]?.[cellX - i] === players[currPlayer]) {
            condCheck.h++;
            if(condCheck.h >= condWin) return true
            if (condCheck.h > condCheckMax.h) condCheckMax.h++;
        } else condCheck.h = 0;

        // @ts-ignore
        if (field?.[cellY - i]?.[cellX] === players[currPlayer]) {
            condCheck.v++;
            if(condCheck.v >= condWin) return true
            if (condCheck.v > condCheckMax.v) condCheckMax.v++;
        } else condCheck.v = 0;

        // @ts-ignore
        if (field?.[cellY - i]?.[cellX - i] === players[currPlayer]) {
            condCheck.dtop++;
            if(condCheck.dtop >= condWin) return true
            if (condCheck.dtop > condCheckMax.dtop) condCheckMax.dtop++;
        } else condCheck.dtop = 0;

        // @ts-ignore
        if (field?.[cellY - i]?.[cellX - i * -1] === players[currPlayer]) {
            condCheck.dbot++;
            if(condCheck.dbot >= condWin) return true
            if (condCheck.dbot > condCheckMax.dbot) condCheckMax.dbot++;
        } else condCheck.dbot = 0;

        if (Math.max(...Object.values(condCheckMax)) === condWin) {
            return true;
        }

    }
    return false;
};



// @ts-ignore
field.addEventListener("click", (e) => {
    if (win) return;
    const cell = e.target as Element;

    if (cell.classList.contains("cell")) {
        const [xCoord, yCoord] = [
            Number(cell.getAttribute("cellX")),
            Number(cell.getAttribute("cellY"))
        ];

        if(getFieldCell(yCoord, xCoord, cellsArray)) return

        // @ts-ignore
        cell.innerHTML = players[currPlayer];
        cellsArray = setMoveOnCell(xCoord, yCoord, cellsArray);
        if (checkCondition(xCoord, yCoord, cellsArray)) {
            win = true;
            // @ts-ignore
            winnerText.innerHTML = currPlayer + " win!";
        } else if (checkDraw(cellsArray)) { // @ts-ignore
            winnerText.innerHTML = "Ничья";
        }

        changeCurrPLayer();

    }

});

render(field, fieldSize, cellsArray);

// @ts-ignore
reloadGame.onclick = () => {
    // @ts-ignore
    Array.from(field.children).map((el) => (el.innerHTML = ""));
    cellsArray = new Array(fieldSize)
        .fill(null)
        .map((el) => new Array(fieldSize).fill(null));
    win = false;
    currPlayer = Object.keys(players)[0];
    // @ts-ignore
    currPlayerText.innerHTML = "";
    // @ts-ignore
    winnerText.innerHTML = "";
    render(field, fieldSize, cellsArray);
};

