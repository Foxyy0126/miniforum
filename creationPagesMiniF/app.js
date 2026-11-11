// const btn = document.getElementById('btn');

// btn.addEventListener('click' , ()=> {
//         alert('Bonjour depuis JavaScript !');
// });

console.log("app.js chargé"); 

//defintion de variables constantes pour ne pas a avoir a ecrire dans le code brute //optimisation
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

//fonction qui sert a trie les titres dans l'ordre alphabetique si elle est appelee, titres mis en minuscule puis trie de a a b
function titresTries(titres){
       
        return [...titres].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

//fonction qui cherche un titre parmi d'autres, d'abord titre filtre, puis transforme en minuscules
function chercheDansTitres(titres, texte){
        texte= texte.trim().toLowerCase();
        return [...titres].filter((t) => t.toLowerCase().includes(texte));
}

/*fonction qui verifie si un titre existe , compare la saisie avec les elements du tableaux des qu'on le souhaite(meme apres avoir ajoute des elements),
 on creer une variable qui vaut le titres filtres d'abord trimes puis transformes en minuscules pour pour comparer sa longueur a 0 ==> si + longueure grande que 0 le titre existe sinon non
 creation d'un retour sous forme de booleen car  facilite le test pour savoir s'il existe */
function titreExiste(titres,saisie) {
       saisie= saisie.trim().toLowerCase();
//        return [...titres].filter((t)=> t.toLowerCase().includes(saisie));
        let titles = [...titres].filter((t)=> t.toLowerCase() === saisie);
        if (titles.length > 0) {
                return true;
        } 
        return false;
}

/*fonction qui valider pseudo saisi par utilisateur (verifie qu'il n est pas vide ou qu'il ne contient pas d'espaces), si pseudo contient des espaces ou est vide renvoie un message d'erreur qui sera traite pas la fonction 
sera analysé par fonction afficherErreur plus bas sinon renvoie chaine vide qui est aussi traiter plus bas par la fonction a-dessus*/

function validerPseudo(saisie){
        const pseudoSaisi = saisie.trim();
        if (pseudoSaisi ==="" || pseudoSaisi.includes(" ")){
                return("Le pseudo est obligatoire.");
        }
        return ("");
}
/*fonction qui valider message saisi par utilisateur (verifie qu'il n est pas vide ou qu'il ne dépasse pas MESSAGE_MAX caracteres), si message dépasse  MESSAGE_MAX caracteress ou s'il est vide renvoie un message d'erreur qui sera traite pas la fonction 
sera analysé par fonction afficherErreur plus bas sinon renvoie chaine vide qui est aussi traiter plus bas par la fonction a-dessus*/
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

/*fonction qui valider titre saisi par utilisateur (verifie qu'il n est pas vide ), si titre dépasse LONGUEUR_MAX  ou est inferieur a LONGUEUR_MIN ou s'il est vide renvoie un message d'erreur qui sera traite pas la fonction 
sera analysé par fonction afficherErreur plus bas sinon renvoie chaine vide qui est aussi traiter plus bas par la fonction a-dessus*/

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

/* fonction qui permet de creer des balises, h3 etc sans avoir a mettre quelque chose dans le HTML on le créer depuis la javascript 
*/
function carteSujet (titre){
const carte =document.createElement("article");//creer balise article avec "createElement()"
carte.classList.add("carte-sujets"); //ajoute une class avec ".classList.add()"

const h3 = document.createElement("h3");//creer titre h3 article avec "createElement()"
h3.textContent=titre//donne l'ordre d'assigner a h3 le contenu de notre tableau titres  
carte.append(h3);//accroche h3 a la balise article sinon ca se fait dans le vide dans son coin
return carte;//rend carte
}
//suppression de chaque carte de carte-sujet :
function afficherSujets(titres) {
const cartes = document.querySelectorAll(".carte-sujets");//cible les éléments du HTML qui ont une class ="carte-sujets" et assigne ces ligne a une variable cartes pour etre sur qe c'est bien vide ainsi pas de doublons
const section=document.querySelector("#sujets");//cible les éléments du HTML qui ont un id ="sujets" va servir pour savoir ou les cartes vont etre creer plus tard

for (let i = 0; i < cartes.length; i++) {
  const carte =cartes[i]; //pour chaque element qui contient class ="carte-sujets" on supprime la carte 
  carte.remove();          
}
for (const titre of titres) { //sous-entend que chaque element du tableau titreS s'appelle titre ,pour chaque element qui contient class ="carte-sujets" on supprime la carte 
section.append(carteSujet(titre));
}
}

/*//fonction qui sert a afficher une message d'erreur pour plusieur element, idMessage est provisoire et va etre remplacer par un id utilise quand la fonction est appelee, 
va verifier si l'id a la place de idMessage existe dans le HTML si oui tout va bien si non la fonction affiche un texte soit chaine vide ou message erreur personalise plus bas sinon ne fait rien (et s'arrete?) */

function afficherErreur(idMessage, texte){ 
const zoneMessage=document.querySelector(`#${idMessage}`);
if (zoneMessage) 
        zoneMessage.textContent = texte;
}
// --- démarrage : seulement sur la page qui contient la liste ---

if ((document.querySelector("#sujets")!==null )) {//|| document.querySelector("#prenomUti")!==null
afficherSujets (titres) ;//affiche la liste des titres deja connus
const formulaire = document.querySelector ( "#form-nouveau-sujet" ) ;

       formulaire.addEventListener ( "submit" , ( event ) => {event.preventDefault () ; //preventDefault() permet de bloque le rechargement de la page comportement automatique du navigateur lorsqu'on envoie un formulaire on peut ainsi voir les messages d'erreurs potentiels qui s'afficherait
        // PREMIÈRE ligne : le navigateur n'enverra rien
        let error=false;//on par d'une valeur :false pour executer le debut du script sii quelque chose ne rempli par les conditions va dans le dernier if car devenu true et s'arrete sinon va jusqu'a la fin des instructions
        const pseudo =document.querySelector("#prenomUti"); //sert pour le focus a la fin
        const champTitre = document.querySelector("input[name='titre']");//cible element HTML avec id ="#titre"
        const titreSaisi = champTitre.value.trim(); //element nettoye et on recupere sa valeur car .value sert a recuperer le texte tape par utilisateur
        const messageErreur = validerTitre(titres, titreSaisi);//sert a afficher un message d'erreur si le titre ne convient pas sinon chaine vide


        const champPseudo =document.querySelector("input[name='pseudo']");//cible element HTML avec id ="#pseudo"
        const pseudoSaisi = champPseudo.value.trim(); //element nettoye et on recupere sa valeur car .value sert a recuperer le texte tape par utilisateur
        const messageErreurPseudo = validerPseudo(pseudoSaisi);//sert a afficher un message d'erreur si le pseudo ne convient pas sinon chaine vide

        const champMessage =document.querySelector("textarea[name='message']");//cible element HTML avec textearea name="message"
        const messageSaisi = champMessage.value.trim();  //element nettoye et on recupere sa valeur car .value sert a recuperer le texte tape par utilisateur
        const messageErreurText = validerMessage(messageSaisi);//sert a afficher un message d'erreur si le message ne convient pas sinon chaine vide
       

        //si tout va bien n'affiche pas de message d'erreur
         afficherErreur("erreur-dans-le-pseudo","");
         afficherErreur("erreur-dans-le-message", "");
         afficherErreur("erreur-dans-le-titre", "");

         //si tout ne va pas bien affiche un message d'erreur
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
                //si message, titre, pseudo invalides s'arrete
               if(error){
                return;}
                //sinon envoie bien la carte et reinitialise le formulaire
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

// bloc test affichage 
// console.log("[" + validerPseudo(" ") +"]");
// console.log("[" + validerPseudo("alice") +"]");
// console.log("[" + validerMessage("a".repeat(500)) +"]");
// console.log("[" + validerMessage("a".repeat(501)) +"]");