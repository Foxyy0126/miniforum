// const btn = document.getElementById('btn');

// btn.addEventListener('click' , ()=> {
//         alert('Bonjour depuis JavaScript !');
// });

console.log("app.js chargé");



const LONGUEUR_MAX = 80;
const LONGUEUR_MIN =5;


const  titres = [ 

        "Sujet 1",
        "Sujet 2",
        "Sujet 3",
        "Sujet 4",
        "Sujet 5",
        "Sujet 6",
        "Sujet 7",

];


function titresTries(titres){
       
        return [...titres].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

function chercheDansTitres(titres, texte){
        texte= texte.trim().toLowerCase();
        return [...titres].filter((t) => t.toLowerCase().includes(texte));
}

function titreExiste(titres,saisie) {
       saisie= saisie.trim().toLowerCase();
//        return [...titres].filter((t)=> t.toLowerCase().includes(saisie));
        let titles = [...titres].filter((t)=> t.toLowerCase() === saisie);
        if (titles.length > 0) {
                return true;
        } 
        return false;
}


// fonction validertitres

function validerTitre(titres , saisie){
        
        const titre = saisie.trim();
        
        if (titre ==="" /*|| titre.includes(" ")*/){
                titres = titre.trim();
                return("Le titre est obligatoire.")
        }
        if (titre.length<LONGUEUR_MIN){
                //saisie = titre.trim();
                return("Le titre doit faire au moins " + LONGUEUR_MIN+ " caractères.");
        }  
        if (titre.length>LONGUEUR_MAX){
                return("Le titre ne doit pas dépasser " + LONGUEUR_MAX+ " caractères.");
        }  
        if (titreExiste(titres, saisie)){
                return("Le titre existe déjà.");
        }
        return ("");
}

function carteSujet (titre){
const carte =document.createElement("article");
carte.classList.add("carte-sujets");

const h3 = document.createElement("h3");
h3.textContent=titre
carte.append(h3);
return carte;

}



//suppression de chaque carte de carte-sujet :
function afficherSujets(titres) {
const cartes = document.querySelectorAll(".carte-sujets");
const section=document.querySelector("#sujets");

for (let i = 0; i < cartes.length; i++) {
  const carte =cartes[i];
  carte.remove();          
}
for (const titre of titres) {
section.append(carteSujet(titre));
}
}

// function afficherSujets ( liste ) {
// const section = document . querySelector ( "#sujets" ) ;

// // vider : on retire les CARTES , une par une -- le <h2 > reste
// document.querySelectorAll(".carte-sujets").forEach((carte) => carte.remove());

// // reconstruire : une carte par titre de la liste re ç ue
// for ( const titre of titres ) {
// section.append(carteSujet(titre)) ;
// }
// }


// --- démarrage : seulement sur la page qui contient la liste ---

if (document.querySelector("#sujets")!==null){
afficherSujets (titres) ;

 // ... l 'écouteur du formulaire viendra ici (étape 4)
}












//--tests --

//BLOC TEST ETAPE 4
// console . log ( " --- etape 4 ---" ) ;
// console . table ( titresTries ( titres ) ) ; // rangées
// console . log ( titres [0]) ; // l'original n'a pas bougé
// console . log ( chercheDansTitres ( titres , " récents " ) ) ; // les titres sur récents
// console . log ( chercheDansTitres ( titres , " licorne " ) ) ; // [] : vide , pas une erreur
// console . log ( titreExiste ( titres , " GIT REFUSE MON PUSH " ) ) ; // true si à toi
// console . log ( titreExiste ( titres , " Un titre inventé " ) ) ;

//BLOC TEST ETAPE 5
// console.log ( " --- etape 5 ---" ) ;
// console.log ( validerTitre ( titres , " " ) ) ; // ... obligatoire .
// console.log ( validerTitre ( titres , " " ) ) ; // ... obligatoire .
// console.log ( validerTitre ( titres , " abcde " ) ) ; // ... au moins 5 ...
// console.log ( validerTitre ( titres , "a".repeat (81)));  // ... d é passer 80 ...
// //console.log (validerTitre (titres ,"Sujet 0"));  // ... existe pas.
// console.log (validerTitre (titres ,"Sujet 2"));  // ... existe déjà.
// console.log(titreExiste(titres, "Sujet 2"))
// const reponse = validerTitre (titres , "Bienvenue sur le MiniForum") ;
// console.log ( " [ " + reponse + " ] " ) ; // [] : cha î ne vide