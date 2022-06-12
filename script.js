let button = document.querySelector(".button");
let klub = document.querySelector(".klub");
let themeName = document.querySelector(".themeName");
let licznik;

button.addEventListener("click", () => {
    licznik = Math.floor(Math.random() * 8);
    switch (licznik) {
        case 1:
            themeName.innerText = "Real Madryt";
            break;
        case 2:
            themeName.innerText = "Legia Warszawa";
            break;
        case 3:
            themeName.innerText = "PSG";
            break;
        case 4:
            themeName.innerText = "Liverpool";
            break;
        case 5:
            themeName.innerText = "Coco Jambo Warszawa";
            break;
        case 6:
            themeName.innerText = "Lech Poznań";
            break;
        case 7:
            themeName.innerText = "Wisła Kraków";
            break;
        default:
            themeName.innerText = "Juventus";
    }
})
