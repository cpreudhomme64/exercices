// Calcul du résultat
function Resultat()
{
  document.calculatrice.affichage.value = eval(document.calculatrice.affichage.value)
}

// Supprimer la valeur
function Supprim()
{
  document.calculatrice.affichage.value = ""
}

// Ajouter signe
function Ajout(Signe)
{
  document.calculatrice.affichage.value += Signe
}

