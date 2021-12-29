"use strict";

function makeGrid(){
    let height = document.querySelector("#inputHeight").value,
        width = document.querySelector("#inputWidth").value,
        canvas = document.querySelector("#pixelCanvas");
    canvas.innerHTML = "";
    for(let tr = 0; tr < height; tr++){
        let row = document.createElement("tr");
        canvas.appendChild(row);
        for(let td = 0; td < width; td++){
            let column = document.createElement("td");
            row.appendChild(column);
            column.addEventListener("click", (event) => {
                let color = document.querySelector("#colorPicker").value;
                event.target.style.backgroundColor = color;
            });
        }
    }
}
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    makeGrid();
})