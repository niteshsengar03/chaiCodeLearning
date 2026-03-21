const selectColor = document.getElementById("format")
const selectTone = document.getElementById("tone")
const btn = document.getElementById("generateBtn");
const plt = document.getElementById("palette");

function generateRandomRGB(tone) {


    // r,g,b => (0,0,0) - black
    // r,g,b => (255,255,255) - white 

    // if range is any then we can take whole range
    let max = 255;
    let min = 0;


    if (tone === "light") {
        // overall range is light
        min = 150;
        max = 255;
    } else if (tone === "dark") {
        // range is dark 0 - 155
        min = 0;
        max = 125;
    }

    const r = Math.floor(Math.random() * (max - min) + min);
    const g = Math.floor(Math.random() * (max - min) + min);
    const b = Math.floor(Math.random() * (max - min) + min);
    return { r, g, b };
}

function rgbtoHex(r, g, b) {
    const arr = [r, g, b];
    const newArr = arr.map(toConvertoneElementToHex);
    const data = newArr.join("");
    console.log(data);
    return data;
}

function toConvertoneElementToHex(data) {
    const convertDataToHex = data.toString(16);
    const addPadding = convertDataToHex.padStart(2, "0");
    return addPadding;
}

function generatePalette() {
    plt.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        const { r, g, b } = generateRandomRGB(selectTone.value);

        let color;
        if (selectColor.value === "hex") {
            color = rgbtoHex(r, g, b);
        } else {
            color = `rgb(${r}, ${g}, ${b})`;
        }
        const div = document.createElement("div");
        div.classList.add("color");
        div.style.background = `rgb(${r}, ${g}, ${b})`;
        div.textContent = color;
        plt.appendChild(div);
    }
}

generatePalette();




btn.addEventListener("click", generatePalette);
