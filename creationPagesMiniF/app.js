// const btn = document.getElementById('btn');

// btn.addEventListener('click' , ()=> {
//         alert('Bonjour depuis JavaScript !');
// });

console.log("app.js chargé");



const LONGUEUR_MAX = 80;
const LONGUEUR_MIN =5;


const  titres = [ 

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
       
        return [...titres].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

function chercheDansTitres(titres, texte){
        texte= texte.trim().toLowerCase();
        return [...titres].filter((t) => t.toLowerCase().includes(texte));
}

function titreExiste(titres,saisie) {
       saisie= saisie.trim().toLowerCase();
       return [...titres].filter((t)=> t.includes(saisie));
}

console . log ( " --- etape 4 ---" ) ;
console . table ( titresTries ( titres ) ) ; // rangées
console . log ( titres [0]) ; // l'original n'a pas bougé
console . log ( chercheDansTitres ( titres , " récents " ) ) ; // les titres sur récents
console . log ( chercheDansTitres ( titres , " licorne " ) ) ; // [] : vide , pas une erreur
console . log ( titreExiste ( titres , " GIT REFUSE MON PUSH " ) ) ; // true si à toi
console . log ( titreExiste ( titres , " Un titre inventé " ) ) ;