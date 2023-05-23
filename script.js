
const canvas = document.getElementById("canvas")
let isMouseDown = "false";
const page = document.querySelector("body")

page.addEventListener('mousedown', e => {
    isMouseDown = "true";
    console.log(isMouseDown);
})
page.addEventListener('mouseup', e => {
    isMouseDown = "false";
    console.log(isMouseDown);
})

createGrid = (size) => {
    for (let i=0; i<size; i++) {
        const pixelRow = document.createElement("div");
        pixelRow.className = "pixelRow";
        canvas.appendChild(pixelRow);
            for (let i=0; i<size; i++) {
                const pixel = document.createElement("div");
                pixel.addEventListener("mousedown", e => {
                    pixel.className += " coloured"})
                pixel.addEventListener("mouseover", (e) => {
                    console.log(isMouseDown);
                    if (isMouseDown == "true") {
                    pixel.className += " coloured"}})
                pixel.className = "pixel";
                pixelRow.appendChild(pixel);
                console.log("hi");
            }
    }
}

createGrid(16);