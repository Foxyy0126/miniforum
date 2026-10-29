// const btn = document.getElementById('btn');

// btn.addEventListener('click' , ()=> {
//         alert('Bonjour depuis JavaScript !');
// });

console.log("app.js chargé");



const LONGUEUR_MAX = 80;
const LONGUEUR_MIN =5;


const titres = [ 

        "Bienvenue sur le MiniForum",
        "Sujets récents",
        "Sujet 1",
        "Sujet 2",
        "Sujet 3",
        "Vos informations, qui êtes-vous ?",
        "Nouveau sujet",
        "Option de publication"

];


        
// const titresTries = [...titres].sort((a,b) => a.localeCompare(b));


// const chercheDansTitres =[...titres].filter((t) => t.includes("?"));

function titresTries(titres){

        return [...titres].sort((a,b) => a.localeCompare(b));
}

function chercheDansTitres(titres, texte){
        texte= texte.toLowerCase();
        return [...titres].filter((t) => t.includes(texte))
}

function titreExiste(titres,saisie) {
       saisie= saisie.trim().toLowerCase();
       return [...titres].filter((t)=> t.includes(saisie));
}