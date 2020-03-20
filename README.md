# Un jeu du Pendu version 1.1
___

## Le but de ce projet est de créer un jeu du pendu en javascript.

Dans le jeu du pendu, un des deux joueurs pense à un mot secret et l'autre essaie de le deviner.
Ce sera l'ordinateur qui va choisir un mot secret et c'est à toi de le trouver.

Ce projet est tiré du livre "Javascript pour les kids" de Nick Morgan.

Ne connaissant pas vraiment les règles de ce jeu, je suis parti du pseudo code noté dans le livre et je me suis donné en défi de réussir à le coder en moins de 4h sans l'aide du livre.

Dans la version 1.0 présent sur Github, c'est le résultat du travail accompli en 4h sans l'aide du livre en partant donc du pseudo code suivant :

```
  Choisir un mot au hasard
  while le mot n'a pas été deviné {
    Afficher la progression du joueur
    Récupérer un essai du joueurs

    if le joueur veut quitter la partie {
      Quitter la partie
    }
    else if la réponse du joueur contient plus d'une lettre {
      Demander au joueur de saisir une seule lettre
    }
    else {
      if la réponse du joueur est dans le mot secret {
        Mettre à jour le tableau de réponses avec la nouvelle réponse
      }
    }
  }
  Féliciter le joueur pour avoir deviné le mot secret
```

Mes commentaires sur la version 1.0 :
  - J'ai ajouté une fonction qui permet de choisir un thème.
  - Je n'ai pas utilisé de boucle while.
  - Je n'ai pas ajouté de procédure de Quitter la partie.
  - Je n'ai pas ajouté de procédure pour la limitation du nombre de lettre à taper.

Mes commentaires sur la version 1.1 :
  - Le cas lettre majuscule en saisie ajouté.
  - Le cas une seule lettre autorisée ajouté.
  - Le cas zone vide ajouté.
  - L'option de quitter la partie ajouté.
  - Finalement, j'ai suivi le livre et je fais une boucle while.
  - Le cas défaite du joueur ajouté.

Modifications envisageables :
  - Insertion du jeu dans une page web.
  - Affichage intéractive des lettres et du mot.
  - Insertion d'effets sonores lorsque la bonne lettre est trouvée.
  - Terminer les éléments dans le pseudo code.
