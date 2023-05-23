let gridSize = 16;

const canvas = document.getElementById("canvas")

createGrid = (size) => {
    for (let i=0; i<size; i++) {
        const pixelRow = document.createElement("div");
        pixelRow.className = "pixelRow";
        canvas.appendChild(pixelRow);
            for (let i=0; i<size; i++) {
                const pixel = document.createElement("div");
                pixel.className = "pixel";
                pixelRow.appendChild(pixel);
                console.log("hi");
            }
    }
}

createGrid(3);