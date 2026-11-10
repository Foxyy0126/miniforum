// const btn = document.getElementById('btn');

// btn.addEventListener('click' , ()=> {
//         alert('Bonjour depuis JavaScript !');
// });

console.log("app.js chargé");

const MESSAGE_MAX=500;
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
function validerPseudo(saisie){
        const pseudoSaisi = saisie.trim();
        
        if (pseudoSaisi ==="" || pseudoSaisi.includes(" ")){
              
                return("Le pseudo est obligatoire.");
        }
        return ("");
}

function validerMessage(saisie){
        const message = saisie.trim();
        if (message ==="" ){
                // titres = message.trim();
                return("Le message est obligatoire.")
        }
        if (message.length>MESSAGE_MAX){
                return("Le message ne doit pas dépasser " + MESSAGE_MAX+ " caractères.");
        }  
        return ("");
}
function validerTitre(titres , saisie){
        
        const titre = saisie.trim();
        
        if (titre ==="" /*|| titre.includes(" ")?*/ ){
                // titres = titre.trim();
                return("Le titre est obligatoire.");
        }
        if (titre.length<LONGUEUR_MIN){
                saisie = titre.trim();
                return("Le titre doit faire au moins " + LONGUEUR_MIN+ " caractères.");
        }  
        if (titre.length>LONGUEUR_MAX){
                return("Le titre ne doit pas dépasser " + LONGUEUR_MAX+ " caractères.");
        }  
        if (titreExiste(titres, titre)===true){
                return("Ce sujet existe déjà.");
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
function afficherErreur(idMessage, texte){
const zoneMessage=document.querySelector(`#${idMessage}`);
if (zoneMessage) 
        zoneMessage.textContent = texte;
}
// --- démarrage : seulement sur la page qui contient la liste ---

if ((document.querySelector("#sujets")!==null || document.querySelector("#prenomUti")!==null)) {
afficherSujets (titres) ;
const formulaire = document.querySelector ( "#form-nouveau-sujet" ) ;

       formulaire.addEventListener ( "submit" , ( event ) => {event.preventDefault () ; 
        // PREMIÈRE ligne : le navigateur n'enverra rien
        let error=false;
        const pseudo =document.querySelector("#prenomUti");
        const champTitre = document.querySelector("input[name='titre']");
        const titreSaisi = champTitre.value.trim(); 
        const messageErreur = validerTitre(titres, titreSaisi);


        const champPseudo =document.querySelector("input[name='pseudo']");
        const pseudoSaisi = champPseudo.value.trim(); 
        const messageErreurPseudo = validerPseudo(pseudoSaisi);

        const champMessage =document.querySelector("textarea[name='message']");
        const messageSaisi = champMessage.value.trim(); 
        const messageErreurText = validerMessage(messageSaisi);
       
         afficherErreur("erreur-dans-le-pseudo","");
         afficherErreur("erreur-dans-le-message", "");
         afficherErreur("erreur-dans-le-titre", "");

                if (messageErreurPseudo!== ""){
                        afficherErreur("erreur-dans-le-pseudo", messageErreurPseudo);
                        error=true ;
                }
                
                if (messageErreurText!== ""){
                        afficherErreur("erreur-dans-le-message", messageErreurText);
                        error=true;
                }
               
                if (messageErreur !== ""){
                        afficherErreur("erreur-dans-le-titre", messageErreur);
                        error=true ;
                }
               if(error){
                return;}
                 titres.push(titreSaisi);
                 afficherSujets(titres);
                formulaire.reset();
                 pseudo.focus();
             
    })
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