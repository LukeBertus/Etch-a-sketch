
const canvas = document.getElementById("canvas")
let isMouseDown = "false";
const page = document.querySelector("body")

window.addEventListener('mousemove', function() {
    let canvas = document.getElementById('canvas');
    let canvasContainer = document.getElementById('canvasContainer');
    let headerContainer = document.getElementById('headerContainer')
    let height = canvasContainer.offsetHeight;
    canvas.style.width = height + 'px';
    headerContainer.style.width = height + 'px';
  });

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
                    event.preventDefault();
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

let newGrid = document.getElementById('newGrid');
newGrid.addEventListener('click', (e) => {
    let num = prompt("How many pixels do you want in your grid?");
    if (!num>0) alert("Enter a positive number");
    else {
        let elements = document.querySelectorAll('.pixel')
        let rows = document.querySelectorAll('.pixelRow')
        elements.forEach( e => {e.parentNode.removeChild(e)})
        rows.forEach( e => {e.parentNode.removeChild(e)})
        createGrid(num);
    }
})
createGrid(16);