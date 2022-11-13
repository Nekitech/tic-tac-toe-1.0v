export const render = (field: HTMLElement | null, fieldSize: number, cellsArray: string[][]) => {
    // @ts-ignore
    field.innerHTML = "";
    // @ts-ignore
    field.setAttribute(
        "style",
        `grid-template-columns: repeat(${fieldSize}, 50px)`
    );
    for (let i = 0; i < fieldSize * fieldSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        // @ts-ignore
        field.appendChild(cell);
    }
    // @ts-ignore
    Array.from(field.children).forEach((el:HTMLElement, i) => {
        el.setAttribute("cellX", String(i % (fieldSize)));
        el.setAttribute("cellY", String(Math.floor(i / (fieldSize))));
        el.innerHTML = cellsArray?.[Math.floor(i / fieldSize)]?.[i % fieldSize] ?? null;
    });

};