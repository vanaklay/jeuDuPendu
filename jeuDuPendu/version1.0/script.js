

let name = prompt("Quel est ton nom ?");
let play = confirm("Bonjour " + name + "\nTu veux jouer avec moi au Jeu du Pendu ? ");
if (play) {
  let category = selectCategory();

  // 1-b. Lets the computer choose a word between his arrays or objects ?
  const words = { animaux : ["elephant", "girafe", "hippopotame", "cheval", "hamster"],
                  maison : ["cuisine", "chambre", "douche", "bureau", "lavabo"],
                  reseaux : ["facebook", "instagram", "youtube", "linkedin", "tiktok"]};



  let indice = Math.floor(Math.random() * words[category].length);
  let secretWord = words[category][indice];

  // 2. Find the secret word letter by letter
  let wordFound = [];
  for ( let i = 0; i < secretWord.length; i++) {
    wordFound.push(" _ ");
  }
  alert(wordFound.join(""));
  let count = 0;
  for (let j = 0; j < secretWord.length + 2; j++) {
    count++;
    let letter = prompt("Tu as le droit à " + ((secretWord.length + 2) - j) + " essai(s) !" +  "\n Choisis une lettre ");
    for (let i = 0; i < secretWord.length; i++) {
      if (letter == secretWord[i]) {
        wordFound[i] = letter;
      }
    }
    let testWord = wordFound.join("");
    if ( testWord == secretWord ) {
      alert("Bravo " + nom + " tu as trouvé le mot secret : " + secretWord + " ! \nEn " + count + " essais !");
      break;
    }
    else {
      alert("test : "+ testWord);
    }

  }
}
else {
  alert("Tant pis, une prochaine fois !");
}

// pseudo code
// le rendre plus visuel en utilisant des images de lettres qui s'affiche à l'écran

// 1. Choose a word in the selected category
// 1-a. Ask which category
//
function newConfirm(category, okCategory) {
  let step = true;
  while (step) {
    category = prompt("Ecris dans la zone la catégorie du mot à deviné parmi : animaux, maison ou reseaux");
    if ( okCategory.includes(category) ) {
      let confirmCategory = confirm(" Tu as bien choisi la catégorie " + category + " ?");
      if (confirmCategory) {
        step = false;
        alert("Ok laisse moi trouver un mot à deviner !");
        return category;
      }
    }
    else {
      alert("Je ne connais pas cette catégorie. \n Soit c'est la catégorie : \n animaux \n maison \n reseaux");
    }
  }
}
function selectCategory() {
  let category = prompt("Ecris dans la zone la catégorie du mot à deviné parmi : animaux, maison ou reseaux").toLowerCase();
  const autorizCategory = ["animaux", "maison", "reseaux"];
  if ( autorizCategory.includes(category) ) {
    let confirmCategory = confirm(" Tu as bien choisi la catégorie " + category + " ?");
    if (confirmCategory) {
      alert("Ok laisse moi trouver un mot à deviner !");
      return category;
    }
    else {
      category = newConfirm(category, autorizCategory);
      return category;
      }
    }
  else {
    alert("Je ne connais pas cette catégorie. \n Soit c'est la catégorie : \n animaux \n maison \n reseaux");
    category = newConfirm(category, autorizCategory);
    return category;
  }
}




// After 4 hours work, that's what i accomplished


// Pseudo code
// while le mot n'a pas été déviné {                                    ==> i use a for loop
  // Afficher la progression du joueur                                  ==> ok
          // let progression = [];
  // Récupérer un essai du joueur                                       ==> ok
  // if le joueur veut quitter la partie {                              ==> not done
  // Quitter la partie
  //  }
  // else if la réponse du joueur contient plus d'une lettre {          ==> not done
    // Demander au joueur de saisir une seule lettre
  // }
  // else {
    // if la réponse du joueur est dans le mot secret {                 ==> ok
      // Mettre à jour le tableau de réponses avec la nouvelle réponse  ==> ok
      //}
  // }
//}
// Féliciter le joueur pour avoir deviné le mot secret  ok done         ==> ok

// Add "Do you want play again ? "                                      ==> not done
