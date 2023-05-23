let gridSize = 16;

const canvas = document.getElementById("canvas")

createGrid = (size) => {
    for (i=0; i<size; i++) {
        const pixel = document.createElement("div");
        pixel.className = "pixelRow"
        canvas.appendChild(pixel);
    }
}

createGrid(7);