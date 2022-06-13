
const button = document.querySelector(".button");
button.addEventListener("click", () => {
    const themeName = document.querySelector(".themeName");
    const licznik = () => { return (Math.floor(Math.random() * 8)) }
    const TextChange = (club) => { return (themeName.innerText = club) };
    switch (licznik()) {
        case 1:
            club = "Real Madryt"
            TextChange(club);
            break;
        case 2:
            club = "Legia Warszawa";
            TextChange(club);
            break;
        case 3:
            club = "PSG";
            TextChange(club);
            break;
        case 4:
            club = "Liverpool";
            TextChange(club);
            break;
        case 5:
            club = "Coco Jambo Warszawa";
            TextChange(club);
            break;
        case 6:
            club = "Lech Poznań";
            TextChange(club);
            break;
        case 7:
            club = "Wisła Kraków";
            TextChange(club);
            break;
        default:
            club = "Juventus";
            TextChange(club);
    }
})

