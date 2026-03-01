
let gry = [
   
    ["Żelazo", "Podstawowy surowiec dla wiekszosći craftingów"],
    ["Diament", "Najcenniejszy surowiec w grze."],
    ["Netheryt", "Najrzadaszy surowiec w grze."],
    ["Nether", "Piekielny wymiar pełen niebezpieczeństw."],
     ["End", "(dawniej Kres) jest trzecim i ostatnim wymiarem w Minecraft."],
    ["Smok Endu", "Główny boss gry"]
];


let cytaty = [
    "Fun fact: Creeper powstał przez przypadek!",
    "Minecraft rozwija kreatywność",
    "Kopie Diamenty kilof przeklęty",
    "Chicken Jockey"
];


let losowy = Math.floor(Math.random() * cytaty.length);
document.getElementById("cytat").innerHTML = cytaty[losowy];


function pokazListe(lista) {
    let div = document.getElementById("lista");
    div.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        div.innerHTML += 
        "<div class='karta'>" +
        "<h3>" + lista[i][0] + "</h3>" +
        "<p>" + lista[i][1] + "</p>" +
        "</div>";
    }
}


pokazListe(gry);


function wyszukaj() {
    let tekst = document.getElementById("szukaj").value.toLowerCase();
    let nowaLista = [];

    for (let i = 0; i < gry.length; i++) {
        if (gry[i][0].toLowerCase().includes(tekst)) {
            nowaLista.push(gry[i]);
        }
    }

    pokazListe(nowaLista);
}


function zaloguj() {
    let login = document.getElementById("login").value;

    if (login == "") {
        alert("Uzupełnij login!");
    } else {
        document.getElementById("powitanie").innerHTML = "Witaj " + login + "!";
    }
}


function zmienTlo() {
    let kolory = ["lightgreen", "lightblue", "lightyellow", "lightgray", "white"];
    let los = Math.floor(Math.random() * kolory.length);
    document.body.style.backgroundColor = kolory[los];
}