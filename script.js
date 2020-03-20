

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
  alert("Le mot a trouver est composé de " + secretWord.length + " lettres. \n" + wordFound.join(""));

  // ----- my code -----
  let count = secretWord.length + 4;
  let numberMissingLetters = secretWord.length;
  while ( numberMissingLetters > 0 ) {
    let letter = prompt("Tu as le droit à " + count + " essai(s) !" +  "\n Devine une lettre, ou clique sur annuler pour quitter la partie ");
    // add escape the game
    if ( letter === null) {
      let quit = confirm("Hey " + name + " !\nTu veux vraiment quitter la partie ?");
      if (quit) {
        break;
      }
    }
    // check only one letter
    else if (letter.length !== 1) {
      alert("Tu ne dois saisir qu'une seule lettre.");
    }

    else {
      count--;
      for (let i = 0; i < secretWord.length; i++) {
        if (letter.toLowerCase() == secretWord[i]) {
          wordFound[i] = letter.toLowerCase();
          numberMissingLetters--;
        }
      }
      let testWord = wordFound.join("");
      alert("Mot secret : "+ testWord);

      if ( numberMissingLetters == 0 ) {
        alert("Bravo " + name + " tu as trouvé le mot secret : " + secretWord);
        break;
      }
      if ( count == 0 ) {
        alert("You lose ... GAME OVER ... \nRafraichis la page pour m'affronter à nouveau !");
        break;
      }
    }
  }
}
else {
  alert("Tant pis, une prochaine fois !");
}

  // --------------------

  // ------ code from the book ------
//   let numberMissingLetters = secretWord.length;
//
//   while (numberMissingLetters > 0) {
//     alert(wordFound.join(""));
//     let reponse = prompt("Devine une lettre, ou clique sur Annuler pour quitter la partie.");
//     if (reponse === null) {
//       break;
//     }
//     else if (reponse.length !== 1) {
//       alert("Tu ne dois saisir qu'une seule lettre.");
//     }
//     else {
//       for ( let j = 0; j < secretWord.length; j++) {
//         if (secretWord[j] === reponse) {
//           wordFound[j] === reponse;
//           numberMissingLetters--;
//         }
//       }
//     }
//     if (numberMissingLetters == 0) {
//       alert("Félicitations ! Tu as trouvé le mot secret " + secretWord);
//     }
//   }
// }

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

// Version 1.1 update
// accept Uppercase letter
// accept only one letter
// quit mode activate
// while loops
// game over message
//


// After 4 hours work, that's what i accomplished


// Pseudo code
// while le mot n'a pas été déviné {                                    ==> UPDATE v1.1: i use the while loops like the book
  // Afficher la progression du joueur                                  ==> ok
          // let progression = [];
  // Récupérer un essai du joueur                                       ==> ok
  // if le joueur veut quitter la partie {                              ==> UPDATE v1.1: the player can quit the game with confirm process
  // Quitter la partie
  //  }
  // else if la réponse du joueur contient plus d'une lettre {          ==> UPDATE v1.1: Only one letter allowed
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
